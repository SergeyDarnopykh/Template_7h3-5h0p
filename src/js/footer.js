function changeVisibility(elem) {
    if (elem.style.display === 'flex') {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'flex';
        elem.style.flexDirection = 'row';
    }
}

if (screen.width < 768) {
    const serviceSupport = document.querySelector('#serviceSupport'),
        serviceSupportTitle = document.querySelector('#serviceSupportTitle'),
        about = document.querySelector('#about'),
        aboutTitle = document.querySelector('#aboutTitle');

    serviceSupportTitle.onclick = function () {
        changeVisibility(serviceSupport);
    };

    aboutTitle.onclick = function () {
        changeVisibility(about);
    };
}
