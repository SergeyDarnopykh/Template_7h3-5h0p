import PropertySelector from './property-selector.js';

const $dispatcher = $('#page');

new PropertySelector($('#colorList'), 'color', 'white');
new PropertySelector($('#sizeList'), 'size', 'medium');

function changePicture(color) {
    $('#productImg').attr('src', `img/tshirt_${color}.jpg`);
}

$dispatcher.on('property-selected', (event, data) => {
    if (data.type === 'color') {
        localStorage.setItem(data.type, data.value);
        changePicture(data.value);
    }

    if (data.type === 'size') {
        localStorage.setItem(data.type, data.value);
    }
} );
