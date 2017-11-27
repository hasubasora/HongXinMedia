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