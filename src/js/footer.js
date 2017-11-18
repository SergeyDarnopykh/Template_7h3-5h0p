const $serviceSupport = $('#serviceSupport'),
    $serviceSupportTitle = $('#serviceSupportTitle'),
    $about = $('#about'),
    $aboutTitle = $('#aboutTitle');

function changeVisibility(elem) {
    if (elem.is(':hidden')) {
        elem.show();
    } else {
        elem.hide();
    }
}

const changeFooterElements = function() {
    const isPhone = $(window).width() < 768;

    if (isPhone) {
        $about.hide();
        $serviceSupport.hide();

        $serviceSupportTitle.on('click', () => {
            changeVisibility($serviceSupport);
        });

        $aboutTitle.on('click', () => {
            changeVisibility($about);
        });
    } else {
        $about.show();
        $serviceSupport.show();

        $serviceSupportTitle.off('click');
        $aboutTitle.off('click');
    }
};

$(window).on('load resize', () => {
    changeFooterElements();
});
