const productProperties = document.querySelector('#productProperties');

productProperties.addEventListener('click', (event) => {
    const el = event.target,
        productImg = document.querySelector('#productImg');

    if (el.dataset.type === 'color') {
        productImg.src = 'img/tshirt_' + el.dataset.typeValue + '.jpg';
    }
} );


