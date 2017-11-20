'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var footerflex = function () {
    function footerflex(a, u) {
        _classCallCheck(this, footerflex);

        this.home = a, this.url = u;
    }

    _createClass(footerflex, [{
        key: 'app_menu',
        value: function app_menu() {
            var art = '';
            console.info(this.home);
            console.info(this.home.t);
            var odiv = document.createElement('menu'); //创建一个菜单
            var oul = document.createElement('ul'); //创建一个菜单
            odiv.className = 'bottom_menu'; //添加class
            oul.className = 'menu'; //添加class
            document.body.appendChild(odiv); //添加到body里面
            odiv.appendChild(oul);
            this.home.forEach(function (v) {
                art += '<li class="menu-li" data-key="' + v.n + '"><i class="iconfont ' + v.i + '"></i> <p>' + v.t + '</p></li>';
            });
            oul.innerHTML = art;
        }
    }, {
        key: 'app_url',
        value: function app_url() {
            var _this = this;

            document.querySelectorAll(".menu-li").forEach(function (x) {
                console.info(_this.url);
                x.addEventListener("click", function (e) {
                    // if ($("#IsRegister").val() == "False") {
                    // $('.loginBox').removeClass('scale');
                    // $('.loginBox').removeAttr('style');
                    // e.stopPropagation()
                    // } else {
                    var key = x.getAttribute("data-key");
                    location.href = '' + _this.url + key;
                    // }
                }, false);
            });
        }
    }, {
        key: 'app_for',
        value: function app_for() {}
    }, {
        key: 'init',
        value: function init() {
            this.app_menu();
            this.app_url();
            this.app_for();
        }
    }]);

    return footerflex;
}();

// window.onload = function () {
//     var footerfle = new footerflex([{
//         't': '首页',
//         'n': 'home',
//         'i': 'icon-icon-test'
//     }, {
//         't': '钱包',
//         'n': 'wallet', 
//         'i': 'icon-QIAOBAO'
//     }, {
//         't': '团队',
//         'n': 'team',
//         'i': 'icon-duidui'
//     }, {
//         't': '我的',
//         'n': 'my',        
//         'i': 'icon-wode'
//     }], '/Game/')
//     footerfle.init()
// }