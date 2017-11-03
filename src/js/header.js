const swapHeaderToPhone = function() {
    if (window.innerWidth < 768) {
        const shop = document.querySelector('#shop'),
            shopLogo = shop.querySelector('#shopLogo'),
            shopLink = shop.querySelector('#shopLink'),
            shopPhoneNumber = shop.querySelector('#shopPhoneNumber'),
            search = document.querySelector('#search'),
            content = document.querySelector('#content'),
            breadcrumbs = document.querySelector('#breadcrumbs');

        if (shopPhoneNumber) {
            shopPhoneNumber.remove();
        }

        if (search) {
            search.remove();
        }

        content.insertBefore(search, breadcrumbs);

        shopLogo.remove();
        shop.insertBefore(shopLogo, shopLink);
    }
};

document.addEventListener('onload', swapHeaderToPhone());
window.addEventListener('onresize', swapHeaderToPhone());
