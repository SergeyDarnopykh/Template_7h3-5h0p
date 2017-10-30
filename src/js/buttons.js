const productSizeColor = document.querySelector('#productSizeColor');

productSizeColor.addEventListener('click', (event) => {
    const el = event.target,
        productImg = document.querySelector('#productImg');

    switch (el.dataset.type) {
    case 'white':
        productImg.src = 'img/tshirt_white.jpg';
        break;

    case 'yellow':
        productImg.src = 'img/tshirt_yellow.jpg';
        break;

    case 'green':
        productImg.src = 'img/tshirt_green.jpg';
        break;
    }
} );


