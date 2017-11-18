const $shop = $('#shop'),
    $shopLogo = $('#shopLogo'),
    $shopLink = $('#shopLink'),
    $shopPhoneNumber = $('#shopPhoneNumber'),
    $search = $('#search'),
    $breadcrumbs = $('#breadcrumbs'),
    $nav = $('#navigation');

const changeHeaderElements = function(event) {
    function detachElements() {
        $search.detach();
        $shopPhoneNumber.detach();
        $shopLogo.detach();
    }

    if ($(window).width() < 768) {
        detachElements();
        $breadcrumbs.before($search);
        $shopLink.before($shopLogo);
    } else if (event.type === 'resize') {
        detachElements();
        $shop.append($shopLogo);
        $shop.append($shopPhoneNumber);
        $nav.append($search);
    }
};

$(window).on('load resize', event => {
    changeHeaderElements(event);
});
