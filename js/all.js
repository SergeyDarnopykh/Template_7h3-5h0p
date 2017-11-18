import PropertySelector from './property-selector.js';

const dispatcher = document.querySelector('#page');


new PropertySelector(document.querySelector('#colorList'), 'color', 'white');
new PropertySelector(document.querySelector('#sizeList'), 'size', 'medium');

function changePicture(color) {
    document.querySelector('#productImg').src = `img/tshirt_${color}.jpg`;
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

const serviceSupport = document.querySelector('#serviceSupport'),
    serviceSupportTitle = document.querySelector('#serviceSupportTitle'),
    about = document.querySelector('#about'),
    aboutTitle = document.querySelector('#aboutTitle');

function hide(elem) {
    elem.className += ' hidden';
}

function show(elem) {
    elem.classList.remove('hidden');
}

function changeVisibility(elem) {
    if (elem.className.includes('hidden')) {
        show(elem);
    } else {
        hide(elem);
    }
}

const changeFooterElements = function() {
    if (window.innerWidth < 768) {
        hide(about);
        hide(serviceSupport);

        serviceSupportTitle.onclick = () => {
            changeVisibility(serviceSupport);
        };

        aboutTitle.onclick = () => {
            changeVisibility(about);
        };
    } else {
        show(about);
        show(serviceSupport);

        serviceSupportTitle.onclick = '';
        aboutTitle.onclick = '';
    }
};

window.addEventListener('load', () => {
    changeFooterElements();
});

window.addEventListener('resize', () => {
    changeFooterElements();
});

const shop = document.querySelector('#shop'),
    shopLogo = shop.querySelector('#shopLogo'),
    shopLink = shop.querySelector('#shopLink'),
    shopPhoneNumber = shop.querySelector('#shopPhoneNumber'),
    search = document.querySelector('#search'),
    content = document.querySelector('#content'),
    breadcrumbs = document.querySelector('#breadcrumbs'),
    nav = document.querySelector('#navigation');

const changeHeaderElements = function(event) {
    if (window.innerWidth < 768) {
        shopPhoneNumber.remove();
        search.remove();
        content.insertBefore(search, breadcrumbs);

        shopLogo.remove();
        shop.insertBefore(shopLogo, shopLink);
    } else if (event.type === 'resize') {
        shopPhoneNumber.remove();
        shopLogo.remove();
        search.remove();

        shop.appendChild(shopLogo);
        shop.appendChild(shopPhoneNumber);
        nav.appendChild(search);
    }
};

window.addEventListener('load', event => {
    changeHeaderElements(event);
});

window.addEventListener('resize', event => {
    changeHeaderElements(event);
});

const changeProduct = function(event) {
    const productInfo = document.querySelector('#productInfo'),
        productProperties = productInfo.querySelector('#productProperties'),
        productCost = productInfo.querySelector('#productCost'),
        productBuy = productInfo.querySelector('#productBuy');

    if (window.innerWidth < 768) {
        productCost.remove();
        productInfo.insertBefore(productCost, productBuy);
    } else if (event.type === 'resize') {
        productCost.remove();
        productInfo.insertBefore(productCost, productProperties);
    }
};

window.addEventListener('load', event => {
    changeProduct(event);
});

window.addEventListener('resize', event => {
    changeProduct(event);
});

const phone = document.querySelector('#phone');

const changeSocial = function(event) {
    if (window.innerWidth < 768) {
        phone.classList.remove('hidden');
    } else if (event.type === 'resize') {
        phone.classList += ' hidden';
    }
};

window.addEventListener('load', event => {
    changeSocial(event);
});

window.addEventListener('resize', event => {
    changeSocial(event);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMuanMiLCJmb290ZXIuanMiLCJoZWFkZXIuanMiLCJwcm9kdWN0LmpzIiwic29jaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVNlbGVjdG9yIGZyb20gJy4vcHJvcGVydHktc2VsZWN0b3IuanMnO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UnKTtcblxuXG5uZXcgUHJvcGVydHlTZWxlY3Rvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3JMaXN0JyksICdjb2xvcicsICd3aGl0ZScpO1xubmV3IFByb3BlcnR5U2VsZWN0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemVMaXN0JyksICdzaXplJywgJ21lZGl1bScpO1xuXG5mdW5jdGlvbiBjaGFuZ2VQaWN0dXJlKGNvbG9yKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RJbWcnKS5zcmMgPSBgaW1nL3RzaGlydF8ke2NvbG9yfS5qcGdgO1xufVxuXG5kaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5LXNlbGVjdGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbDtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdjb2xvcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS50eXBlLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgY2hhbmdlUGljdHVyZShkYXRhLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnc2l6ZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YS50eXBlLCBkYXRhLnZhbHVlKTtcbiAgICB9XG59ICk7XG4iLCJjb25zdCBzZXJ2aWNlU3VwcG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXJ2aWNlU3VwcG9ydCcpLFxuICAgIHNlcnZpY2VTdXBwb3J0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZVN1cHBvcnRUaXRsZScpLFxuICAgIGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0JyksXG4gICAgYWJvdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dFRpdGxlJyk7XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgaGlkZGVuJztcbn1cblxuZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVmlzaWJpbGl0eShlbGVtKSB7XG4gICAgaWYgKGVsZW0uY2xhc3NOYW1lLmluY2x1ZGVzKCdoaWRkZW4nKSkge1xuICAgICAgICBzaG93KGVsZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGUoZWxlbSk7XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VGb290ZXJFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBoaWRlKGFib3V0KTtcbiAgICAgICAgaGlkZShzZXJ2aWNlU3VwcG9ydCk7XG5cbiAgICAgICAgc2VydmljZVN1cHBvcnRUaXRsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlVmlzaWJpbGl0eShzZXJ2aWNlU3VwcG9ydCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWJvdXRUaXRsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlVmlzaWJpbGl0eShhYm91dCk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvdyhhYm91dCk7XG4gICAgICAgIHNob3coc2VydmljZVN1cHBvcnQpO1xuXG4gICAgICAgIHNlcnZpY2VTdXBwb3J0VGl0bGUub25jbGljayA9ICcnO1xuICAgICAgICBhYm91dFRpdGxlLm9uY2xpY2sgPSAnJztcbiAgICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjaGFuZ2VGb290ZXJFbGVtZW50cygpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY2hhbmdlRm9vdGVyRWxlbWVudHMoKTtcbn0pO1xuIiwiY29uc3Qgc2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG9wJyksXG4gICAgc2hvcExvZ28gPSBzaG9wLnF1ZXJ5U2VsZWN0b3IoJyNzaG9wTG9nbycpLFxuICAgIHNob3BMaW5rID0gc2hvcC5xdWVyeVNlbGVjdG9yKCcjc2hvcExpbmsnKSxcbiAgICBzaG9wUGhvbmVOdW1iZXIgPSBzaG9wLnF1ZXJ5U2VsZWN0b3IoJyNzaG9wUGhvbmVOdW1iZXInKSxcbiAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyksXG4gICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JyksXG4gICAgYnJlYWRjcnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnJlYWRjcnVtYnMnKSxcbiAgICBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbicpO1xuXG5jb25zdCBjaGFuZ2VIZWFkZXJFbGVtZW50cyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIHNob3BQaG9uZU51bWJlci5yZW1vdmUoKTtcbiAgICAgICAgc2VhcmNoLnJlbW92ZSgpO1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShzZWFyY2gsIGJyZWFkY3J1bWJzKTtcblxuICAgICAgICBzaG9wTG9nby5yZW1vdmUoKTtcbiAgICAgICAgc2hvcC5pbnNlcnRCZWZvcmUoc2hvcExvZ28sIHNob3BMaW5rKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdyZXNpemUnKSB7XG4gICAgICAgIHNob3BQaG9uZU51bWJlci5yZW1vdmUoKTtcbiAgICAgICAgc2hvcExvZ28ucmVtb3ZlKCk7XG4gICAgICAgIHNlYXJjaC5yZW1vdmUoKTtcblxuICAgICAgICBzaG9wLmFwcGVuZENoaWxkKHNob3BMb2dvKTtcbiAgICAgICAgc2hvcC5hcHBlbmRDaGlsZChzaG9wUGhvbmVOdW1iZXIpO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjaGFuZ2VIZWFkZXJFbGVtZW50cyhldmVudCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcbiAgICBjaGFuZ2VIZWFkZXJFbGVtZW50cyhldmVudCk7XG59KTtcbiIsImNvbnN0IGNoYW5nZVByb2R1Y3QgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHByb2R1Y3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RJbmZvJyksXG4gICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzID0gcHJvZHVjdEluZm8ucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RQcm9wZXJ0aWVzJyksXG4gICAgICAgIHByb2R1Y3RDb3N0ID0gcHJvZHVjdEluZm8ucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RDb3N0JyksXG4gICAgICAgIHByb2R1Y3RCdXkgPSBwcm9kdWN0SW5mby5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdEJ1eScpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIHByb2R1Y3RDb3N0LnJlbW92ZSgpO1xuICAgICAgICBwcm9kdWN0SW5mby5pbnNlcnRCZWZvcmUocHJvZHVjdENvc3QsIHByb2R1Y3RCdXkpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgcHJvZHVjdENvc3QucmVtb3ZlKCk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmluc2VydEJlZm9yZShwcm9kdWN0Q29zdCwgcHJvZHVjdFByb3BlcnRpZXMpO1xuICAgIH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgIGNoYW5nZVByb2R1Y3QoZXZlbnQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgY2hhbmdlUHJvZHVjdChldmVudCk7XG59KTtcbiIsImNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG5cbmNvbnN0IGNoYW5nZVNvY2lhbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIHBob25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgcGhvbmUuY2xhc3NMaXN0ICs9ICcgaGlkZGVuJztcbiAgICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjaGFuZ2VTb2NpYWwoZXZlbnQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgY2hhbmdlU29jaWFsKGV2ZW50KTtcbn0pO1xuIl19
