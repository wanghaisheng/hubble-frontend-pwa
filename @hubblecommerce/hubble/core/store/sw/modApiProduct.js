import { slugify } from '@hubblecommerce/hubble/core/utils/menuHelper';
import _ from 'lodash';

export const state = () => ({
    dataProduct: {},
    dataProductRelations: {},
    dataProductsCrossBuybox: {},
    dataProductsCrossByOrder: {},
    dataProductsCrossSimilar: {},
    dataProductUpsellings: {},
    optionIsSelected: false,
    optionNotSelectedError: false,
    selectedVariants: [],

    // Routing Information
    openDetail: false,
    productId: null,
});

export const mutations = {
    setDataProduct(state, payload) {
        state.dataProduct = payload.data;
    },
    setDataProductItem(state, payload) {
        state.dataProduct.result.item = payload.data;
    },
    setDataProductRelations(state, payload) {
        state.dataProductRelations = payload.data;
    },
    setDataProductsCrossBuybox(state, payload) {
        state.dataProductsCrossBuybox = payload.data;
    },
    setDataProductsCrossByOrder(state, payload) {
        state.dataProductsCrossByOrder = payload.data;
    },
    setDataProductsCrossSimilar(state, payload) {
        state.dataProductsCrossSimilar = payload.data;
    },
    setDataProductUpsellings(state, payload) {
        state.dataProductUpsellings = payload.data;
    },
    setOptionIsSelected(state) {
        state.optionIsSelected = true;
    },
    setSelectedVariants(state, payload) {
        state.selectedVariants = payload;
    },
    resetSelectedVariants(state) {
        state.optionIsSelected = false;
        state.selectedVariants = [];
    },
    setOptionNotSelectedError(state) {
        state.optionNotSelectedError = true;
    },
    removeOptionNotSelectedError(state) {
        state.optionNotSelectedError = false;
    },
    setOpenDetail(state, payload) {
        state.openDetail = payload;
    },
    setProductId(state, payload) {
        state.productId = payload;
    },
};

export const getters = {
    getMediaGalleryArray(state) {
        if (!_.isEmpty(state.dataProduct)) {
            let allProductImages = [],
                mediaGallery = state.dataProduct.result.item.media_gallery;

            mediaGallery.forEach((item) => {
                allProductImages.push(item.value);
            });

            return allProductImages;
        }
    },
    getOpenDetail(state) {
        return state.openDetail;
    },
    getProductId(state) {
        return state.productId;
    },
};

export const actions = {
    async fetchProduct({ commit, state, dispatch }, payload) {
        try {
            const response = await dispatch(
                'apiCall',
                {
                    action: 'post',
                    tokenType: 'sw',
                    apiType: 'data',
                    endpoint: '/store-api/v3/product',
                    data: {
                        filter: payload.filter,
                        associations: {
                            "manufacturer": {
                                "associations": {
                                    "media": {},
                                },
                            },
                            "properties": {
                                "associations": {
                                    "group": {}
                                }
                            },
                            "media": {},
                            "productReviews": {},
                            "options": {
                                "associations": {
                                    "productOptions": {},
                                    "group": {}
                                }
                            },
                            "categories": {},
                            "seoUrls": {},
                            "crossSellings": {},
                        },
                        includes: {
                            "product": [
                                "media",
                                "productReviews",
                                "children",
                                "name",
                                "ratingAverage",
                                "calculatedPrice",
                                "calculatedPrices",
                                "calculatedListingPrice",
                                "cover",
                                "parentId",
                                "id",
                                "translated",
                                "options",
                                "properties",
                                "productNumber",
                                "manufacturer",
                                "seoUrls",
                                "optionIds",
                                "ean",
                                "description",
                                "stock",
                                "available",
                                "deliveryTime",
                                "shippingFree",
                                "crossSellings",
                                "childCount"
                            ],
                            "product_media": [
                                "media"
                            ],
                            "calculated_price": [
                                "unitPrice",
                                "quantity",
                                "listPrice"
                            ],
                        }
                    }
                },
                { root: true }
            );

            return response;
        } catch(error) {
            console.log('getProductData error: ', error);
            return error;
        }
    },
    async getProductData({ commit, state, dispatch }, payload) {
        return new Promise(function (resolve, reject) {
            let endpoint = _.join(
                [
                    '/store-api/v3/product/',
                    state.productId,
                    '?associations[manufacturer][associations][media][]',
                    '&associations[seoUrls][]',
                    '&associations[media][]',
                    '&associations[children][associations][options][associations][group][]',
                    '&associations[crossSellings][]',
                ],
                ''
            );

            dispatch(
                'apiCall',
                {
                    action: 'get',
                    tokenType: 'sw',
                    apiType: 'data',
                    endpoint: endpoint,
                },
                { root: true }
            )
                .then((response) => {
                    dispatch('mappingProduct', { product: response.data.data, path: payload.path }).then((res) => {
                        let responseObj = {
                            data: {
                                result: {
                                    item: res
                                }
                            }
                        };

                        commit('setDataProduct', responseObj);

                        resolve(responseObj);
                    });
                })
                .catch((error) => {
                    console.log('getProductData error: ', error);

                    reject(error);
                });
        });
    },
    async mappingProduct({ dispatch }, payload) {
        return new Promise(function (resolve, reject) {
            let obj = {};

            let product = payload.product;

            obj.id = product.id;
            obj.sku = product.ean;
            obj.type = 'simple';
            if (product.optionIds !== null) {
                obj.type = 'configurable';
            }
            if (product.cover != null) {
                obj.image = product.cover.media.url;
            }
            obj.name = product.translated.name;
            obj.description = product.translated.description;
            obj.meta_title = product.metaTitle;
            obj.meta_keywords = product.keywords;
            obj.meta_description = product.metaDescription;
            if (product.manufacturer != null) {
                obj.manufacturer_id = product.manufacturer.id;
                obj.manufacturer_name = product.manufacturer.name;

                obj.manufacturer_item = {
                    url: product.manufacturer.link,
                    name: product.manufacturer.name,
                };

                if (product.manufacturer.media !== null) {
                    obj.manufacturer_item.logo = product.manufacturer.media.url;
                }
            }
            obj.name_orig = product.translated.name;

            if (!_.isEmpty(product.seoUrls)) {
                obj.url_pds = product.seoUrls[product.seoUrls.length - 1].seoPathInfo;
            } else if (!_.isEmpty(payload.path)) {
                obj.url_pds = payload.path;
            } else if (!_.isEmpty(payload.product.name)) {
                obj.url_pds = slugify(payload.product.name);
            } else {
                obj.url_pds = '';
            }
            obj.stock_item = {
                qty: product.stock,
                is_in_stock: product.available,
            };
            obj.final_price_item = {
                special_to_date: null,
                special_from_date: null,
                display_price_netto: product.calculatedPrice.unitPrice,
                display_price_netto_special: null,
                display_price_brutto: product.calculatedPrice.unitPrice,
                display_price_brutto_special: null,
                priceinfo: null,
                tax_class_id: 1,
            };

            if (!_.isEmpty(product.calculatedPrices)) {
                obj.calculatedPrices = product.calculatedPrices;
            }

            if (product.deliveryTime !== null) {
                obj.delivery_time = product.deliveryTime;
            }

            obj.shipping_free = product.shippingFree;

            obj.media_gallery = [];
            if (product.media !== null) {
                _.each(product.media, (item) => {
                    obj.media_gallery.push({
                        attribute_id: null,
                        value: item.media.url,
                        label: item.media.alt,
                        position: item.position,
                        disabled: false,
                    });
                });
            }

            obj.related_product_ids = {
                buybox: [],
                byorder: [],
            };

            obj.crossSellings = product.crossSellings;

            obj.status = {
                is_new_from_date: '',
                is_new_to_date: '',
            };

            obj.facets = {
                number_facets: [],
                string_facets: [],
                category_facets: [],
            };

            obj.properties = product.properties;
            obj.optionIds = product.optionIds;
            obj.options = product.options;
            obj.parentId = product.parentId;

            if(payload.configurator != null) {
                obj.groups = payload.configurator;
            }

            resolve(obj);
        });
    },
};
