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
            "Amount": "3333", //变动金额
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
        var payUp = '<div class="payUp">',
            payMsg;
        var boxs;
        console.info(this.ays)
        // // console.log(Object.keys(this.n[0]));
        // // console.log(Object.values(this.n[0]));
        for (let i of this.ays) {
            payUp += `<div class="dates">${i.Date}<img src="../images/dade.png" alt=""></div>`
            for (let j of i.data) {
                console.log(j.Amount);
                payUp += `<div class="payMsg"><span>${j.Time}</span><span data-uid=${j.TypeId}>${j.Type}</span><span class="greens">-11.22</span></div>`
            }
            payUp += `</div>`
        }
        console.log(payUp);
        return payUp;
    }
    payUpList() {
        let payMsg = `<div class="payMsg"><span>${this.times}</span><span data-uid=${this.typesId}>${this.types}</span><span class="greens">-11.22</span></div>`
    }
    init() {
        this.maps();
        this.payUp();
    }
}
var b = new deal_list(jo.TotalItems);
b.init()



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
        }], '/Game/')
        footerfle.init()
    }