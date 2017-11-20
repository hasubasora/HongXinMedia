"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jo = {
    "DrawItems": [], //提款数据
    "RechargeItems": [], //充值数据
    "RechargeTotal": 32412, //充值总额
    "TotalItems": [//汇总
    {
        "Amount": "111", //变动金额
        "Date": "2017/22/11",
        "Time": "12:55",
        "Type": "提现",
        "TypeId": 1 //1提现 0充值
    }, {
        "Amount": "2222", //变动金额 
        "Date": "2017/23/13",
        "Time": "12:55",
        "Type": "充值",
        "TypeId": 0 //1提现 0充值
    }, {
        "Amount": "3333", //变动金额
        "Date": "2017/23/13",
        "Time": "12:55",
        "Type": "提现",
        "TypeId": 1 //1提现 0充值
    }],
    "WithdrawalsTotal": 80723 //提现总额
};

var deal_list = function () {
    function deal_list(n) {
        _classCallCheck(this, deal_list);

        this.n = n;
    }

    _createClass(deal_list, [{
        key: "maps",
        value: function maps() {
            var len = this.n.length;
            var map = {},
                dest = [];
            for (var i = 0; i < len; i++) {
                var ai = this.n[i]; //第一个
                if (!map[ai.Date]) {
                    dest.push({
                        Date: ai.Date,
                        data: [ai]
                    });
                    map[ai.Date] = ai;
                } else {
                    for (var j = 0; j < dest.length; j++) {
                        var dj = dest[j];
                        if (dj.Date == ai.Date) {
                            dj.data.push(ai);
                            break;
                        }
                    }
                }
            }
            console.log(dest);
            this.ays = dest;
        }
    }, {
        key: "payUp",
        value: function payUp() {
            //
            var len = this.ays.length;
            var payUp = '<div class="payUp">',
                payMsg;
            var boxs;
            console.info(this.ays);
            // // console.log(Object.keys(this.n[0]));
            // // console.log(Object.values(this.n[0]));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.ays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    payUp += "<div class=\"dates\">" + i.Date + "<img src=\"../images/dade.png\" alt=\"\"></div>";
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = i.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var j = _step2.value;

                            console.log(j.Amount);
                            payUp += "<div class=\"payMsg\"><span>" + j.Time + "</span><span data-uid=" + j.TypeId + ">" + j.Type + "</span><span class=\"greens\">-11.22</span></div>";
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    payUp += "</div>";
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            console.log(payUp);
            return payUp;
        }
    }, {
        key: "payUpList",
        value: function payUpList() {
            var payMsg = "<div class=\"payMsg\"><span>" + this.times + "</span><span data-uid=" + this.typesId + ">" + this.types + "</span><span class=\"greens\">-11.22</span></div>";
        }
    }, {
        key: "init",
        value: function init() {
            this.maps();
            this.payUp();
        }
    }]);

    return deal_list;
}();

var b = new deal_list(jo.TotalItems);
b.init();

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