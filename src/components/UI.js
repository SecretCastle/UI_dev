var $ = require('jquery');

export default class UI {
    constructor(options) {
        this.options = options;
        this.create();
        this.initEventFn();
    }
    create(){
        this.initEventFn();
    }
    initEventFn(){
        
    }
    show() {
        $(this.options.hook).show();
    };
    hide() {
        $(this.options.hook).hide();
    };
    enable() {

    };
    disabled() {

    };
    get isEnabled() {

    };
    get isDisabled() {

    };
    get dom(){
        return $(this.options.hook);
    };

    get getself(){
        return this;
    };

    set setValue(val){
        
    }
}