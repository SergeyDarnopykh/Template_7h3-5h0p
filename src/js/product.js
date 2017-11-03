const swapProductToPhone = function() {
    if (window.innerWidth < 768) {
        const productInfo = document.querySelector('#productInfo'),
            productProperties = productInfo.querySelector('#productProperties'),
            productCost = productInfo.querySelector('#productCost');

        productProperties.remove();
        productInfo.insertBefore(productProperties, productCost);
    }
};

document.addEventListener('onload', swapProductToPhone());
window.addEventListener('onresize', swapProductToPhone());
