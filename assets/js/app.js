

window.onload = function(){ 
    particlesJS('header-text',
  {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 1100
      }
    },
    "color": {
      "value": "#fafafa"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 140,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top-right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

particlesJS('particles-js-2',
 {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 480.5118091298284
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 1,
        "color": "#eaf08f"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9059278143890204,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 9,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);    
}
var bg_d = false;
$("#header-span-text").hover(function(){
    if(!bg_d){
    $("#img-filter").removeClass("header-cover");    
    $("#img-filter").addClass("header-bg");
    $(this).removeClass("header-text-n");
    $(this).addClass("header-highlight-text");
    bg_d = true;        
    }
})
$('#header-span-text').mouseleave(function(){
    if(bg_d){
    $('#img-filter').removeClass("header-bg");
    $('#img-filter').addClass("header-cover");
    $(this).removeClass("header-highlight-text");
    $(this).addClass("header-text-n");
    bg_d = false;
    }
})
$("#header-span-text-2").hover(function(){
    if(!bg_d){    
    $("#img-filter").removeClass("header-cover");    
    $("#img-filter").addClass("header-bg");
    $(this).removeClass("header-text-n");
    $(this).addClass("header-highlight-text");
    bg_d = true;
    }
})
$('#header-span-text-2').mouseleave(function(){
    if(bg_d){
    $('#img-filter').removeClass("header-bg");
    $('#img-filter').addClass("header-cover");
    $(this).removeClass("header-highlight-text");
    $(this).addClass("header-text-n");
    bg_d = false;
    }
})
$("#next-button").click(function(){
    $("#space").animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
})
$("#next-intro").click(function(){
    $(".about-wrapper").animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
})
var id = false;
var v = 0;
$("#activate-intro").click(function(){
    if(v<4){
    executeFrame();
    executeFrame();
    v+=2;}
    if(!id){
        $("#activate-intro").html("Deactivate")
        $("#activate-intro").css({"text-align":"center"});
        $("#idcard").css({"background":"url(ID-Card-4-3.gif)","background-size":"cover"})
        id = true;
        setTimeout(function(){
            $("#about-1").css({"background":"url(Call_Out_012-A-3.gif)","background-size":"cover"});
        },3000);
        setTimeout(function(){
            $("#learn-1").css({"background":"url(learn-2.gif)","background-size":"cover"});
        },6000);
        setTimeout(function(){
            $("#creativity").css({"background":"url(creativity.gif)","background-size":"cover"});
        },8500);
        setTimeout(function(){
            $("#beginner").css({"background":"url(beginner-2.gif)","background-size":"cover"});
        },9900);
    }
    else{
        $("#learn-1").css({"background":"none","background-size":"cover"});
        $("#about-1").css({"background":"none","background-size":"cover"});
        $("#idcard").css({"background":"none","background-size":"cover"});
        $("#creativity").css({"background":"none","background-size":"cover"});
        $("#beginner").css({"background":"none","background-size":"cover"});
                id = false;
        $("#activate-intro").html("Activate");
    }
    })
var act_hov = false;
$("#activate-intro").hover(function(){
    if(!act_hov){
        $("#activate-intro").css({"background":"url(Special-Gadget-16-2.gif)","background-size":"cover"})
        act_hov = true;
    } else {
        $("#activate-intro").css({"background":"none","background-size":"cover"})
        act_hov = false;
    }
    })
$("#watducks").click(function(){
    window.location="/bot.html"
})
$("#modal-activate").html("Learn More")
// while(true){
//     for (var i = 0; i < 3; i++){
//         setTimeout(function(){
//             if(i == 0){
//             $("#next-font-3").removeClass("active");
//             $("#next-font-3").addClass("inactive");
//         } else {
//             $("#next-font-" + i-1).removeClass("active");
//             $("#next-font-"+ i-1).addClass("inactive");
//         }
//         $("#next-font-"+i).removeClass("inactive");
//         $("#next-font-"+i).addClass("active");
//         },i*500);
// }
// }