// --------LIGHT---------
function load() {
    var big = $(".big"),
    
        len2 = big.length,

        indx2 = 0;

    ! function go2() {
        big.eq(indx2).show(0, function() {

            $(this).delay(1000).hide(0, go2)

        });

        indx2 = ++indx2 % len2
    }()
}
load();
function load2() {
    var big = $(".big2"),
    
        len2 = big.length,

        indx2 = 0;

    ! function go2() {
        big.eq(indx2).show(0, function() {

            $(this).delay(1000).hide(0, go2)

        });

        indx2 = ++indx2 % len2
    }()
}
load2();
function load3() {
    var big = $(".big3"),
    
        len2 = big.length,

        indx2 = 0;

    ! function go2() {
        big.eq(indx2).show(0, function() {

            $(this).delay(1000).hide(0, go2)

        });

        indx2 = ++indx2 % len2
    }()
}
load3();