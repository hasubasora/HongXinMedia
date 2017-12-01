"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var json = [{
    "Msg": "测试内容3h55",
    "Result": [{
        "CreateDate": "订单日期",
        "LotterTime": "开奖时间",
        "LstTradeLogItem": [{
            "BuyAmount": "12",
            "BuyType": "5",
            "WinRate": 27740
        }, {
            "BuyAmount": "13",
            "BuyType": "4",
            "WinRate": 27740
        }],
        "TradeId": '交易编号1',
        "WinNumber": '开奖数字1',
        "WinnerAmount": "123"
    }, {
        "CreateDate": "订单日期1",
        "LotterTime": "开奖时间1",
        "LstTradeLogItem": [{
            "BuyAmount": "100",
            "BuyType": "购买类型1",
            "WinRate": 111
        }],
        "TradeId": '交易编号',
        "WinNumber": '开奖数字',
        "WinnerAmount": "-456"
    }],
    "Status": 1
}];

var trade = function () {
    function trade(n) {
        _classCallCheck(this, trade);

        this.n = n;
    }

    _createClass(trade, [{
        key: "init",
        value: function init() {
            this.strings(this.n[0].Result);
            // console.info(this)
            // console.info(this.strings(this.n[0].Result))
            // console.info(this.n[0].Result[0].CreateDate)
            var lat = document.createElement('div'),
                lately = document.querySelector('.lately');
            lat.className = "payUp tet";
            lat.innerHTML = "<div class=\"jdates dates\">" + this.n[0].Result[0].CreateDate + "<img src=\"../images/dade.png\" alt=\"\"></div>" + this.strings(this.n[0].Result);
            lately.appendChild(lat);
        }
    }, {
        key: "strings",
        value: function strings(r) {
            var _this = this;

            var result = r,
                srt = '',
                profit = '盈利',
                loss = '亏损',
                g = 'greens',
                o = 'oranges',
                col = '',
                LstTradeLogItem = '',
                txt = '';
            result.forEach(function (element) {
                if (element.WinnerAmount < 0) {
                    txt = loss;
                    col = g;
                } else {
                    txt = profit;
                    col = o;
                }
                srt += "<div class=\"payMsg\"><span>" + element.LotterTime + "\u5F00\u5956</span><span class=\"" + col + "\">" + txt + "</span><span>\u76C8\u5229:" + element.WinnerAmount + "<img class=\"rightPic\" src=\"../images/right.png\" alt=\"\"></span></div>\n            <div class=\"transaction_detail\"> \n            <aside><span>\u8BA2\u5355\u53F7\uFF1A" + element.TradeId + "</span><span>\u5F00\u76D8\u6570\u5B57:" + element.WinNumber + "</span></aside>" + _this.strings_list(element.LstTradeLogItem) + "</div>";
                // console.info(element.LstTradeLogItem)
            });
            // console.info()

            return srt;
        }
    }, {
        key: "strings_list",
        value: function strings_list(ele) {
            // console.info('el')
            var doc = '<div class="transaction_detail_list">';
            ele.forEach(function (eles) {
                doc += "<aside><span>\u7ADE\u731C\uFF1A" + eles.BuyType + "</span><span>\u4E0B\u5355\u91D1\u989D\uFF1A" + eles.BuyAmount + "\u5143</span><span>\u76C8\u5229\u7387\uFF1A" + eles.WinRate + "</span></aside>";
            });
            doc += '</div>';
            // console.info(doc)
            return doc;
        }
    }]);

    return trade;
}();

new trade(json).init();