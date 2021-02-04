$(document).ready(function(){
    let click = $("#setCookie").click(function () {
        $.cookie("popup", "", {expires: 0, path: '/'});
        let date = new Date();
        date.setTime(date.getTime() + (60 * 1000));
        $.cookie("popup", "", {expires: date, path: '/'});
    });
     
    if ( $.cookie("popup") == null )
    {
    setTimeout(function(){
    $("#bg_popup").show();
    }, 3000)
    }
    else { $("#bg_popup").hide();
    }
    });