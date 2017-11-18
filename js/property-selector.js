const dispatcher = document.querySelector('#page');

export default class PropertySelector {
    constructor(el, type, defaultValue) {
        this.el = el;
        this.storedValue = localStorage.getItem(type);

        window.addEventListener('load', () => {
            this.dispatchEvent(type, this.storedValue || defaultValue);
            this.check('#' + (this.storedValue || defaultValue));
        });

        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];

            this.dispatchEvent(type, value);
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });

        dispatcher.dispatchEvent(event);
    }

    check(selector) {
        document.querySelector(selector).checked = true;
    }
}
