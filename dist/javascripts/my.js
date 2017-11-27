'use strict';

window.onload = function () {
    var footerfle = new footerflex([{
        't': '首页',
        'n': 'home',
        'i': 'icon-icon-test'
    }, {
        't': '钱包',
        'n': 'wallet',
        'i': 'icon-QIAOBAO'
    }, {
        't': '团队',
        'n': 'team',
        'i': 'icon-duidui'
    }, {
        't': '我的',
        'n': 'my',
        'i': 'icon-wode'
    }], '/Game/');
    footerfle.init();
};