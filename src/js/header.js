if (window.innerWidth < 768) {
    const shopInfo = document.querySelector('#shopInfo'),
        shopLogo = shopInfo.querySelector('#shopLogo'),
        shopLink = shopInfo.querySelector('#shopLink'),
        shopPhoneNumber = shopInfo.querySelector('#shopPhoneNumber'),
        search = document.querySelector('#search'),
        header = document.querySelector('#header'),
        headerBottom = document.querySelector('#headerBottom'),
        content = document.querySelector('#content'),
        breadcrumbs = document.querySelector('#breadcrumbs');

    shopPhoneNumber.remove();
    search.remove();
    content.insertBefore(search, breadcrumbs);

    shopLogo.remove();
    shopInfo.insertBefore(shopLogo, shopLink);
}
