const capital = {
    init() {
        ranking.tabs(".sub", ".lately", 'active');
    }
}


const ranking = {
    init() {
        this.tabs(".sub", ".ran_list", 'act');
    },
    tabs(c1, c2, c3) {
        const abox = document.querySelectorAll(c1);
        const lately = document.querySelectorAll(c2);

        for (var i = 0; i < abox.length; i++) {
            abox[i].addEventListener('touchstart', function () {
                for (var i = 0; i < abox.length; i++) {
                    abox[i].index = i
                    abox[i].classList.remove(c3)
                    lately[i].classList.add('none')
                }
                this.classList.add(c3);
                lately[this.index].classList.remove('none')
            })
        }
    }
}


const payMsgs = {
    init() {
        $.each($('.payMsg'), function (i, it) {
            $('.payMsg').eq(i).on('touchstart', function () {
                $('.transaction_detail').eq(i).toggle(300);
                if ($('.rightPic').eq(i).hasClass('transform90')) {
                    $('.rightPic').eq(i).removeClass('transform90');
                } else {
                    $('.rightPic').eq(i).addClass('transform90');
                }

            })
        })
    }
}

//宝箱抽奖
const lotteries = {
    init() {
        var _this=this;
        this.opens(1); //抽奖次数
        $('.lotteryBtn').on('touchstart', function () {
            $('.openBox').removeClass('none');
        })
        $('.close').on('touchstart', function () {
            $('.openBox').addClass('none');
            _this.closes();
        })
    },
    opens(num) {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).on('touchstart', function () {
                if (num > 0) {
                    $('.boxList li').eq(i).addClass('open');
                } else {
                    alert('您没有抽奖的机会！')
                }
            })
        })
    },
    closes() {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).removeClass('open');
        })
    }
}

//攻略的功能
