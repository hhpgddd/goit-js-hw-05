function isEnoughCapacity(products, containerSize) {
    let sum = 0;
    for (const product in products) {
        sum += products[product];
    }
    return sum <= containerSize;
}