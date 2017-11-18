const $dispatcher = $('#page');

export default class PropertySelector {
    constructor(el, type, defaultValue) {
        this.el = el;
        this.storedValue = localStorage.getItem(type);

        $(window).on('load', () => {
            this.triggerEvent(type, this.storedValue || defaultValue);
            this.check('#' + (this.storedValue || defaultValue));
        });

        this.el.on('click', (ev) => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];

            this.triggerEvent(type, value);
        });
    }

    triggerEvent(type, value) {
        $dispatcher.triggerHandler('property-selected', {
            type: type,
            value: value
        });
    }

    check(selector) {
        $(selector).prop( 'checked', true );
    }
}
