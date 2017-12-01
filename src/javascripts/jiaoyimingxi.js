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
}]




class trade {
    constructor(n) {
        this.n = n;
    }
    init() {
        this.strings(this.n[0].Result);
        // console.info(this)
        // console.info(this.strings(this.n[0].Result))
        // console.info(this.n[0].Result[0].CreateDate)
        let lat = document.createElement('div'),lately=document.querySelector('.lately');
        lat.className = "payUp tet";
        lat.innerHTML=`<div class="jdates dates">${this.n[0].Result[0].CreateDate}<img src="../images/dade.png" alt=""></div>`+ this.strings(this.n[0].Result);
        lately.appendChild(lat)
    }
    strings(r) {
        let result = r,
            srt = '',
            profit = '盈利',
            loss = '亏损',
            g = 'greens',
            o = 'oranges',
            col = '',
            LstTradeLogItem='',
            txt = '';
        result.forEach(element => {
            if (element.WinnerAmount < 0) {
                txt = loss;
                col = g;
            } else {
                txt = profit;
                col = o;
            }
            srt += `<div class="payMsg"><span>${element.LotterTime}开奖</span><span class="${col}">${txt}</span><span>盈利:${element.WinnerAmount}<img class="rightPic" src="../images/right.png" alt=""></span></div>
            <div class="transaction_detail"> 
            <aside><span>订单号：${element.TradeId}</span><span>开盘数字:${element.WinNumber}</span></aside>${this.strings_list(element.LstTradeLogItem)}</div>`
            // console.info(element.LstTradeLogItem)
        
        });
        // console.info()
        
        return srt;
    }
    strings_list(ele) {
        // console.info('el')
        let doc = '<div class="transaction_detail_list">'
        ele.forEach(eles => {
            doc += `<aside><span>竞猜：${eles.BuyType}</span><span>下单金额：${eles.BuyAmount}元</span><span>盈利率：${eles.WinRate}</span></aside>`
        });
        doc+='</div>';
        // console.info(doc)
        return doc;
    }
}
new trade(json).init()