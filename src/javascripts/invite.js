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
    }], '/Game/').init()

    var w = window.screen.width;
    var swiper_slide = document.querySelectorAll(".swiper_slide");
    var swiper_button_next = document.querySelector(".swiper_button_next");
    var abox = document.querySelectorAll(".sub");
    var _index = 0
    for (var i = 0; i < abox.length; i++) {
        abox[i].index = i;
        abox[i].onclick = function () {
            _index = this.index;
            console.info(_index)
            for (var j = 0; j < abox.length; j++) {
                swiper_slide[j].classList.add('none')
                abox[j].classList.remove('active')

            }
            this.classList.add("active");
            swiper_slide[this.index].classList.remove('none')
        }
    }
    $(swiper_button_next).on('click', function () {
        console.info($("#yq_ul li").length)
        $("#yq_ul li").eq(_index).addClass('active')
    })
    $("#yq_ul li").on('click', function () {

    })
































    // $('.sub').on('click', function () {
    //     console bounceInLeft animated
    //     _index = $(this).index();
    //     $(swiper_slide).eq(_index).removeClass('bounceOutLeft animated none').siblings().addClass('bounceOutLeft animated none')
    //     // .siblings().addClass('bounceOutLeft animated')
    // })
    // $('.swiper_button_next').on('click', () => {
    //     $(swiper_slide).eq(_index).addClass('bounceOutLeft animated').siblings().addClass('bounceInLeft animated')
    // })



}