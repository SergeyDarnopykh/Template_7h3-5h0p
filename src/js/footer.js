function changeVisibility(elem) {
    if (elem.className.includes('hidden')) {
        elem.classList.remove('hidden');
    } else {
        elem.className += ' hidden';
    }
}

const swapFooterToPhone = function() {
    if (window.innerWidth < 768) {
        const serviceSupport = document.querySelector('#serviceSupport'),
            serviceSupportTitle = document.querySelector('#serviceSupportTitle'),
            about = document.querySelector('#about'),
            aboutTitle = document.querySelector('#aboutTitle');

        serviceSupport.className += ' hidden';
        about.className += ' hidden';

        serviceSupportTitle.onclick = function () {
            changeVisibility(serviceSupport);
        };

        aboutTitle.onclick = function () {
            changeVisibility(about);
        };
    }
};

document.addEventListener('onload', swapFooterToPhone());
window.addEventListener('onresize', swapFooterToPhone());
