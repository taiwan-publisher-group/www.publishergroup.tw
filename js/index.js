var $win = $(window);
var $ww = $win.innerWidth();
var sId = tempID = 1;
var lineMsg = "【2019 TPG Forum 免費報名中，邀您一同探討最新Programmatic趨勢發展，機會難得，請把握機會報名。】";
var shareUrl = "https://www.publishergroup.tw/";
var len = 'tw';

$(document).ready(function() {
    $('#speakers-'+sId).fadeIn();

    $('body .btn').on('click', function(event){
        var dat = $(this).data();
        switch(dat.act) {
            case 'swiper':
                swiperSpeakers(dat.type);
                break;
            case 'share':
                if(dat.type == 'line') sendtoline();
                if(dat.type == 'fb') fbShare();
                break;
            case 'len':
                lenAction();
                break;
        }
    });

    $win.on('resize', function() {
        $ww = $win.innerWidth();
        if($ww <= 768) {
            $('#speakers-'+sId).fadeIn();
        }
    }).resize();

    $('#KV .btn-box a.about, #S1 .btn-box a.about').on('click', function(event){
        var _href = ($(this).find('a').attr('href'))? $(this).find('a').attr('href') : $(this).attr('href');
        if($ww <= 768) {
            $('html, body').animate({scrollTop: ($(_href).offset().top) + parseInt($('#S3 .container').css("paddingTop")) - 60 }, 400);
        } else {
            $('html, body').animate({scrollTop: ($(_href).offset().top) + parseInt($('#S3 .container').css("paddingTop")) /2 }, 400);
        }
    });
});

function swiperSpeakers(type) {
    if(type == "left") tempID = sId - 1;
    if(type == "right") tempID = sId + 1;
    if( tempID > 0 && tempID <= 2 ) {
        $('#speakers-'+sId).fadeOut(0);
        $('#speakers-'+tempID).fadeIn(0);
        $('.arrow-l, .arrow-r').fadeIn(0);
        sId = tempID;
    }
    if(sId == 1) {$('.arrow-l').fadeOut(0)}
    if(sId == 2) {$('.arrow-r').fadeOut(0)}
}

function sendtoline(){
	var link = "http://line.naver.jp/R/msg/text/?";
	link += encodeURIComponent(lineMsg) + "%0D%0A" + encodeURIComponent(shareUrl);
    window.open(link, '_blank');
	return false;
}

function fbShare() {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: shareUrl,
    }, function(response){});
}

function lenAction() {
    if(len == "en") {
        $('.en').fadeOut(0);
        len = "tw";
    } else {
        $('.tw').fadeOut(0);
        len = "en";
    }
    $('.'+len).fadeIn(0);
}
