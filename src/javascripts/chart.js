
 
var setChart ={
    constructor(setJsons) {
        this.setJsons = setJsons;
    },
    setNumber(period, num,bs) {
        // console.log(this.setJsons.Result)
        var reg = /\d+/g;

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
        if (bs.match(/1/)!=null) {
            otr += `<td><span class='bzsz'></td><td></td></tr>`
        } else if (bs.match(/0/)!=null) {
            otr += `<td></td><td><span class='bzsz'></td></tr>`
        } else {
            otr += `<td></td><td></td></tr>`
        }
        return otr;
    },
    init() {
        var sty = '';
        for (let i of this.setJsons.Result) {
            sty += this.setNumber(i.Period, i.WinnerNumber,i.LotteryType);

        }
        document.querySelector('.tbody').innerHTML=sty;


    }
}
$(function (params) {
    $.post("/trade/GetHistoryLotryNum",  function (data) {
       setChart(data).init();
      });
})