if (window.innerWidth < 768) {
    const productInfo = document.querySelector('#productInfo'),
        productSizeColor = productInfo.querySelector('#productSizeColor'),
        productCost = productInfo.querySelector('#productCost');

    productSizeColor.remove();
    productInfo.insertBefore(productSizeColor, productCost);
}
