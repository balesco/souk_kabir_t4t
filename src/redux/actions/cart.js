
export const addItem = (product) => {
    return {
        type: 'addItem',
        data: product,
    }
}
export const removeItem = (product) => {
    return {
        type: 'removeItem',
        data: product,
    }
}

export const setQuantity = (product, qty) => {
    return {
        type: 'setQuantity',
        data: { product: product, quantity: qty },
    }
}