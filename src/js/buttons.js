const productImg = document.querySelector('#productImg'),
    sizeButtons = [],
    colorButtons = [],
    buttonTypes = ['size', 'color'];

sizeButtons.push(document.querySelector('#sizeButtonSmall'));
sizeButtons.push(document.querySelector('#sizeButtonMedium'));
sizeButtons.push(document.querySelector('#sizeButtonLarge'));
colorButtons.push(document.querySelector('#colorButtonWhite'));
colorButtons.push(document.querySelector('#colorButtonYellow'));
colorButtons.push(document.querySelector('#colorButtonGreen'));

function resetButtonsStyles(type) {
    const passiveBorderStyle = 'thin solid black';

    if (type === 'size') {
        for (let i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].style.border = passiveBorderStyle;
        }
    } else {
        for (let i = 0; i < colorButtons.length; i++) {
            colorButtons[i].style.border = passiveBorderStyle;
        }
    }
}

function activateButton (buttonNumber, type) {
    const activeButtonStyle = '2px solid #cc0000';
    resetButtonsStyles(type);

    if (type === 'size') {
        sizeButtons[buttonNumber].style.border = activeButtonStyle;
    } else {
        let newImageSrc;

        switch (buttonNumber) {
            case 0:
                newImageSrc = 'img/tshirt_white.jpg';
                break;
            case 1:
                newImageSrc = 'img/tshirt_yellow.jpg';
                break;
            case 2:
                newImageSrc = 'img/tshirt_green.jpg';
                break;
        }

        productImg.src = newImageSrc;
        colorButtons[buttonNumber].style.border = activeButtonStyle;
    }
}

sizeButtons[0].onclick = function() { activateButton(0, buttonTypes[0]) } ;
sizeButtons[1].onclick = function() { activateButton(1, buttonTypes[0]) } ;
sizeButtons[2].onclick = function() { activateButton(2, buttonTypes[0]) } ;
colorButtons[0].onclick = function() { activateButton(0, buttonTypes[1]) } ;
colorButtons[1].onclick = function() { activateButton(1, buttonTypes[1]) } ;
colorButtons[2].onclick = function() { activateButton(2, buttonTypes[1]) };






