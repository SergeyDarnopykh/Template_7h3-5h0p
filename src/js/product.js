const changeProduct = function(event) {
    const $productProperties = $('#productProperties'),
        $productCost = $('#productCost'),
        $productBuy = $('#productBuy');

    if ($(window).width() < 768) {
        $productCost.detach();
        $productBuy.before($productCost);
    } else if (event.type === 'resize') {
        $productCost.detach();
        $productProperties.before($productCost);
    }
};

$(window).on('load resize', (event) => {
    changeProduct(event);
});
