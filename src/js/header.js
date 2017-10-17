if (screen.width < 768) {
    const shopInfo = document.querySelector('#shopInfo'),
        shopLogo = shopInfo.querySelector('#shopLogo'),
        shopLink = shopInfo.querySelector('#shopLink'),
        shopPhoneNumber = shopInfo.querySelector('#shopPhoneNumber'),
        search = document.querySelector('#search'),
        header = document.querySelector('#header'),
        headerBottom = document.querySelector('#headerBottom'),
        content = document.querySelector('#content'),
        breadcrums = document.querySelector('#breadcrums');

    shopPhoneNumber.remove();
    search.remove();
    content.insertBefore(search, breadcrums);

    shopLogo.remove();
    shopInfo.insertBefore(shopLogo, shopLink);
}
