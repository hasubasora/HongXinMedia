window.onload = function () {
    const abox = document.querySelectorAll(".sub");
    const lately = document.querySelectorAll(".lately");

    for (var i = 0; i < abox.length; i++) {
        abox[i].addEventListener('touchstart', function () {
            for (var i = 0; i < abox.length; i++) {
                abox[i].index = i
                abox[i].classList.remove('active')
                lately[i].classList.add('none')

            }
            this.classList.add("active");
            lately[this.index].classList.remove('none')
        })


    }
}
window.onload = function () {
    $.each($('.payMsg'),function (i,it) {
        $('.payMsg').eq(i).on('touchstart', function () {
            $('.transaction_detail').eq(i).toggle('show')
        })
    })
   
}