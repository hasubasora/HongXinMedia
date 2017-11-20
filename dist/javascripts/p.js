'use strict';

var plays = document.querySelectorAll('.plays');
var n = 0;
(function () {
    plays.forEach(function (i) {
        i.addEventListener('click', function () {
            try {
                document.querySelectorAll('[type=radio]').forEach(function (xx) {
                    xx.parentNode.classList.remove("act");
                });
                i.children[1].querySelector('[type=radio]').checked = true;
                i.children[1].querySelector('[type=radio]').parentNode.classList.add("act");
                var _id = i.children[1].querySelector('[type=radio]').id;
                var is_id = _id.match(/\d/);
                console.info(is_id[0]);
                n = Number(is_id[0]);
            } catch (error) {
                console.error(error);
            }
        }, false);
    });
})();

var playPayer = document.querySelector('#play-payer');
var money = document.querySelectorAll('.money li');
(function () {
    for (var i = 0; i < money.length; i++) {
        money[i].addEventListener('click', function () {
            for (var i = 0; i < money.length; i++) {
                money[i].classList.remove('active');
            }
            var nemy = this.getAttribute("data-mo");
            document.querySelector('.dets').innerHTML = '\u5145\u503C\u91D1\u989D\uFFE5' + nemy + '\u5143';
            this.classList.add('active');
        }, false);
    }
})();
//zhifu
playPayer.addEventListener('click', function () {
    money.forEach(function (m) {
        // console.info(m.getAttribute("data-mo"));
        // console.info(m.classList.contains("active"));
        if (m.classList.contains("active")) {
            console.info(m.getAttribute("data-mo"));
        }
    });
    switch (n) {
        case 1:
            console.info('微信支付');
            n = 1;
            break;
        case 2:
            console.info('支付宝支付');
            n = 2;
            break;
        case 3:
            console.info('QQ支付');
            n = 3;
            break;
        default:
            n = 0;
            alert('请选择支付方式！');
            console.info('取消支付');
    }
}, false);