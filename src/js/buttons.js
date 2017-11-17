import PropertySelector from './property-selector.js';

const dispatcher = document.querySelector('#page');


new PropertySelector(document.querySelector('#colorList'), 'color', 'white');
new PropertySelector(document.querySelector('#sizeList'), 'size', 'medium');

function changePicture(color) {
    document.querySelector('#productImg').src = 'img/tshirt_' + color + '.jpg';
}

dispatcher.addEventListener('property-selected', (event) => {
    const data = event.detail;

    if (data.type === 'color') {
        localStorage.setItem(data.type, data.value);
        changePicture(data.value);
    }

    if (data.type === 'size') {
        localStorage.setItem(data.type, data.value);
    }
} );
