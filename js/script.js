
$(".drawer-icon").on("click", function (e) {
    e.preventDefault();

    $(".drawer-icon").toggleClass("is-checked");
    $(".drawer-content").toggleClass("is-checked");
    $(".drawer-background").toggleClass("is-checked");
});


//prizes__モーダル//

$(function () {
    $('.modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.modal_close').on('click', function () {
        $('.modal').fadeOut();
        return false;
    });
});


//about__swiper//

const swiper = new Swiper('.about__swiper', {

    // Optional parameters
    loop: true,
    width: 100,
    loopedSlides: 10,
    spaceBetween: 10,

    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    delay: 0, //途切れなくループ
    keyboard: true, // キーボード操作
    autoplay: {
        // 自動再生
        delay: 0, // スライドが止まる時間
        disableOnInteraction: false, // 自動再生を止めない
    },
    breakpoints: {
        // 1200px以上のオプション
        1200: {
            width: 200,
            spaceBetween: 20,
        },
    },
    // If we need pagination
    autoplay: {
        delay: 0,

    },
});

//spots スライダー //

const spotSwiper = new Swiper('#js-spot-swiper', {
    loop: true, // ループ
    spaceBetween: 16, // スライド間余白
    slidesPerView: 1.527, // 表示スライド枚数
    centeredSlides: true, // アクティブなスライドを中央
    keyboard: true, // キーボード操作
    autHeight: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        // 600px以上のオプション
        400: {
            slidesPerView: 2, // 表示スライド枚数
            centeredSlides: true, // アクティブなスライドを中央
        },
        // 600px以上のオプション
        600: {
            slidesPerView: 2.4, // 表示スライド枚数
            centeredSlides: true, // アクティブなスライドを中央
        },
        // 900px以上のオプション
        900: {
            slidesPerView: 2.2, // 表示スライド枚数
            centeredSlides: false, // アクティブなスライドを中央
        },
        // 1200px以上のオプション
        1200: {
            slidesPerView: 3.9,
            spaceBetween: 32, // スライド間余白
            //spaceBetween: 10, // スライド間余白
            centeredSlides: false, // アクティブなスライドを中央
        },
        1500: {
            slidesPerView: 4.1,
            spaceBetween: 32, // スライド間余白
            //spaceBetween: 10, // スライド間余白
            centeredSlides: false, // アクティブなスライドを中央
        },

    },
});

//QAセクションアコーディオンメニュー//

jQuery(document).ready(function () {
    // 最初の.js-accordionにis-openクラスを付与して次の兄弟要素を表示
    jQuery('.js-accordion:first').addClass("is-open").next().slideDown();

});
jQuery(".js-accordion").on("click", function () {
    //メニューバー閉じているなら／／
    if (jQuery(this).hasClass("is-open")) {
        jQuery(this).removeClass("is-open");
        jQuery(this).next().slideUp();

        //メニューバーが開いているなら//
    } else {
        jQuery(this).addClass("is-open");
        jQuery(this).next().slideDown();
        //jQuery(this).toggleClass("active");
    };
});

$(function () {
    // IDが'js-form'のフォーム内の、クラスが'js-form-input'のすべての入力要素を選択
    const inputElements = jQuery("#js-form .js-form-input");
    const submitButton = jQuery(".button");

    // 各入力要素に対して'invalid'イベントのリスナーを設定
    inputElements.on("invalid", function () {
        // この要素が無効（検証に合格しない）場合、'is-error'クラスを追加してスタイルを適用
        jQuery(this).addClass("is-error");
    });
    // フォームの要素に変更があった場合、'.button[disabled]'のスタイルを解除
    inputElements.on("input", function () {
        if (jQuery("#js-form")[0].checkValidity()) {
            submitButton.prop("disabled", false).removeClass("disabled");
        }
    });
    // 各入力要素に対して'input'イベントのリスナーを設定
    inputElements.on("input", function () {
        // この要素の値が有効（検証に合格する）場合、'is-error'クラスを削除
        if (this.checkValidity()) {
            jQuery(this).removeClass("is-error");
        }
    });

    // .buttonがクリックされたときの処理
    $('.button').on("click", function (event) {
        // もしis-errorクラスが付いている入力要素があれば、クリックイベントを無効にする
        if (inputElements.hasClass("is-error")) {
            event.preventDefault();
            jQuery(this).addClass("disabled")
        }
    });
});

//WOWの繰り返しアニメーション//

window.addEventListener('scroll', function (e) {
    if ($(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }
});

//スムーススクロール//
//aタグの先頭が# の場合、
$('a[href^="#"]').on("click", function (e) {
    //hrefの中身の属性を取得する//
    const id = $(this).attr("href");

    //IDの値が、#だけの場合htmlをターゲットにする//
    //IDの値が、#の後に続くものの時は、そのidの要素を指定してあげる//
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top;

    //html と body に対して、//
    $("html, body").animate(
        {
            scrollTop: position,
            //scrollTop: 0,// 一番上に戻る //
        },
        3000,  //1000で1秒//
        "swing" // swing だとゆっくりからだんだん早く linear だと一定の速さで//
    );
});

//トップに戻るボタンがスクロールされた時の表示//

$(window).on("scroll", function () {
    //トップから100pxスクロールしたら//
    if (100 < $(window).scrollTop()) {
        //出現させる//
        $('#js-page-top').addClass("is-show");
        //それ以外の時は、is-showを外して見えなくする//    
    } else {

        $('#js-page-top').removeClass("is-show");
    }
});
