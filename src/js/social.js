const $phone = $('#phone');

const changeSocial = function(event) {
    if ($(window).width() < 768) {
        $phone.show();
    } else if (event.type === 'resize') {
        $phone.hide();
    }
};

$(window).on('load resize', event => {
    changeSocial(event);
});
