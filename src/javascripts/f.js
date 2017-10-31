
const capital={
    init(){
        ranking.tabs(".sub", ".lately", 'active');
    }
}

const ranking = {
    init() {
        _this = this;
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