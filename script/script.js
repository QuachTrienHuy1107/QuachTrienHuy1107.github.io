/* $(document).ready(function(){
    window.onscroll = function(){
        console.info(document.documentElement.scrollTop);
        if(document.documentElement > 5 || document.body.scrollTop > 5){
            $("#product-submenu").hide();
        }
    }
}) */

window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    if(document.documentElement > 5 || document.body.scrollTop > 5){
       var s = document.getElementById("product-submenu");
       s.style.display = 'none';
    }
}

/* $(document).ready(function(){
    $('#search-btn').click(function(){
        $('#search-bar-class').toggleClass("search-bar");
        $('#overlay').toggleClass("overlay");
    })
    $('#overlay').click(function(){
        $('#search-bar-class').toggleClass("search-bar");
    })
}) */

/* window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200){
        off();
    }
}

function off(){
    overLay.style.display = "none";
}

function openSearch(){
    document.getElementById("search-bar-class").classList.add("search-bar","search-box");
    document.getElementById("overlay").classList.add("overlay");
}
function off(){
    document.getElementById("overlay").classList.remove("overlay");
    document.getElementById("search-bar-class").classList.remove("search-bar","search-box");
}
 */

