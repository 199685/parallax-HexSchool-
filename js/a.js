$(document).ready(function () {
    $(".scrollTop").click(function (e) {
        e.preventDefault();
        let target = $(this).attr("href"); //attr()設置或回傳讀取class的屬性與值

        let targetPos = $(target).offset().top; //offset()設置或回傳所選元素的top left坐標

        $("html,body").animate({ scrollTop: targetPos }, 1000); //scrollTop到錨點
    });
    let showSkill = true;
    $(window).scroll(function (e) {
        let scrollPos = $(window).scrollTop(); //已經滾動過的高度
        let windowHeight = $(window).height(); //當前視窗大小高度

        $(".scrollTop").each(function (e) {
            //each類似js的foreach
            let target = $(this).attr("href");
            let targetPos = $(target).offset().top;
            let targetHight = $(target).outerHeight(); //outerHeight()=border+padding+height

            if (targetPos - 1 <= scrollPos) {
                $(".scrollTop").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });

        // progress bar
        let skillTop = $("#skills").position().top;
        //offset().top 是與最外層文件的文件的距離
        //position().top 則是上一層相對(relative) 元素的的距離(如果上一層沒有relative,效果和offset().top一樣)

        if (skillTop <= scrollPos + windowHeight / 2 && showSkill == true) {
            $("#skills .progress-bar").each(function () {
                showSkill = false;
                let thisValue = $(this).data("progress"); //類似JS的dataset
                $(this).css("width", thisValue + "%"); //加css
            });
        }

        //animated
        $(".animated").each(function () {
            let thisPos = $(this).offset().top;
            if (thisPos <= scrollPos + windowHeight) {
                $(this).addClass("fadeIn");
            }
        });

        //bg scroll
        $("#profiles").css("background-position-y", `${-(scrollPos / 2)}px`);
        $("#header-ele").css("transform", `translateY( ${scrollPos / 2}px )`);
    });

    $(".logo.pull-left").click(function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 1500); // scrollTop最頂端
    });
});
