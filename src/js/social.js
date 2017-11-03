const swapSocialToPhone = function() {
    if (window.innerWidth < 768) {
        const phone = document.querySelector('#phone');
        phone.classList.remove('hidden');
    }
}

document.addEventListener('onload', swapSocialToPhone());
window.addEventListener('onresize', swapSocialToPhone());
