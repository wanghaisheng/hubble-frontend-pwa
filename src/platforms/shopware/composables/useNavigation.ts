import { ref, Ref } from 'vue'
import { Navigation, IUseNavigation } from '@hubblecommerce/hubble/commons'
import { CategoryShopware } from '@hubblecommerce/hubble/platforms/shopware/api-client'
import { hblMapNavigation } from '#imports'

const navigation: Ref<Navigation> = ref(null)

export const useNavigation = function (): IUseNavigation {
    const loading: Ref<boolean> = ref(false)
    const error: Ref = ref(false)

    const getNavigation = async (): Promise<Navigation | void> => {
        loading.value = true
        error.value = false

        try {
            const response = await CategoryShopware.readNavigation(
                'main-navigation',
                'main-navigation',
                {}
            )

            const mappedData = hblMapNavigation(response)

            loading.value = false
            return mappedData
        } catch (e) {
            loading.value = false
            error.value = e
            throw e
        }
    }

    return {
        navigation,
        getNavigation,
        loading,
        error
    }
}
