var jo = {
    "DrawItems": [], //提款数据
    "RechargeItems": [], //充值数据
    "RechargeTotal": 32412, //充值总额
    "TotalItems": [ //汇总
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
        }
    ],
    "WithdrawalsTotal": 80723 //提现总额
}
class deal_list {
    constructor(n) {
        this.n = n;
    }
    maps() {
        let len = this.n.length;
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
    payUp() { //
        let len = this.ays.length;
        var payUp = '',
            payMsg, g = 'greens',
            typecol = '',
            o = 'oranges';
        var boxs;
        console.info(this.ays)
        // // console.log(Object.keys(this.n[0]));
        // // console.log(Object.values(this.n[0]));
        for (let i of this.ays) {
            payUp += `<div class="payUp"><div class="dates">${i.Date}<img src="../images/dade.png" alt=""></div>`
            for (let j of i.data) {
                console.info(Number(j.Amount) < 0)
                if (Number(j.Amount) > 0) {
                    typecol = o;
                }
                if (Number(j.Amount) < 0) {
                    typecol = g;
                }
                console.log(j.Amount);
                payUp += `<div class="payMsg"><span>${j.Time}</span><span data-uid=${j.TypeId}>${j.Type}</span><span class="${typecol}">${j.Amount}</span></div>`
            }
            payUp += `</div>`
        }
        console.log(payUp);
        return payUp;
    }
    init() {
        this.maps();
        var payUp = this.payUp();
        var glass = document.createElement('div');

        glass.innerHTML = payUp;
        var lately = document.querySelector('.lately1')
        console.log(glass);
        lately.appendChild(glass);
    }
    init2() {
        this.maps();
        var payUp = this.payUp();
        var glass = document.createElement('div');
        glass.innerHTML = payUp;
        var lately = document.querySelector('.lately2')
        console.log(glass);
        lately.appendChild(glass);
    }
    init3() {
        this.maps();
        var payUp = this.payUp();
        var glass = document.createElement('div');
        glass.innerHTML = payUp;
        var lately = document.querySelector('.lately3')
        console.log(glass);
        lately.appendChild(glass);
    }
}
// new deal_list(jo.TotalItems).init()




window.onload = function () {
    var log = 0;
    ajaxlog(log);

    $('.selected').on('change', function (params) {
        log = $(this).val();
        ajaxlog(log);
        $('.selected').find("option[value='" + log + "']").attr("selected", true);
    })



}

function ajaxlog(params) {
    $.ajax({
        type: "POST",
        url: "/FunUser/UserBalanceLog",
        data: {
            'type': params
        },
        dataType: "json",
        success: function (data) {
            layer.open({
                type: 2,
                shadeClose: false,
            });
            if (data.Status == 1) {
                $('.payUp').remove()
                // RechargeTotal=data.Result.RechargeTotal; //总金额
                // WithdrawalsTotal=data.Result.WithdrawalsTotal //提款总
                $('[name=TotalRecharge]').text(data.Result.RechargeTotal.toFixed(2))
                $('[name=TotalDraw]').text(data.Result.WithdrawalsTotal.toFixed(2))
                // console.info(data.Result);
                if (data.Result.TotalItems.length) {
                    new deal_list(data.Result.TotalItems).init();
                    new deal_list(data.Result.RechargeItems).init2(); //提款
                    new deal_list(data.Result.DrawItems).init3(); //充值
                }
                layer.closeAll()
            } else {
                //提示
                layer.open({
                    content: '获取数据失败，请刷新页面！',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }
    })

}