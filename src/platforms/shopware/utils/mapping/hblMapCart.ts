import { Cart as SwCart } from '@hubblecommerce/hubble/platforms/shopware/api-client'
import { Cart } from '@hubblecommerce/hubble/commons'
import { hblMapLineItems, hblMapTotals } from '#imports'

export function hblMapCart (cart: SwCart): Cart {
    return {
        // @ts-ignore
        id: cart.token,
        // @ts-ignore
        lineItems: hblMapLineItems(cart.lineItems),
        price: hblMapTotals(cart.price),
        // @TODO: Patch api client, add missing deliveries types
        // @ts-ignore
        shippingCosts: cart.deliveries.length > 0 ? cart.deliveries[0].shippingCosts.totalPrice : null,
        comment: cart.customerComment
    }
}
