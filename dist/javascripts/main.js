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
            var payUp = '<div class="payUp">',
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

                    payUp += "<div class=\"dates\">" + i.Date + "<img src=\"../images/dade.png\" alt=\"\"></div>";
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
            this.payUp();
        }
    }, {
        key: "init2",
        value: function init2() {
            this.maps();
            this.payUp();
        }
    }, {
        key: "init3",
        value: function init3() {
            this.maps();
            this.payUp();
        }
    }]);

    return deal_list;
}();

new deal_list(jo.TotalItems).init();
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
        timer = setInterval(function () {
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
"use strict";

;
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
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function (t, e) {
  "function" == typeof define && define.amd ? define(function () {
    return e(t);
  }) : e(t);
}(undefined, function (t) {
  var e = function () {
    function $(t) {
      return null == t ? String(t) : S[C.call(t)] || "object";
    }function F(t) {
      return "function" == $(t);
    }function k(t) {
      return null != t && t == t.window;
    }function M(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }function R(t) {
      return "object" == $(t);
    }function Z(t) {
      return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype;
    }function z(t) {
      var e = !!t && "length" in t && t.length,
          n = r.type(t);return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }function q(t) {
      return a.call(t, function (t) {
        return null != t;
      });
    }function H(t) {
      return t.length > 0 ? r.fn.concat.apply([], t) : t;
    }function I(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }function V(t) {
      return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
    }function _(t, e) {
      return "number" != typeof e || h[I(t)] ? e : e + "px";
    }function B(t) {
      var e, n;return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t];
    }function U(t) {
      return "children" in t ? u.call(t.children) : r.map(t.childNodes, function (t) {
        return 1 == t.nodeType ? t : void 0;
      });
    }function X(t, e) {
      var n,
          r = t ? t.length : 0;for (n = 0; r > n; n++) {
        this[n] = t[n];
      }this.length = r, this.selector = e || "";
    }function J(t, r, i) {
      for (n in r) {
        i && (Z(r[n]) || L(r[n])) ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}), L(r[n]) && !L(t[n]) && (t[n] = []), J(t[n], r[n], i)) : r[n] !== e && (t[n] = r[n]);
      }
    }function W(t, e) {
      return null == e ? r(t) : r(t).filter(e);
    }function Y(t, e, n, r) {
      return F(e) ? e.call(t, n, r) : e;
    }function G(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }function K(t, n) {
      var r = t.className || "",
          i = r && r.baseVal !== e;return n === e ? i ? r.baseVal : r : void (i ? r.baseVal = n : t.className = n);
    }function Q(t) {
      try {
        return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t;
      } catch (e) {
        return t;
      }
    }function tt(t, e) {
      e(t);for (var n = 0, r = t.childNodes.length; r > n; n++) {
        tt(t.childNodes[n], e);
      }
    }var e,
        n,
        r,
        i,
        O,
        P,
        o = [],
        s = o.concat,
        a = o.filter,
        u = o.slice,
        f = t.document,
        c = {},
        l = {},
        h = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
        p = /^\s*<(\w+|!)[^>]*>/,
        d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        g = /^(?:body|html)$/i,
        v = /([A-Z])/g,
        y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        x = ["after", "prepend", "before", "append"],
        b = f.createElement("table"),
        E = f.createElement("tr"),
        j = { tr: f.createElement("tbody"), tbody: b, thead: b, tfoot: b, td: E, th: E, "*": f.createElement("div") },
        w = /complete|loaded|interactive/,
        T = /^[\w-]*$/,
        S = {},
        C = S.toString,
        N = {},
        A = f.createElement("div"),
        D = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        L = Array.isArray || function (t) {
      return t instanceof Array;
    };return N.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;if (n) return n.call(t, e);var r,
          i = t.parentNode,
          o = !i;return o && (i = A).appendChild(t), r = ~N.qsa(i, e).indexOf(t), o && A.removeChild(t), r;
    }, O = function O(t) {
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }, P = function P(t) {
      return a.call(t, function (e, n) {
        return t.indexOf(e) == n;
      });
    }, N.fragment = function (t, n, i) {
      var o, s, a;return d.test(t) && (o = r(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in j || (n = "*"), a = j[n], a.innerHTML = "" + t, o = r.each(u.call(a.childNodes), function () {
        a.removeChild(this);
      })), Z(i) && (s = r(o), r.each(i, function (t, e) {
        y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e);
      })), o;
    }, N.Z = function (t, e) {
      return new X(t, e);
    }, N.isZ = function (t) {
      return t instanceof N.Z;
    }, N.init = function (t, n) {
      var i;if (!t) return N.Z();if ("string" == typeof t) {
        if (t = t.trim(), "<" == t[0] && p.test(t)) i = N.fragment(t, RegExp.$1, n), t = null;else {
          if (n !== e) return r(n).find(t);i = N.qsa(f, t);
        }
      } else {
        if (F(t)) return r(f).ready(t);if (N.isZ(t)) return t;if (L(t)) i = q(t);else if (R(t)) i = [t], t = null;else if (p.test(t)) i = N.fragment(t.trim(), RegExp.$1, n), t = null;else {
          if (n !== e) return r(n).find(t);i = N.qsa(f, t);
        }
      }return N.Z(i, t);
    }, r = function r(t, e) {
      return N.init(t, e);
    }, r.extend = function (t) {
      var e,
          n = u.call(arguments, 1);return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
        J(t, n, e);
      }), t;
    }, N.qsa = function (t, e) {
      var n,
          r = "#" == e[0],
          i = !r && "." == e[0],
          o = r || i ? e.slice(1) : e,
          s = T.test(o);return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
    }, r.contains = f.documentElement.contains ? function (t, e) {
      return t !== e && t.contains(e);
    } : function (t, e) {
      for (; e && (e = e.parentNode);) {
        if (e === t) return !0;
      }return !1;
    }, r.type = $, r.isFunction = F, r.isWindow = k, r.isArray = L, r.isPlainObject = Z, r.isEmptyObject = function (t) {
      var e;for (e in t) {
        return !1;
      }return !0;
    }, r.isNumeric = function (t) {
      var e = Number(t),
          n = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1;
    }, r.inArray = function (t, e, n) {
      return o.indexOf.call(e, t, n);
    }, r.camelCase = O, r.trim = function (t) {
      return null == t ? "" : String.prototype.trim.call(t);
    }, r.uuid = 0, r.support = {}, r.expr = {}, r.noop = function () {}, r.map = function (t, e) {
      var n,
          i,
          o,
          r = [];if (z(t)) for (i = 0; i < t.length; i++) {
        n = e(t[i], i), null != n && r.push(n);
      } else for (o in t) {
        n = e(t[o], o), null != n && r.push(n);
      }return H(r);
    }, r.each = function (t, e) {
      var n, r;if (z(t)) {
        for (n = 0; n < t.length; n++) {
          if (e.call(t[n], n, t[n]) === !1) return t;
        }
      } else for (r in t) {
        if (e.call(t[r], r, t[r]) === !1) return t;
      }return t;
    }, r.grep = function (t, e) {
      return a.call(t, e);
    }, t.JSON && (r.parseJSON = JSON.parse), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      S["[object " + e + "]"] = e.toLowerCase();
    }), r.fn = { constructor: N.Z, length: 0, forEach: o.forEach, reduce: o.reduce, push: o.push, sort: o.sort, splice: o.splice, indexOf: o.indexOf, concat: function concat() {
        var t,
            e,
            n = [];for (t = 0; t < arguments.length; t++) {
          e = arguments[t], n[t] = N.isZ(e) ? e.toArray() : e;
        }return s.apply(N.isZ(this) ? this.toArray() : this, n);
      }, map: function map(t) {
        return r(r.map(this, function (e, n) {
          return t.call(e, n, e);
        }));
      }, slice: function slice() {
        return r(u.apply(this, arguments));
      }, ready: function ready(t) {
        return w.test(f.readyState) && f.body ? t(r) : f.addEventListener("DOMContentLoaded", function () {
          t(r);
        }, !1), this;
      }, get: function get(t) {
        return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length];
      }, toArray: function toArray() {
        return this.get();
      }, size: function size() {
        return this.length;
      }, remove: function remove() {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      }, each: function each(t) {
        return o.every.call(this, function (e, n) {
          return t.call(e, n, e) !== !1;
        }), this;
      }, filter: function filter(t) {
        return F(t) ? this.not(this.not(t)) : r(a.call(this, function (e) {
          return N.matches(e, t);
        }));
      }, add: function add(t, e) {
        return r(P(this.concat(r(t, e))));
      }, is: function is(t) {
        return this.length > 0 && N.matches(this[0], t);
      }, not: function not(t) {
        var n = [];if (F(t) && t.call !== e) this.each(function (e) {
          t.call(this, e) || n.push(this);
        });else {
          var i = "string" == typeof t ? this.filter(t) : z(t) && F(t.item) ? u.call(t) : r(t);this.forEach(function (t) {
            i.indexOf(t) < 0 && n.push(t);
          });
        }return r(n);
      }, has: function has(t) {
        return this.filter(function () {
          return R(t) ? r.contains(this, t) : r(this).find(t).size();
        });
      }, eq: function eq(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      }, first: function first() {
        var t = this[0];return t && !R(t) ? t : r(t);
      }, last: function last() {
        var t = this[this.length - 1];return t && !R(t) ? t : r(t);
      }, find: function find(t) {
        var e,
            n = this;return e = t ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? r(t).filter(function () {
          var t = this;return o.some.call(n, function (e) {
            return r.contains(e, t);
          });
        }) : 1 == this.length ? r(N.qsa(this[0], t)) : this.map(function () {
          return N.qsa(this, t);
        }) : r();
      }, closest: function closest(t, e) {
        var n = [],
            i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && r(t);return this.each(function (r, o) {
          for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t));) {
            o = o !== e && !M(o) && o.parentNode;
          }o && n.indexOf(o) < 0 && n.push(o);
        }), r(n);
      }, parents: function parents(t) {
        for (var e = [], n = this; n.length > 0;) {
          n = r.map(n, function (t) {
            return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
          });
        }return W(e, t);
      }, parent: function parent(t) {
        return W(P(this.pluck("parentNode")), t);
      }, children: function children(t) {
        return W(this.map(function () {
          return U(this);
        }), t);
      }, contents: function contents() {
        return this.map(function () {
          return this.contentDocument || u.call(this.childNodes);
        });
      }, siblings: function siblings(t) {
        return W(this.map(function (t, e) {
          return a.call(U(e.parentNode), function (t) {
            return t !== e;
          });
        }), t);
      }, empty: function empty() {
        return this.each(function () {
          this.innerHTML = "";
        });
      }, pluck: function pluck(t) {
        return r.map(this, function (e) {
          return e[t];
        });
      }, show: function show() {
        return this.each(function () {
          "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName));
        });
      }, replaceWith: function replaceWith(t) {
        return this.before(t).remove();
      }, wrap: function wrap(t) {
        var e = F(t);if (this[0] && !e) var n = r(t).get(0),
            i = n.parentNode || this.length > 1;return this.each(function (o) {
          r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n);
        });
      }, wrapAll: function wrapAll(t) {
        if (this[0]) {
          r(this[0]).before(t = r(t));for (var e; (e = t.children()).length;) {
            t = e.first();
          }r(t).append(this);
        }return this;
      }, wrapInner: function wrapInner(t) {
        var e = F(t);return this.each(function (n) {
          var i = r(this),
              o = i.contents(),
              s = e ? t.call(this, n) : t;o.length ? o.wrapAll(s) : i.append(s);
        });
      }, unwrap: function unwrap() {
        return this.parent().each(function () {
          r(this).replaceWith(r(this).children());
        }), this;
      }, clone: function clone() {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      }, hide: function hide() {
        return this.css("display", "none");
      }, toggle: function toggle(t) {
        return this.each(function () {
          var n = r(this);(t === e ? "none" == n.css("display") : t) ? n.show() : n.hide();
        });
      }, prev: function prev(t) {
        return r(this.pluck("previousElementSibling")).filter(t || "*");
      }, next: function next(t) {
        return r(this.pluck("nextElementSibling")).filter(t || "*");
      }, html: function html(t) {
        return 0 in arguments ? this.each(function (e) {
          var n = this.innerHTML;r(this).empty().append(Y(this, t, e, n));
        }) : 0 in this ? this[0].innerHTML : null;
      }, text: function text(t) {
        return 0 in arguments ? this.each(function (e) {
          var n = Y(this, t, e, this.textContent);this.textContent = null == n ? "" : "" + n;
        }) : 0 in this ? this.pluck("textContent").join("") : null;
      }, attr: function attr(t, r) {
        var i;return "string" != typeof t || 1 in arguments ? this.each(function (e) {
          if (1 === this.nodeType) if (R(t)) for (n in t) {
            G(this, n, t[n]);
          } else G(this, t, Y(this, r, e, this.getAttribute(t)));
        }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : e;
      }, removeAttr: function removeAttr(t) {
        return this.each(function () {
          1 === this.nodeType && t.split(" ").forEach(function (t) {
            G(this, t);
          }, this);
        });
      }, prop: function prop(t, e) {
        return t = D[t] || t, 1 in arguments ? this.each(function (n) {
          this[t] = Y(this, e, n, this[t]);
        }) : this[0] && this[0][t];
      }, removeProp: function removeProp(t) {
        return t = D[t] || t, this.each(function () {
          delete this[t];
        });
      }, data: function data(t, n) {
        var r = "data-" + t.replace(v, "-$1").toLowerCase(),
            i = 1 in arguments ? this.attr(r, n) : this.attr(r);return null !== i ? Q(i) : e;
      }, val: function val(t) {
        return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
          this.value = Y(this, t, e, this.value);
        })) : this[0] && (this[0].multiple ? r(this[0]).find("option").filter(function () {
          return this.selected;
        }).pluck("value") : this[0].value);
      }, offset: function offset(e) {
        if (e) return this.each(function (t) {
          var n = r(this),
              i = Y(this, e, t, n.offset()),
              o = n.offsetParent().offset(),
              s = { top: i.top - o.top, left: i.left - o.left };"static" == n.css("position") && (s.position = "relative"), n.css(s);
        });if (!this.length) return null;if (f.documentElement !== this[0] && !r.contains(f.documentElement, this[0])) return { top: 0, left: 0 };var n = this[0].getBoundingClientRect();return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) };
      }, css: function css(t, e) {
        if (arguments.length < 2) {
          var i = this[0];if ("string" == typeof t) {
            if (!i) return;return i.style[O(t)] || getComputedStyle(i, "").getPropertyValue(t);
          }if (L(t)) {
            if (!i) return;var o = {},
                s = getComputedStyle(i, "");return r.each(t, function (t, e) {
              o[e] = i.style[O(e)] || s.getPropertyValue(e);
            }), o;
          }
        }var a = "";if ("string" == $(t)) e || 0 === e ? a = I(t) + ":" + _(t, e) : this.each(function () {
          this.style.removeProperty(I(t));
        });else for (n in t) {
          t[n] || 0 === t[n] ? a += I(n) + ":" + _(n, t[n]) + ";" : this.each(function () {
            this.style.removeProperty(I(n));
          });
        }return this.each(function () {
          this.style.cssText += ";" + a;
        });
      }, index: function index(t) {
        return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0]);
      }, hasClass: function hasClass(t) {
        return t ? o.some.call(this, function (t) {
          return this.test(K(t));
        }, V(t)) : !1;
      }, addClass: function addClass(t) {
        return t ? this.each(function (e) {
          if ("className" in this) {
            i = [];var n = K(this),
                o = Y(this, t, e, n);o.split(/\s+/g).forEach(function (t) {
              r(this).hasClass(t) || i.push(t);
            }, this), i.length && K(this, n + (n ? " " : "") + i.join(" "));
          }
        }) : this;
      }, removeClass: function removeClass(t) {
        return this.each(function (n) {
          if ("className" in this) {
            if (t === e) return K(this, "");i = K(this), Y(this, t, n, i).split(/\s+/g).forEach(function (t) {
              i = i.replace(V(t), " ");
            }), K(this, i.trim());
          }
        });
      }, toggleClass: function toggleClass(t, n) {
        return t ? this.each(function (i) {
          var o = r(this),
              s = Y(this, t, i, K(this));s.split(/\s+/g).forEach(function (t) {
            (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t);
          });
        }) : this;
      }, scrollTop: function scrollTop(t) {
        if (this.length) {
          var n = "scrollTop" in this[0];return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
            this.scrollTop = t;
          } : function () {
            this.scrollTo(this.scrollX, t);
          });
        }
      }, scrollLeft: function scrollLeft(t) {
        if (this.length) {
          var n = "scrollLeft" in this[0];return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
            this.scrollLeft = t;
          } : function () {
            this.scrollTo(t, this.scrollY);
          });
        }
      }, position: function position() {
        if (this.length) {
          var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              i = g.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();return n.top -= parseFloat(r(t).css("margin-top")) || 0, n.left -= parseFloat(r(t).css("margin-left")) || 0, i.top += parseFloat(r(e[0]).css("border-top-width")) || 0, i.left += parseFloat(r(e[0]).css("border-left-width")) || 0, { top: n.top - i.top, left: n.left - i.left };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == r(t).css("position");) {
            t = t.offsetParent;
          }return t;
        });
      } }, r.fn.detach = r.fn.remove, ["width", "height"].forEach(function (t) {
      var n = t.replace(/./, function (t) {
        return t[0].toUpperCase();
      });r.fn[t] = function (i) {
        var o,
            s = this[0];return i === e ? k(s) ? s["inner" + n] : M(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (e) {
          s = r(this), s.css(t, Y(this, i, e, s[t]()));
        });
      };
    }), x.forEach(function (n, i) {
      var o = i % 2;r.fn[n] = function () {
        var n,
            a,
            s = r.map(arguments, function (t) {
          var i = [];return n = $(t), "array" == n ? (t.forEach(function (t) {
            return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void (i = i.concat(N.fragment(t)));
          }), i) : "object" == n || null == t ? t : N.fragment(t);
        }),
            u = this.length > 1;return s.length < 1 ? this : this.each(function (e, n) {
          a = o ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;var c = r.contains(f.documentElement, a);s.forEach(function (e) {
            if (u) e = e.cloneNode(!0);else if (!a) return r(e).remove();a.insertBefore(e, n), c && tt(e, function (e) {
              if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;n.eval.call(n, e.innerHTML);
              }
            });
          });
        });
      }, r.fn[o ? n + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
        return r(t)[n](this), this;
      };
    }), N.Z.prototype = X.prototype = r.fn, N.uniq = P, N.deserializeValue = Q, r.zepto = N, r;
  }();return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) {
    function h(t) {
      return t._zid || (t._zid = n++);
    }function p(t, e, n, r) {
      if (e = d(e), e.ns) var i = m(e.ns);return (a[h(t)] || []).filter(function (t) {
        return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!r || t.sel == r);
      });
    }function d(t) {
      var e = ("" + t).split(".");return { e: e[0], ns: e.slice(1).sort().join(" ") };
    }function m(t) {
      return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
    }function g(t, e) {
      return t.del && !f && t.e in c || !!e;
    }function v(t) {
      return l[t] || f && c[t] || t;
    }function y(t, n, i, o, s, u, f) {
      var c = h(t),
          p = a[c] || (a[c] = []);n.split(/\s/).forEach(function (n) {
        if ("ready" == n) return e(document).ready(i);var a = d(n);a.fn = i, a.sel = s, a.e in l && (i = function i(t) {
          var n = t.relatedTarget;return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0;
        }), a.del = u;var c = u || i;a.proxy = function (e) {
          if (e = T(e), !e.isImmediatePropagationStopped()) {
            e.data = o;var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args));return n === !1 && (e.preventDefault(), e.stopPropagation()), n;
          }
        }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(v(a.e), a.proxy, g(a, f));
      });
    }function x(t, e, n, r, i) {
      var o = h(t);(e || "").split(/\s/).forEach(function (e) {
        p(t, e, n, r).forEach(function (e) {
          delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, g(e, i));
        });
      });
    }function T(t, n) {
      return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(w, function (e, r) {
        var i = n[e];t[e] = function () {
          return this[r] = b, i && i.apply(n, arguments);
        }, t[r] = E;
      }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== r ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)), t;
    }function S(t) {
      var e,
          n = { originalEvent: t };for (e in t) {
        j.test(e) || t[e] === r || (n[e] = t[e]);
      }return T(n, t);
    }var r,
        n = 1,
        i = Array.prototype.slice,
        o = e.isFunction,
        s = function s(t) {
      return "string" == typeof t;
    },
        a = {},
        u = {},
        f = "onfocusin" in t,
        c = { focus: "focusin", blur: "focusout" },
        l = { mouseenter: "mouseover", mouseleave: "mouseout" };u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = { add: y, remove: x }, e.proxy = function (t, n) {
      var r = 2 in arguments && i.call(arguments, 2);if (o(t)) {
        var a = function a() {
          return t.apply(n, r ? r.concat(i.call(arguments)) : arguments);
        };return a._zid = h(t), a;
      }if (s(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);throw new TypeError("expected function");
    }, e.fn.bind = function (t, e, n) {
      return this.on(t, e, n);
    }, e.fn.unbind = function (t, e) {
      return this.off(t, e);
    }, e.fn.one = function (t, e, n, r) {
      return this.on(t, e, n, r, 1);
    };var b = function b() {
      return !0;
    },
        E = function E() {
      return !1;
    },
        j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        w = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };e.fn.delegate = function (t, e, n) {
      return this.on(e, t, n);
    }, e.fn.undelegate = function (t, e, n) {
      return this.off(e, t, n);
    }, e.fn.live = function (t, n) {
      return e(document.body).delegate(this.selector, t, n), this;
    }, e.fn.die = function (t, n) {
      return e(document.body).undelegate(this.selector, t, n), this;
    }, e.fn.on = function (t, n, a, u, f) {
      var c,
          l,
          h = this;return t && !s(t) ? (e.each(t, function (t, e) {
        h.on(t, n, a, e, f);
      }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = r), (u === r || a === !1) && (u = a, a = r), u === !1 && (u = E), h.each(function (r, o) {
        f && (c = function c(t) {
          return x(o, t.type, u), u.apply(this, arguments);
        }), n && (l = function l(t) {
          var r,
              s = e(t.target).closest(n, o).get(0);return s && s !== o ? (r = e.extend(S(t), { currentTarget: s, liveFired: o }), (c || u).apply(s, [r].concat(i.call(arguments, 1)))) : void 0;
        }), y(o, t, u, a, n, l || c);
      }));
    }, e.fn.off = function (t, n, i) {
      var a = this;return t && !s(t) ? (e.each(t, function (t, e) {
        a.off(t, n, e);
      }), a) : (s(n) || o(i) || i === !1 || (i = n, n = r), i === !1 && (i = E), a.each(function () {
        x(this, t, i, n);
      }));
    }, e.fn.trigger = function (t, n) {
      return t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t), t._args = n, this.each(function () {
        t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n);
      });
    }, e.fn.triggerHandler = function (t, n) {
      var r, i;return this.each(function (o, a) {
        r = S(s(t) ? e.Event(t) : t), r._args = n, r.target = a, e.each(p(a, t.type || t), function (t, e) {
          return i = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0;
        });
      }), i;
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
      e.fn[t] = function (e) {
        return 0 in arguments ? this.bind(t, e) : this.trigger(t);
      };
    }), e.Event = function (t, e) {
      s(t) || (e = t, t = e.type);var n = document.createEvent(u[t] || "Events"),
          r = !0;if (e) for (var i in e) {
        "bubbles" == i ? r = !!e[i] : n[i] = e[i];
      }return n.initEvent(t, r, !0), T(n);
    };
  }(e), function (e) {
    function p(t, n, r) {
      var i = e.Event(n);return e(t).trigger(i, r), !i.isDefaultPrevented();
    }function d(t, e, n, i) {
      return t.global ? p(e || r, n, i) : void 0;
    }function m(t) {
      t.global && 0 === e.active++ && d(t, null, "ajaxStart");
    }function g(t) {
      t.global && ! --e.active && d(t, null, "ajaxStop");
    }function v(t, e) {
      var n = e.context;return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e]);
    }function y(t, e, n, r) {
      var i = n.context,
          o = "success";n.success.call(i, t, o, e), r && r.resolveWith(i, [t, o, e]), d(n, i, "ajaxSuccess", [e, n, t]), b(o, e, n);
    }function x(t, e, n, r, i) {
      var o = r.context;r.error.call(o, n, e, t), i && i.rejectWith(o, [n, e, t]), d(r, o, "ajaxError", [n, r, t || e]), b(e, n, r);
    }function b(t, e, n) {
      var r = n.context;n.complete.call(r, e, t), d(n, r, "ajaxComplete", [e, n]), g(n);
    }function E(t, e, n) {
      if (n.dataFilter == j) return t;var r = n.context;return n.dataFilter.call(r, t, e);
    }function j() {}function w(t) {
      return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text";
    }function T(t, e) {
      return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
    }function S(t) {
      t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = T(t.url, t.data), t.data = void 0);
    }function C(t, n, r, i) {
      return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), { url: t, data: n, success: r, dataType: i };
    }function O(t, n, r, i) {
      var o,
          s = e.isArray(n),
          a = e.isPlainObject(n);e.each(n, function (n, u) {
        o = e.type(u), i && (n = r ? i : i + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !i && s ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? O(t, u, r, n) : t.add(n, u);
      });
    }var i,
        o,
        n = +new Date(),
        r = t.document,
        s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        a = /^(?:text|application)\/javascript/i,
        u = /^(?:text|application)\/xml/i,
        f = "application/json",
        c = "text/html",
        l = /^\s*$/,
        h = r.createElement("a");h.href = t.location.href, e.active = 0, e.ajaxJSONP = function (i, o) {
      if (!("type" in i)) return e.ajax(i);var c,
          p,
          s = i.jsonpCallback,
          a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
          u = r.createElement("script"),
          f = t[a],
          l = function l(t) {
        e(u).triggerHandler("error", t || "abort");
      },
          h = { abort: l };return o && o.promise(h), e(u).on("load error", function (n, r) {
        clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? y(c[0], h, i, o) : x(null, r || "error", h, i, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0;
      }), v(h, i) === !1 ? (l("abort"), h) : (t[a] = function () {
        c = arguments;
      }, u.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), r.head.appendChild(u), i.timeout > 0 && (p = setTimeout(function () {
        l("timeout");
      }, i.timeout)), h);
    }, e.ajaxSettings = { type: "GET", beforeSend: j, success: j, error: j, complete: j, context: null, global: !0, xhr: function xhr() {
        return new t.XMLHttpRequest();
      }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: f, xml: "application/xml, text/xml", html: c, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: j }, e.ajax = function (n) {
      var u,
          f,
          s = e.extend({}, n || {}),
          a = e.Deferred && e.Deferred();for (i in e.ajaxSettings) {
        void 0 === s[i] && (s[i] = e.ajaxSettings[i]);
      }m(s), s.crossDomain || (u = r.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), S(s);var c = s.dataType,
          p = /\?.+=\?/.test(s.url);if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = T(s.url, "_=" + Date.now())), "jsonp" == c) return p || (s.url = T(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a);var P,
          d = s.accepts[c],
          g = {},
          b = function b(t, e) {
        g[t.toLowerCase()] = [t, e];
      },
          C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol,
          N = s.xhr(),
          O = N.setRequestHeader;if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers) for (o in s.headers) {
        b(o, s.headers[o]);
      }if (N.setRequestHeader = b, N.onreadystatechange = function () {
        if (4 == N.readyState) {
          N.onreadystatechange = j, clearTimeout(P);var t,
              n = !1;if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
            if (c = c || w(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response;else {
              t = N.responseText;try {
                t = E(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t));
              } catch (r) {
                n = r;
              }if (n) return x(n, "parsererror", N, s, a);
            }y(t, N, s, a);
          } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a);
        }
      }, v(N, s) === !1) return N.abort(), x(null, "abort", N, s, a), N;var A = "async" in s ? s.async : !0;if (N.open(s.type, s.url, A, s.username, s.password), s.xhrFields) for (o in s.xhrFields) {
        N[o] = s.xhrFields[o];
      }for (o in g) {
        O.apply(N, g[o]);
      }return s.timeout > 0 && (P = setTimeout(function () {
        N.onreadystatechange = j, N.abort(), x(null, "timeout", N, s, a);
      }, s.timeout)), N.send(s.data ? s.data : null), N;
    }, e.get = function () {
      return e.ajax(C.apply(null, arguments));
    }, e.post = function () {
      var t = C.apply(null, arguments);return t.type = "POST", e.ajax(t);
    }, e.getJSON = function () {
      var t = C.apply(null, arguments);return t.dataType = "json", e.ajax(t);
    }, e.fn.load = function (t, n, r) {
      if (!this.length) return this;var a,
          i = this,
          o = t.split(/\s/),
          u = C(t, n, r),
          f = u.success;return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function (t) {
        i.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(i, arguments);
      }, e.ajax(u), this;
    };var N = encodeURIComponent;e.param = function (t, n) {
      var r = [];return r.add = function (t, n) {
        e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n));
      }, O(r, t, n), r.join("&").replace(/%20/g, "+");
    };
  }(e), function (t) {
    t.fn.serializeArray = function () {
      var e,
          n,
          r = [],
          i = function i(t) {
        return t.forEach ? t.forEach(i) : void r.push({ name: e, value: t });
      };return this[0] && t.each(this[0].elements, function (r, o) {
        n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val());
      }), r;
    }, t.fn.serialize = function () {
      var t = [];return this.serializeArray().forEach(function (e) {
        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
      }), t.join("&");
    }, t.fn.submit = function (e) {
      if (0 in arguments) this.bind("submit", e);else if (this.length) {
        var n = t.Event("submit");this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
      }return this;
    };
  }(e), function () {
    try {
      getComputedStyle(void 0);
    } catch (e) {
      var n = getComputedStyle;t.getComputedStyle = function (t, e) {
        try {
          return n(t, e);
        } catch (r) {
          return null;
        }
      };
    }
  }(), e;
});