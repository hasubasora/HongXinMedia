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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setChart = function () {
    function setChart(setJsons) {
        _classCallCheck(this, setChart);

        this.setJsons = setJsons;
        this.str = '';
    }

    _createClass(setChart, [{
        key: 'setNumber',
        value: function setNumber(period, num) {
            // console.log(this.setJsons.Result)
            var reg = /\d+/g,
                ms = this.str.match(reg);

            var otr = '<tr><td>' + period + '</td><td>' + num + '</td>';
            if (num <= 13) {
                otr += '<td></td><td><span class=\'dx\'></span></td>';
                if (num % 2 == 0) {
                    //偶数 双
                    otr += '<td></td><td><span class=\'ds\'></span></td><td></td><td><span class=\'dxds\'></td><td></td><td></td>';
                }
                if (num % 2 != 0) {
                    //奇数 单.
                    otr += '<td><span class=\'ds\'></span></td><td></td><td></td><td></td><td></td><td><span class=\'dxds\'></td>';
                }
            }
            if (num >= 14 && num <= 27) {
                otr += '<td><span class=\'dx\'></span></td><td></td>';
                if (num % 2 == 0) {
                    //偶数
                    otr += '<td></td><td><span class=\'ds\'></td><td><span class=\'dxds\'></td><td></td><td></td><td></td>';
                }
                if (num % 2 != 0) {
                    //奇数
                    otr += '<td><span class=\'ds\'></td><td></td><td></td><td></td><td><span class=\'dxds\'></td><td></td>';
                }
            }
            if (this.smoothly(Number(ms[0]), Number(ms[1]), Number(ms[2])) != -1) {
                otr += '<td><span class=\'bzsz\'></td><td></td></tr>';
            } else if (Number(ms[0]) == Number(ms[1]) && Number(ms[1]) == Number(ms[2]) && Number(ms[2]) == Number(ms[0])) {
                otr += '<td></td><td><span class=\'bzsz\'></td></tr>';
            } else {
                otr += '<td></td><td></td></tr>';
            }
            return otr;
        }
    }, {
        key: 'smoothly',
        value: function smoothly(a, b, c) {
            //顺子计算
            if (a + 1 == b && b + 1 == c) {
                return 1;
            } else {
                if (a - 1 == b && b - 1 == c) {
                    return 1;
                } else {
                    return -1;
                }
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var sty = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.setJsons.Result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    this.str = i.LotteryType;
                    sty += this.setNumber(i.Period, i.WinnerNumber);
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

            document.querySelector('.tbody').innerHTML = sty;
        }
    }]);

    return setChart;
}();

window.onload = function (params) {
    $.post("/trade/GetHistoryLotryNum", function (data) {
        var sets = new setChart(data).init();
    });
};
"use strict";

var capital = {
    init: function init() {
        ranking.tabs(".sub", ".lately", 'active');
        // var url = "http://rapapi.org/mockjsdata/28289/FunUser/UserBalanceLog"
        var url = "http://192.168.168.46/FunUser/UserBalanceLog";
        $.ajax({
            type: "POST",
            url: url,
            data: {
                'type': 1
            },
            dataType: "json",
            success: function success(data) {
                console.info(data.DrawItems); //提款
                console.info(data.RechargeItems); //充值
                console.info(data.RechargeTotal); //提款
                console.info(data.TotalItems); //汇总
                console.info(data.WithdrawalsTotal); //提款
                console.info(data); //提款
            }
        });
    },
    list: function list(TotalItems) {
        var list = "<div class=\"payUp\"><div class=\"dates\">" + Date + "<img src=\"../images/dade.png\" alt=\"\"></div><div class=\"payMsg\"><span>" + Time + "</span><span data-s=" + Typeid + ">" + Type + "</span><span class=\"greens\">-11.22</span></div></div>";
    }
};

var ranking = {
    init: function init() {
        this.tabs(".sub", ".ran_list", 'act');
    },
    tabs: function tabs(c1, c2, c3) {
        var abox = document.querySelectorAll(c1);
        var lately = document.querySelectorAll(c2);

        for (var i = 0; i < abox.length; i++) {
            abox[i].addEventListener('touchstart', function () {
                for (var i = 0; i < abox.length; i++) {
                    abox[i].index = i;
                    abox[i].classList.remove(c3);
                    lately[i].classList.add('none');
                }
                this.classList.add(c3);
                lately[this.index].classList.remove('none');
            });
        }
    }
};

var payMsgs = {
    init: function init() {
        $.each($('.payMsg'), function (i, it) {
            $('.payMsg').eq(i).on('touchstart', function () {
                $('.transaction_detail').eq(i).slideToggle();
                if ($('.rightPic').eq(i).hasClass('transform90')) {
                    $('.rightPic').eq(i).removeClass('transform90');
                } else {
                    $('.rightPic').eq(i).addClass('transform90');
                }
            });
        });
    }
};

//宝箱抽奖
var lotteries = {
    init: function init() {
        var _this = this;
        this.opens(1); //抽奖次数
        $('.lotteryBtn').on('touchstart', function () {
            $('.openBox').removeClass('none');
        });
        $('.close').on('touchstart', function () {
            $('.openBox').addClass('none');
            _this.closes();
        });
    },
    opens: function opens(num) {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).on('touchstart', function () {
                if (num > 0) {
                    $('.boxList li').eq(i).addClass('open');
                } else {
                    alert('您没有抽奖的机会！');
                }
            });
        });
    },
    closes: function closes() {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).removeClass('open');
        });
    }
};

//攻略的功能
'use strict';

var filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml: function unhtml(str) {
        return str ? str.replace(/[<">']/g, function (a) {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a];
        }) : '';
    },

    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone: function verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank: function unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    },

    /**
     * 检查输入字符
     * @param char
     * @param reg
     */
    character: function character(char, reg) {
        return char ? reg || /[\{\}\[\]|、\\:;：；‘’\'\"“”\<\>?《》？，。、$*￥#~`!！@\%\^\…\&\*\(\)\_\+\-\=【】]/g.test(char) : '';
    },

    /**
     * 是否为表情包
     * @param {*} substring 
     */
    isEmoji: function isEmoji(substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {
                    return true;
                }
            }
        }
    },

    /**
     * 倒计时
     * @param {*} codebtn 
     */
    countDown: function countDown(codebtn) {
        var a = 60;
        timer = setInterval(function () {
            if (a > 0) {
                codebtn.attr("disabled", true).val("(" + a + ")倒计时").css("background", "#ccc");
                a--;
            } else {
                clearInterval(timer);
                codebtn.attr("disabled", false).val("获取验证码").css("background", "#eeeeee");
                a = 60;
            }
        }, 1000);
    },
    countdowns: function countdowns(btn) {
        var times = 60;
        var timer = setInterval(function () {
            if (times > 0) {
                btn.setAttribute('style', 'pointer-events: none');
                filter.inputs(btn, times + 's');
                times--;
            } else {
                clearInterval(timer);
                btn.removeAttribute('style');
                filter.inputs(btn, '获取验证码');
                times = 60;
            }
        }, 1000);
    },
    inputs: function inputs(btn, v1) {
        if (btn.tagName == 'INPUT') {
            btn.value = v1;
        } else if (btn.tagName == 'BUTTON') {
            btn.innerText = v1;
        }
    }
};
'use strict';

// alert(window.screen.height +'-'+ window.screen.width)


window.onload = function () {
    var footerfle = new footerflex([{
        't': '首页',
        'n': 'home',
        'i': 'icon-icon-test'
    }, {
        't': '邀请',
        'n': 'invite',
        'i': 'icon-yaoqing5'
    }, {
        't': '团队',
        'n': 'team',
        'i': 'icon-duidui'
    }, {
        't': '我的',
        'n': 'my',
        'i': 'icon-wode'
    }], '/Game/').init();

    var w = window.screen.width;
    var swiper_slide = document.querySelectorAll(".swiper_slide");
    var swiper_button_next = document.querySelector(".swiper_button_next");
    var abox = document.querySelectorAll(".sub");
    var _index = 0;
    for (var i = 0; i < abox.length; i++) {
        abox[i].index = i;
        abox[i].onclick = function () {
            _index = this.index;
            console.info(_index);
            for (var j = 0; j < abox.length; j++) {
                swiper_slide[j].classList.add('none');
                abox[j].classList.remove('active');
            }
            this.classList.add("active");
            swiper_slide[this.index].classList.remove('none');
        };
    }
    $(swiper_button_next).on('click', function () {
        console.info($("#yq_ul li").length);
        $("#yq_ul li").eq(_index).addClass('active');
    });
    $("#yq_ul li").on('click', function () {});

    // $('.sub').on('click', function () {
    //     console bounceInLeft animated
    //     _index = $(this).index();
    //     $(swiper_slide).eq(_index).removeClass('bounceOutLeft animated none').siblings().addClass('bounceOutLeft animated none')
    //     // .siblings().addClass('bounceOutLeft animated')
    // })
    // $('.swiper_button_next').on('click', () => {
    //     $(swiper_slide).eq(_index).addClass('bounceOutLeft animated').siblings().addClass('bounceInLeft animated')
    // })

};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var json = [{
//     "Msg": "测试内容3h55",
//     "Result": [{
//         "CreateDate": "订单日期",
//         "LotterTime": "开奖时间",
//         "LstTradeLogItem": [{
//             "BuyAmount": "12",
//             "BuyType": "5",
//             "WinRate": 27740
//         }, {
//             "BuyAmount": "13",
//             "BuyType": "4",
//             "WinRate": 27740
//         }],
//         "TradeId": '交易编号1',
//         "WinNumber": '开奖数字1',
//         "WinnerAmount": "123"
//     }, {
//         "CreateDate": "订单日期1",
//         "LotterTime": "开奖时间1",
//         "LstTradeLogItem": [{
//             "BuyAmount": "100",
//             "BuyType": "购买类型1",
//             "WinRate": 111
//         }],
//         "TradeId": '交易编号',
//         "WinNumber": '开奖数字',
//         "WinnerAmount": "-456"
//     }],
//     "Status": 1
// }]


var trade = function () {
    function trade(n) {
        _classCallCheck(this, trade);

        this.n = n;
    }

    _createClass(trade, [{
        key: 'init',
        value: function init() {
            this.strings(this.n[0].Result);
            // console.info(this)
            // console.info(this.strings(this.n[0].Result))
            // console.info(this.n[0].Result[0].CreateDate)
            var lat = document.createElement('div'),
                lately = document.querySelector('.lately');
            lat.className = "payUp tet";
            lat.innerHTML = '<div class="jdates dates">' + this.n[0].Result[0].CreateDate + '<img src="../images/dade.png" alt=""></div>' + this.strings(this.n[0].Result);
            lately.appendChild(lat);
        }
    }, {
        key: 'strings',
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
                srt += '<div class="payMsg"><span>' + element.LotterTime + '\u5F00\u5956</span><span class="' + col + '">' + txt + '</span><span>' + txt + ':' + element.WinnerAmount + '<img class="rightPic" src="../images/right.png" alt=""></span></div>\n            <div class="transaction_detail"> \n            <aside><span>\u8BA2\u5355\u53F7\uFF1A' + element.TradeId + '</span><span>\u5F00\u76D8\u6570\u5B57:' + element.WinNumber + '</span></aside>' + _this.strings_list(element.LstTradeLogItem) + '</div>';
                // console.info(element.LstTradeLogItem)
            });
            // console.info()

            return srt;
        }
    }, {
        key: 'strings_list',
        value: function strings_list(ele) {
            // console.info('el')
            var doc = '<div class="transaction_detail_list">';
            ele.forEach(function (eles) {
                doc += '<aside><span>\u7ADE\u731C\uFF1A' + eles.BuyType + '</span><span>\u4E0B\u5355\u91D1\u989D\uFF1A' + eles.BuyAmount + '\u5143</span><span>\u76C8\u5229\u7387\uFF1A' + eles.WinRate + '</span></aside>';
            });
            doc += '</div>';
            // console.info(doc)
            return doc;
        }
    }]);

    return trade;
}();
// new trade(json).init()

window.onload = function () {
    var log = 0;
    ajaxlog(log);

    $('.selected').on('change', function (params) {
        log = $(this).val();
        ajaxlog(log);
        $('.selected').find("option[value='" + log + "']").attr("selected", true);
    });
    $.each($('.payMsg'), function (i, it) {
        $('.payMsg').eq(i).on('touchstart', function () {
            $('.transaction_detail').eq(i).toggle();
            if ($('.rightPic').eq(i).hasClass('transform90')) {
                $('.rightPic').eq(i).removeClass('transform90');
            } else {
                $('.rightPic').eq(i).addClass('transform90');
            }
        });
    });
};

function ajaxlog(params) {
    console.log(params);
    $.ajax({
        // async: false,
        type: "POST",
        url: "/trade/GetTradeLog",
        // url:'http://rap.taobao.org/mockjsdata/28289/trade/GetTradeLog',
        data: {
            dateType: params
        },
        dataType: "json",
        success: function success(data) {
            if (data.Status == 1) {
                $('.payUp').remove();
                $('.numtext').text(data.Result.length);
                new trade(data).init();
            }
        }
    });
}
'use strict';

window.onload = function () {
    //hongbao weizhi
    var s_h = window.screen.height / 2;
    var list_h = window.screen.height;
    $('.redBox-m').css({
        marginTop: s_h - 70
    });
    // document.querySelector('.CanPlayCountText').style.transform = "translateY(" + (list_h - 150) + "px)"
    if (localStorage.onload == "true") {
        $('.openAminates').addClass('none');
        $('.openAminates').remove();
        $('.loginBox').load('/Views/Game/login.html');
        console.info('已经存在用户1');
        addStart();
    }
    $.each($('.openAminatesList>li'), function (i, n) {
        //初始化界面导航
        if (localStorage.onload != "true") {
            $('.openAminates').removeClass('none');
            if ($(this).hasClass('GoToPlay')) {
                localStorage.onload = "true";
                // hrefs('.GoToPlay', "/Game/Home"); //抽完红包跳转到游戏界面
                return false;
            } else {
                var bid = $("#Bid").val();
                n.addEventListener('touchstart', function () {
                    n.classList.add('none');
                    if ($('.openAminatesList>li').size() - 1 == i) {
                        // 这里导入登陆页面login.html
                        $('.loginBox').load('/Views/Game/login.html');
                        addStart();
                        localStorage.onload = "true";
                        $('.openAminates').addClass('none');
                        // $('.openAminates').remove();
                        hrefs('.GoToPlay', "/Game/Home"); //抽完红包跳转到游戏界面
                    }
                });
            }
            //已经初始化过了
        }
    });
    //判断登陆的 复制过来
    /*
     * 底部菜单控制
     */
    document.querySelectorAll(".menu-li").forEach(function (x) {
        x.addEventListener("click", function (e) {
            console.log($("#IsRegister").val());
            if ($("#IsRegister").val() == "False") {
                $('.loginBox').removeClass('scale');
                $('.loginBox').removeAttr('style');
                e.stopPropagation();
            } else {
                var key = x.getAttribute("data-key");
                location.href = "/Game/" + key;
            }
        }, false);
    });

    function addStart() {
        //阻止默认事件
        $('body').on('touchmove', function (e) {
            e.preventDefault();
        });
        //新手教程
        $('.q_a').on('click', function () {
            localStorage.removeItem('onload');
            location.reload();
        });
        if ($("#IsRegister").val() == 'False') {
            console.log($("#IsRegister").val());
            $('body').on('touchstart', function (e) {
                e.stopPropagation();
                $('.loginBox').removeClass('scale');
                $('.loginBox').removeAttr('style');
            });
        } else {
            //跳转红包
            hrefs('.new_money', "/Game/lotteries"); //红包活动
            hrefs('.mock_trading', ""); //模拟交易
            hrefs('.billboard', "/game/Ranking"); //排行榜
            hrefs('.home_footer', "/Game/Start"); //开始竞猜
            hrefs('.m_pay', "/Game/Start"); //开始竞猜
            hrefs('.m_play', "/Views/Game/appdownload.html"); //充值
            hrefs('.home_wx_draw_money', "/Views/Game/appdownload.html"); //微信提款
            hrefs('#playBtn', "/Views/Game/strategy.html"); //抽奖攻略
        }
    }
};

function hrefs(id, url) {
    $(id).on('click', function () {
        window.location.href = url;
    });
}
"use strict";

/**
 * 注意：本插件运用了rem屏幕适配方案，一律采用rem作为单位，若项目中不是采用这种方案的，请在kinerTreeMenu.css中修改样式，此段代码不会影响功能使用，仅会影响控件样式
 */

(function (win, doc, $) {

    var defaultOpt = {

        rotateNum: 5, //转盘转动圈数
        body: "", //大转盘整体的选择符或zepto对象


        disabledHandler: function disabledHandler() {}, //禁止抽奖时回调

        clickCallback: function clickCallback() {}, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面

        KinerLotteryHandler: function KinerLotteryHandler(deg) {} //抽奖结束回调


    };

    function KinerLottery(opts) {

        this.opts = $.extend(true, {}, defaultOpt, opts);

        this.doing = false;

        this.init();
    }

    KinerLottery.prototype.setOpts = function (opts) {

        this.opts = $.extend(true, {}, defaultOpt, opts);

        this.init();
    };

    KinerLottery.prototype.init = function () {

        var self = this;
        this.CanPlayCount = 0;

        this.defNum = this.opts.rotateNum * 360; //转盘需要转动的角度 5圈*360
        // console.log(this.defNum);


        // alert(this.defNum);
        $.ajax({
            async: false,
            type: "POST",
            url: '/RedBag/PlayRedBag',
            // url:'http://rapapi.org/mockjsdata/28289/RedBag/PlayRedBag',
            data: {
                bid: 2
            },
            dataType: "json",
            success: function success(data) {
                console.info(data);
                self.CanPlayCount = data.Result.CanPlayCount;

                if (data.Status == 1) {
                    $('.CanPlayCount').html(data.Result.CanPlayCount);
                    self.CanPlayCount = data.Result.CanPlayCount;
                } else {
                    console.info(data);
                }
            }

        });
        //点击抽奖
        console.info(self.CanPlayCount);
        $('.redz').on('click', ".KinerLotteryBtn", function () {
            if (self.CanPlayCount != 0) {

                if ($(this).hasClass('start') && !self.doing) {
                    console.log('点击');

                    self.opts.clickCallback.call(self);
                } else {

                    var key = $(this).hasClass('no-start') ? "noStart" : $(this).hasClass('completed') ? "completed" : "illegal";

                    self.opts.disabledHandler(key);
                }
            } else {
                alert('你没有抽奖机会！');
            }
        });

        $(this.opts.body).find('.KinerLotteryContent').get(0).addEventListener('webkitTransitionEnd', function () {

            self.doing = false;

            var deg = $(self.opts.body).attr('data-deg');

            if (self.opts.direction == 0) {
                $(self.opts.body).attr('data-deg', 360 - deg);
                $(self.opts.body).find('.KinerLotteryContent').css({
                    '-webkit-transition': 'none',
                    'transition': 'none',
                    '-webkit-transform': 'rotate(' + deg + 'deg)',
                    'transform': 'rotate(' + deg + 'deg)'
                });
                self.opts.KinerLotteryHandler(360 - deg);
            } else {
                $(self.opts.body).attr('data-deg', deg);
                $(self.opts.body).find('.KinerLotteryContent').css({
                    '-webkit-transition': 'none',
                    'transition': 'none',
                    '-webkit-transform': 'rotate(' + -deg + 'deg)',
                    'transform': 'rotate(' + -deg + 'deg)'
                });
                self.opts.KinerLotteryHandler(deg);
            }
        }, false);
    };

    KinerLottery.prototype.goKinerLottery = function (_deg) {

        if (this.doing) {
            return;
        }

        var deg = _deg + this.defNum;
        var realDeg = this.opts.direction == 0 ? deg : -deg;
        this.doing = true;
        $(this.opts.body).find('.KinerLotteryBtn').addClass('doing');

        $(this.opts.body).find('.KinerLotteryContent').css({
            '-webkit-transition': 'all 5s',
            'transition': 'all 5s',
            '-webkit-transform': 'rotate(' + realDeg + 'deg)',
            'transform': 'rotate(' + realDeg + 'deg)'

        });
        $(this.opts.body).attr('data-deg', _deg);
    };

    win.KinerLottery = KinerLottery;
})(window, document, $);
//能玩的次数


/**
 * 根据转盘旋转角度判断获得什么奖品
 * @param deg
 * @returns {*}
 */
var whichAward = function whichAward(deg) {
    console.log(deg);
    if (deg > 45 && deg <= 90 || deg > 225 && deg <= 270) {
        return "1.8元";
    } else if (deg > 90 && deg <= 135 || deg >= 0 && deg <= 45) {
        return "8元";
    } else if (deg > 135 && deg <= 180 || deg > 270 && deg <= 315) {
        return "10元";
    } else if (deg > 180 && deg <= 225 || deg > 180 && deg <= 360) {
        return "2元";
    }
};
var KinerLottery = new KinerLottery({
    rotateNum: 8, //转盘转动圈数
    body: "#hbbox", //大转盘整体的选择符或zepto对象
    direction: 0, //0为顺时针转动,1为逆时针转动
    disabledHandler: function disabledHandler(key) {
        switch (key) {
            case "noStart":
                alert("活动尚未开始");
                break;
            case "completed":
                alert("活动已结束");
                break;
        }
    }, //禁止抽奖时回调
    clickCallback: function clickCallback() {
        var _this = this;

        //此处访问接口获取奖品
        $.ajax({
            async: false,
            type: "POST",
            url: '/RedBag/RedBagResult',
            data: {
                bid: $("#Bid").val()
            },
            dataType: "json",
            success: function success(data) {
                console.info(data);
                console.info(data.Result);
                if (data.Status == 1) {
                    switch (data.Result) {
                        case 0:
                            //2元
                            //    console.info(Math.floor(Math.random()*(44-1)+1))
                            _this.goKinerLottery(Math.floor(Math.random() * (45 - 0) + 0));
                            break;
                        case 1:
                            //10元
                            _this.goKinerLottery(Math.floor(Math.random() * (90 - 45) + 45));
                            break;
                        case 2:
                            //1.8元
                            //   console.info(Math.floor(Math.random() * (135-90)+90))
                            _this.goKinerLottery(Math.floor(Math.random() * (135 - 90) + 90));
                            break;
                        case 3:
                            //2元
                            _this.goKinerLottery(Math.floor(Math.random() * (180 - 135) + 135));
                            break;
                        case 4:
                            //10元
                            _this.goKinerLottery(Math.floor(Math.random() * (225 - 180) + 180));
                            break;
                        case 5:
                            //8元
                            _this.goKinerLottery(Math.floor(Math.random() * (270 - 225) + 225));
                            break;
                        case 6:
                            //1.8元
                            _this.goKinerLottery(Math.floor(Math.random() * (315 - 270) + 270));
                            break;
                        case 7:
                            //8元
                            _this.goKinerLottery(Math.floor(Math.random() * (360 - 315) + 315));
                            break;
                    }
                } else {
                    console.info(data);
                }
            },
            error: function error(data) {
                alert(data.Msg);
            }
        });
        //    function random(params) {
        //        console.info(Math.random())
        //        console.info(Math.random() * 360)
        //        console.info(Math.floor(Math.random() * 360))
        //        console.info(Math.floor(1 * 360))
        //        return Math.floor(Math.random() * 360);
        //        //   return Math.floor(1 * 360);
        //    }
        //   return Math.floor(Math.random() * 360);
        //    console.info(random())
        //    this.goKinerLottery(random());
    }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
    KinerLotteryHandler: function KinerLotteryHandler(deg) {
        console.info('有' + whichAward(deg));
        // alert("恭喜您获得:" + whichAward(deg));
        $('.redBox').css({
            transform: 'scale(1)',
            transition: '.3s'
        });
        $('.redBox-m').text(whichAward(deg));
    } //抽奖结束回调
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var login = function () {
    function login(url, url2) {
        _classCallCheck(this, login);

        this.url = url;
        this.url2 = url2;
        this.tel = document.querySelector('#n_login_tel'); //电话
        this.cq_Btn = document.querySelector('#n_login_cq_btn'); //验证码按钮
        this.cq_Msg = document.querySelector('#n_login_cq'); //验证码
        this.login_btn = document.querySelector('#n_login_submit'); //登陆按钮
        this.login_close = document.querySelector('.n_login_close'); //关闭登陆X
    }

    _createClass(login, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.login_close.addEventListener('click', function () {
                alert('关闭');
            }, false);
            this.cq_Btn.addEventListener('click', function () {
                _this.login_phone(_this.cq_Btn);
            }, false);
            this.login_btn.addEventListener('click', function () {
                _this.login_submit();
            }, false);
            this.cq_Msg.addEventListener('input', function (e) {
                _this.login_btn.removeAttribute('disabled');
                _this.login_btn.classList.add('n_login_submit_red');
            });
        }
    }, {
        key: 'login_phone',
        value: function login_phone(m_this) {
            if (this.tel.value) {
                if (filter.verificationPhone(this.tel.value)) {
                    //发送验证码
                    $.ajax({
                        type: 'post',
                        cache: false,
                        contentType: "application/json; charset=utf-8",
                        url: this.url,
                        data: JSON.stringify({
                            Mobile: this.tel.value
                        }),
                        dataType: "json",
                        error: function error(a, b) {
                            console.log(a);
                        },
                        success: function success(data) {
                            console.info(data);
                            if (data.Status == 1) {
                                filter.countdowns(m_this);
                                //提示
                                layer.open({
                                    content: '验证码已发送',
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                            } else {
                                layer.open({
                                    content: data.Msg,
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                            }
                        }
                    });
                } else {
                    //提示
                    layer.open({
                        content: '请输入正确手机号',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            } else {
                //提示
                layer.open({
                    content: '请输入手机号',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }
    }, {
        key: 'login_submit',
        value: function login_submit() {
            if (this.cq_Msg.value && this.tel.value) {
                if (filter.verificationPhone(this.tel.value)) {
                    //验证码验证
                    //登陆请求
                    $.ajax({
                        type: 'post',
                        cache: false,
                        contentType: "application/json; charset=utf-8",
                        url: this.url2,
                        data: JSON.stringify({
                            Mobile: this.tel.value,
                            Code: this.cq_Msg.value
                        }),
                        dataType: "json",
                        error: function error(a, b) {
                            console.log(a);
                        },
                        success: function success(data) {
                            layer.open({
                                content: data.Msg,
                                skin: 'msg',
                                time: 2 //2秒后自动关闭
                            });
                            if (data.Status == 1) {
                                setTimeout(function () {
                                    location.reload();
                                }, 2000);
                                $("#IsRegister").val("True");
                            }
                        }
                    });
                }
            } else {
                if (!this.tel.value) {
                    //提示
                    layer.open({
                        content: '请输入手机号',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                } else if (!this.cq_Msg.value) {
                    //提示
                    layer.open({
                        content: '请输入验证码',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            }
        }
    }]);

    return login;
}();
'use strict';

var logins = {
  tel: document.querySelector('#tel'), //电话
  cq_Btn: document.querySelector('.cq_Btn'), //验证码按钮
  cq_Msg: document.querySelector('.cq_Msg'), //验证码
  login_btn: document.querySelector('.login_btn'), //登陆按钮
  login_close: document.querySelector('.login_close'), //关闭登陆X
  init: function init() {
    var _this = this;

    //点击获取
    $('.loginBox').on('click', '.cq_Btn', function () {
      if (_this.tel.value) {
        if (filter.verificationPhone(_this.tel.value)) {
          //发送验证码
          $.ajax({
            type: 'post',
            cache: false,
            contentType: "application/json; charset=utf-8",
            url: "/WeiXin/SendMsg",
            data: JSON.stringify({
              Mobile: _this.tel.value
            }),
            dataType: "json",
            error: function error(a, b) {
              console.log(a);
            },
            success: function success(data) {
              console.info(data);
              if (data.Status == 1) {
                filter.countdowns(logins.cq_Btn);
                //提示
                layer.open({
                  content: '验证码已发送',
                  skin: 'msg',
                  time: 2 //2秒后自动关闭
                });
              } else {
                layer.open({
                  content: data.Msg,
                  skin: 'msg',
                  time: 2 //2秒后自动关闭
                });
              }
            }
          });
        } else {
          //提示
          layer.open({
            content: '请输入正确手机号',
            skin: 'msg',
            time: 2 //2秒后自动关闭
          });
        }
      } else {

        //提示
        layer.open({
          content: '请输入手机号',
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
      }
    });
    //点击登陆
    $('.login_btn').on('click', function (e) {
      if (_this.cq_Msg.value && _this.tel.value) {
        if (filter.verificationPhone(_this.tel.value)) {
          //验证码验证
          //登陆请求
          var bid = $("#Bid").val();
          console.log(bid);
          $.ajax({
            type: 'post',
            cache: false,
            contentType: "application/json; charset=utf-8",
            url: "/FunUser/Register",
            data: JSON.stringify({
              Mobile: _this.tel.value,
              Code: _this.cq_Msg.value,
              Bid: bid

            }),
            dataType: "json",
            error: function error(a, b) {
              console.log(a);
            },
            success: function success(data) {
              layer.open({
                content: data.Msg,
                skin: 'msg',
                time: 2 //2秒后自动关闭
              });
              if (data.Status == 1) {
                setTimeout(function () {
                  location.reload();
                }, 2000);
                $("#IsRegister").val("True");
              }
            }
          });
        }
      } else {
        if (!_this.tel.value) {
          //提示
          layer.open({
            content: '请输入手机号',
            skin: 'msg',
            time: 2 //2秒后自动关闭
          });
        } else if (!_this.cq_Msg.value) {
          //提示
          layer.open({
            content: '请输入验证码',
            skin: 'msg',
            time: 2 //2秒后自动关闭
          });
        }
      }
    });
    $(this.login_close).on('click', function (e) {
      $('.loginBox').addClass('scale');
      e.stopPropagation();
      //关闭登陆窗口
    });
  }
};
"use strict";

//宝箱抽奖
var lotteries = {
    init: function init() {
        var _this = this;
        var CanPlayCount = 0;
        $.ajax({
            async: false,
            type: "POST",
            // url: '/RedBag/PlayRedBag',
            url: 'http://rap.taobao.org/mockjsdata/28289/RedBag/PlayRedBag',
            dataType: "json",
            success: function success(data) {
                _this.CanPlayCount = data.Result.CanPlayCount;
                if (data.Status == 1) {
                    $('#NewMoneySum').html(data.Result.CanPlayCount);
                    $('.NewMoneySum').html('您还有 ' + data.Result.CanPlayCount + ' 次机会');
                    _this.CanPlayCount = data.Result.CanPlayCount;
                    _this.opens(data.Result.CanPlayCount); //抽奖次数
                } else {
                    //提示
                    layer.open({
                        content: '网络错误，请刷新页面！',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            }
        });

        $('.lotteryBtn').on('touchstart', function () {
            $('.openBox').removeClass('none');
        });
        $('.close').on('touchstart', function () {
            $('.openBox').addClass('none');
            _this.closes();
        });
    },
    redBagLog: function redBagLog(params) {
        var _data = '',
            RedBagLog = '',
            drawRecord = document.querySelector('.drawRecord');
        $.ajax({
            async: false,
            type: "POST",
            url: "RedBag/RedBagLog",
            dataType: "json",
            success: function success(data) {
                _data = data.Result;
            },
            error: function error(data) {
                //提示
                layer.open({
                    content: '网络错误，请刷新页面！',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        });
        _data.Result.forEach(function (element) {
            console.info(element.Amount);
            RedBagLog += "<article class=\"drawRecordList\"> <span>" + element.Date + "</span><span>" + element.Time + "</span><span>" + element.Type + "</span><span class=\"reds\">+" + element.Amount + "</span></article>";
        });
        drawRecord.innerHTML = RedBagLog;
    },
    opens: function opens(num) {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).on('touchstart', function (e) {
                e.preventDefault();
                if (num > 0) {
                    $('.boxList li').eq(i).addClass('open');
                    $.ajax({
                        async: false,
                        type: "POST",
                        url: '/RedBag/RedBagResult',
                        dataType: "json",
                        success: function success(data) {
                            console.info(data);
                            switch (data.Result) {
                                case 0:
                                    //2元
                                    //询问框
                                    layer.open({
                                        content: '恭喜你获得2元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    break;
                                case 1:
                                    layer.open({
                                        content: '恭喜你获得10元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //10元
                                    break;
                                case 2:
                                    layer.open({
                                        content: '恭喜你获得1.8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //1.8元
                                    break;
                                case 3:
                                    layer.open({
                                        content: '恭喜你获得2元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //2元
                                    break;
                                case 4:
                                    layer.open({
                                        content: '恭喜你获得10元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {

                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    }); // alert('恭喜你获得红包 10元');
                                    // setTimeout(location.reload(), 3000)

                                    //10元
                                    break;
                                case 5:
                                    layer.open({
                                        content: '恭喜你获得8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {

                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    }); //8元
                                    break;
                                case 6:
                                    layer.open({
                                        content: '恭喜你获得1.8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //1.8元
                                    break;
                                case 7:
                                    _this.redHub(8);
                                    //8元
                                    break;
                            }
                        }
                    });
                } else {
                    //信息框
                    layer.open({
                        content: '您没有抽奖的机会！',
                        btn: '我知道了'
                    });
                }
            });
        });
    },
    closes: function closes() {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).removeClass('open');
        });
    },
    redHub: function redHub(argument) {
        layer.open({
            content: '恭喜你获得' + argument + '元红包！',
            btn: ['继续抽奖', '去竞猜'],
            shadeClose: false,
            yes: function yes(index) {
                location.reload();
                layer.close(index);
            },
            no: function no(index) {
                layer.close(index);
                window.location.href = '/Game/Start';
            }
        });
    }
};
lotteries.init();
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
//         'i': 'icon-yaoqing5'
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
'use strict';

var footerfle = new footerflex([{
    't': '首页',
    'n': 'home',
    'i': 'icon-icon-test'
}, {
    't': '邀请',
    'n': 'invite',
    'i': 'icon-yaoqing5'
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
'use strict';

window.onload = function (params) {
    outMoney.init();
};

var outMoney = {
    init: function init() {
        self = this;
        var moneys = document.querySelector('.moneys');
        var outMoney = document.querySelector('.outMoney');
        var outMoneyNum = document.querySelector('.outMoneyNum');
        var rep = /\d+\.\d+/ig;
        outMoney.addEventListener('click', function (params) {
            moneys.value = outMoneyNum.textContent.match(rep);
            // console.info( outMoneyNum.textContent.match(rep))
            self.moneys();
        }, false);

        self.getPay(); //获取支付

        //验证码发送
        $('#cqBtn').on('click', function () {
            self.getCode(this);
        });
        //关闭窗口
        $('.close').on('click', function () {
            window.history.go(-1);
        });
        //检测输入动态码
        $('.releCq').on('input', function () {
            if ($('.releCq').val()) {
                $('.GoPay').removeClass('pointer').addClass('blues');
            } else {
                $('.GoPay').removeClass('blues').addClass('pointer');
            }
        });
        //检测金额
        $('.moneys').on('input', function () {
            self.moneys();
        });
        //支付宝的确定按钮
        $('.GoPay').on('click', function () {
            var releCq = filter.unBlank($('.releCq').val());
            var zfbPay = filter.unBlank($('.zfbPay').val());
            if (releCq && zfbPay) {
                //检测都存在，就发送ajax
                layer.open({
                    content: '请检查你的支付账号是否正确“' + zfbPay + '”',
                    btn: ['正确', '不正确'],
                    yes: function yes(index) {
                        self.goPay($('.tel').val(), releCq, zfbPay);
                        layer.close(index);
                    }
                });
            } else {
                //提示
                layer.open({
                    content: '请输入支付宝号',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        });
        //确定提款
        $('#tx').on('click', function () {
            self.Withdraw($('.moneys').val(), $('#userNum').val());
        });
    },
    moneys: function moneys() {
        if ($('.moneys').val()) {
            $('#tx').removeClass('pointer').addClass('blue');
        } else {
            $('#tx').removeClass('blue').addClass('pointer');
        }
    },
    getPhone: function getPhone() {
        //获取手机号
        console.info('获取手机号');
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                name: "John",
                location: "Boston"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            console.info(data);
            if (data.Status == 1) {
                $('.tel').val(data); //手机号放置页面上
            } else {
                layer.open({
                    content: '获取手机号失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
            // alert("success")
        }).fail(function (jqXHR, textStatus, errorThrown) {//error
            // alert("error");
        });
    },
    getCode: function getCode(btn) {
        //发送验证码
        console.info('发送验证码');
        //loading层
        layer.open({
            type: 2,
            shadeClose: false
        });
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                tel: "John"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            if (data.Status == 1) {
                layer.open({
                    content: '发送成功',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                filter.countdowns(btn);
                setTimeout(function () {
                    layer.closeAll();
                }, 2000);
            } else {
                layer.open({
                    content: '发送失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                setTimeout(function () {
                    layer.closeAll();
                }, 2000);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '发送失败',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            setTimeout(function () {
                layer.closeAll();
            }, 2000);
        });
    },
    goPay: function goPay(t, c, p) {
        //点击确定！验证！验证码！
        // console.info(t);//手机号
        // console.info(c);//验证码
        // console.info(p);//支付宝
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                tel: "John"
            },
            dataType: 'json'
        }).done(function (data) {
            //success
            console.info(data);
            if (data.Status == 1) {
                $('.userNameBox').hide(); //成功后隐藏验证卡
                $('#userNum').val(p);
            } else {
                layer.open({
                    content: '网络异常',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '网络异常',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        });
    },
    getPay: function getPay() {
        //获取支付宝
        console.info('获取支付宝');
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            dataType: 'json'
        }).done(function (data) {
            //success
            console.info(data);
            if (data.Status == 1) {
                //判断返回的支付宝是否为空
                if (!data) {
                    $('.userNameBox').show();
                    self.getPhone();
                } else if (data) {
                    //支付宝账号存在的话，直接填入
                    $('#userNum').val(data);
                }
            } else {
                layer.open({
                    content: '网络异常',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '网络异常',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        });
    },
    Withdraw: function Withdraw(m, p) {
        //提款操作
        // console.info(m);//提款金额
        // console.info(p);//支付宝
        //loading层
        layer.open({
            type: 2,
            shadeClose: false
        });
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                name: "John",
                location: "Boston"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            console.info(data);
            if (data.Status == 1) {
                layer.open({
                    content: '提交成功',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                filter.countdowns(btn);
                setTimeout(function () {
                    //或许需要跳连接？
                    //window.location.href = '';
                    layer.closeAll();
                }, 2000);
            } else {
                layer.open({
                    content: '提交失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                setTimeout(function () {
                    //或许需要跳连接？
                    layer.closeAll();
                }, 2000);
            }
            // alert("success")
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '提交失败',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            setTimeout(function () {
                //或许需要跳连接？
                layer.closeAll();
            }, 2000);
        });
    }
};
"use strict";

(function () {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    console.log(s);
    window.onresize = function () {
        //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        console.log(w);
        ft.style.fontSize = w / s * 16 + "px";
    };
})();
(function ($) {
    $.fn.flowtype = function (options) {
        // Establish default settings/variables
        // ====================================
        var settings = $.extend({
            maximum: 9999,
            minimum: 1,
            maxFont: 9999,
            minFont: 1,
            fontRatio: 23.44
        }, options),


        // Do the magic math
        // =================
        changes = function changes(el) {
            var $el = $(el),
                elw = $el.width(),
                width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
                fontBase = width / settings.fontRatio,
                fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
            $el.css('font-size', fontSize + 'px');
        };

        // Make the magic visible
        // ======================
        return this.each(function () {
            // Context for resize callback
            var that = this;
            // Make changes upon resize
            $(window).resize(function () {
                changes(that);
            });
            // Set changes on load
            changes(this);
        });
    };
})(jQuery);

$('html').flowtype({
    // fontRatio: 24
});
"use strict";

$(function () {
    $.ajax({
        type: "POST",
        url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
        data: {
            name: "John",
            location: "Boston"
        },
        dataType: 'json'
    }).done(function (data) {
        //success
        console.info(data);
        timeout();
    }).fail(function (data) {
        //error
        console.info(data);
    });
    //微信内部刷新需要重新跳页面
    $('.reload').on('click', function (params) {
        if (isWeiXin()) {
            window.location.href = '';
        }
    });
});

function timeout() {
    setTimeout(function () {
        $('.wx_mb').show();
    }, 99999);
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}