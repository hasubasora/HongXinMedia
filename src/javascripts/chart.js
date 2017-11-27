

class setChart {
    constructor(setJsons) {
        this.setJsons = setJsons;
        this.str = '';
    }
    setNumber(period, num) {
        // console.log(this.setJsons.Result)
        var reg = /\d+/g,
            ms = this.str.match(reg);

        var otr = `<tr><td>${period}</td><td>${num}</td>`
        if (num <= 13) {
            otr += `<td></td><td><span class='dx'></span></td>`;
            if (num % 2 == 0) {
                //偶数 双
                otr += `<td></td><td><span class='ds'></span></td><td></td><td><span class='dxds'></td><td></td><td></td>`;
            }
            if (num % 2 != 0) {
                //奇数 单.
                otr += `<td><span class='ds'></span></td><td></td><td></td><td></td><td></td><td><span class='dxds'></td>`;
            }
        }
        if (num >= 14 && num <= 27) {
            otr += `<td><span class='dx'></span></td><td></td>`;
            if (num % 2 == 0) {
                //偶数
                otr += `<td></td><td><span class='ds'></td><td><span class='dxds'></td><td></td><td></td><td></td>`;
            }
            if (num % 2 != 0) {
                //奇数
                otr += `<td><span class='ds'></td><td></td><td></td><td></td><td><span class='dxds'></td><td></td>`;
            }
        }
        if (this.smoothly(Number(ms[0]), Number(ms[1]), Number(ms[2])) != -1) {
            otr += `<td><span class='bzsz'></td><td></td></tr>`
        } else if (Number(ms[0]) == Number(ms[1]) && Number(ms[1]) == Number(ms[2]) && Number(ms[2]) == Number(ms[0])) {
            otr += `<td></td><td><span class='bzsz'></td></tr>`
        } else {
            otr += `<td></td><td></td></tr>`
        }
        return otr;
    }
    smoothly(a, b, c) { //顺子计算
        if ((a + 1) == b && (b + 1) == c) {
            return 1;
        } else {
            if (a - 1 == b && b - 1 == c) {
                return 1;
            } else {
                return -1;
            }
        }
    }
    init() {
        var sty = '';
        for (let i of this.setJsons.Result) {
            this.str = i.LotteryType;
            sty += this.setNumber(i.Period, i.WinnerNumber);

        }
        document.querySelector('.tbody').innerHTML=sty;


    }
}
window.onload = function (params) {
    $.post("/trade/GetHistoryLotryNum",  function (data) {
        const sets = new setChart(data).init();

      });
}