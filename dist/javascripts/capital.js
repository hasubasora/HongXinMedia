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
        "Amount": "-3333", //变动金额
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
            var payUp = '',
                payMsg,
                g = 'greens',
                typecol = '',
                o = 'oranges';
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

                    payUp += "<div class=\"payUp\"><div class=\"dates\">" + i.Date + "<img src=\"../images/dade.png\" alt=\"\"></div>";
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = i.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var j = _step2.value;

                            console.info(Number(j.Amount) < 0);
                            if (Number(j.Amount) > 0) {
                                typecol = o;
                            }
                            if (Number(j.Amount) < 0) {
                                typecol = g;
                            }
                            console.log(j.Amount);
                            payUp += "<div class=\"payMsg\"><span>" + j.Time + "</span><span data-uid=" + j.TypeId + ">" + j.Type + "</span><span class=\"" + typecol + "\">" + j.Amount + "</span></div>";
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
        key: "init",
        value: function init() {
            this.maps();
            var payUp = this.payUp();
            var glass = document.createElement('div');

            glass.innerHTML = payUp;
            var lately = document.querySelector('.lately1');
            console.log(glass);
            lately.appendChild(glass);
        }
    }, {
        key: "init2",
        value: function init2() {
            this.maps();
            var payUp = this.payUp();
            var glass = document.createElement('div');
            glass.innerHTML = payUp;
            var lately = document.querySelector('.lately2');
            console.log(glass);
            lately.appendChild(glass);
        }
    }, {
        key: "init3",
        value: function init3() {
            this.maps();
            var payUp = this.payUp();
            var glass = document.createElement('div');
            glass.innerHTML = payUp;
            var lately = document.querySelector('.lately3');
            console.log(glass);
            lately.appendChild(glass);
        }
    }]);

    return deal_list;
}();
// new deal_list(jo.TotalItems).init()


window.onload = function () {
    var log = 0;
    ajaxlog(log);

    $('.selected').on('change', function (params) {
        log = $(this).val();
        ajaxlog(log);
        $('.selected').find("option[value='" + log + "']").attr("selected", true);
    });
};

function ajaxlog(params) {
    $.ajax({
        type: "POST",
        url: "/FunUser/UserBalanceLog",
        data: {
            'type': params
        },
        dataType: "json",
        success: function success(data) {
            layer.open({
                type: 2,
                shadeClose: false
            });
            if (data.Status == 1) {
                $('.payUp').remove();
                // RechargeTotal=data.Result.RechargeTotal; //总金额
                // WithdrawalsTotal=data.Result.WithdrawalsTotal //提款总
                $('[name=TotalRecharge]').text(data.Result.RechargeTotal.toFixed(2));
                $('[name=TotalDraw]').text(data.Result.WithdrawalsTotal.toFixed(2));
                // console.info(data.Result);
                if (data.Result.TotalItems.length) {
                    new deal_list(data.Result.TotalItems).init();
                    new deal_list(data.Result.RechargeItems).init2(); //提款
                    new deal_list(data.Result.DrawItems).init3(); //充值
                }
                layer.closeAll();
            } else {
                //提示
                layer.open({
                    content: '获取数据失败，请刷新页面！',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }
    });
}