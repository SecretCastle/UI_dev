var $ = require("jquery");
import './assets/style';
import JD from './core';

var listitem = new JD.UI.ListItem({
    title: "title",
    hook: ".ui_wrap_itemlist",
    gridNum:'4',
    map: [{
        icon: "&#xe681;",
        text: "模式1"
    }, {
        icon: "&#xe67a;",
        text: "模式2",
    }, {
        icon: "&#xe65f;",
        text: "模式3",
    }, {
        icon: "&#xe665;",
        text: "模式4"
    },{
        icon: "&#xe67a;",
        text: "模式5",
    }, {
        icon: "&#xe65f;",
        text: "模式6",
    }, {
        icon: "&#xe665;",
        text: "模式7"
    },{
        icon: "&#xe665;",
        text: "模式8"
    }]
});
listitem.create();
