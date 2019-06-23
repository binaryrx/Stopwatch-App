/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */


// window.location.reload(true);

$( document ).ready((function() {

    // Carousel //
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop:true,
      autoplay:true,
      navigation:true,    
    });

    //Change background on mobile threshold.
    var x = window.matchMedia("(max-width: 768px)")
   
    
  
    // function myFunction(x) {
    //   if (x.matches) { // If media query matches
    //     $('.bg1').attr('src','images/mobile/mobile_bg.jpg');
    //     $('.bg2').attr('src','images/mobile/mobile_bg2.jpg');
    //     $('.bg3').attr('src','images/mobile/mobile_bg3.jpg');
    //     $('.bg4').attr('src','images/mobile/mobile_bg4.jpg');
    //     $('#submit').on('click',function(){
    //       $('.background').addClass('thanku');
    //       $('.formHead').css('display','none');
    //     });

    //     var elementPosition = function(idClass) {
    //       var element = $(idClass);
    //       var offset = element.offset();

    //       return {
    //           'top': offset.top,
    //           'right': offset.left + element.outerWidth(),
    //           'bottom': offset.top + element.outerHeight(),
    //           'left': offset.left,
    //       };
    //   };
    //   // console.log(elementPosition('.service:last-child'));
        
    //     $('.downArrow').click(function(){
    //       // console.log('hayyy');
    //       var header = $('#myHeader').height();
    //       // var jumpHere = $('#jumpHere').offset().top;
    //       backgroundBg = $('#secondBg').offset().top;
    //       var offset = backgroundBg - header;
    //       $('html, body').animate({scrollTop: offset}, '500','swing');

    //     });


        

    //   } else {
    //     $('.bg1').attr('src','images/desktop/bg.jpg');
    //     $('.bg2').attr('src','images/desktop/bg2.jpg');
    //     $('.bg3').attr('src','images/desktop/bg3.jpg');
    //     $('.bg4').attr('src','images/desktop/BG4.jpg');
    //     $('.background').removeClass('thanku');
    //     // $('.formHead').css('display','block');


    //     $('.downArrow').click(function(){
    //       // console.log('hayyy');
    //       positionabout = $('.downArrow').offset().top - $('#myHeader').height() + 250+'vh'; // Position of #about - nav height = correct position
    //       $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
    //     });

    //   }
    // }

      // x.addListener(myFunction)

      // myFunction(x)//trigger
  


      
  
   
  
    //                  //
    // checkbox logic   //
    //                  //
  
    // $('#checkme').attr("checked" , false);

    // $('#checkme').val(2);
    // $('.checkbox').on('click',function(){
    // //   console.log('clicked');
    //   if($('#checkme').attr('checked')){
    //     $('#checkme').attr("checked" , false);
    //     $('#checkme').val(2);
    //   }else{
    //     $('#checkme').attr("checked" , true);
    //     $('#checkme').val(0);
    //   }
    // });


    // Open/Close form mobile

    // $('#sendForm').on('click',function(){
    //     // console.log('clicked');
    //     $('#mobileFooter').fadeOut();
    //     $('#form').removeClass('hideform');
    //     $('#form').fadeIn();
    // });
    // $('.close').on('click',function(){
    //     // console.log('clicked');
    //     $('#mobileFooter').fadeIn();
    //     $('#form').removeClass('showform');
    //     $('#form').fadeOut();
    // });

}));


// $('#callme').on('click',function(){
//   dataLayer.push({'event': 'Phone'});
// });


//                                   //
//            LEAD SENDING           //
//                                   //


// GET parameters
var urlParams;
var match;
var pl = /\+/g;
var search = /([^&=]+)=?([^&]*)/g;
var validDate = /\b(19|20)\d\d\b/;

var decode = function (s) {
    return decodeURIComponent(s.replace(pl, " "));
}

var query = window.location.search.substring(1);

urlParams = {};
while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2]);
}

var fullName = urlParams['Fname'] || '';
var phone = urlParams['Phone'] || '';
var email = urlParams['Email'] || '';
var utm_source = urlParams['utm_source'] || '';
var utm_medium = urlParams['utm_medium'] || '';
var utm_campaign = urlParams['utm_campaign'] || '';
var utm_content = urlParams['utm_content'] || '';
var utm_term = urlParams['utm_term'] || '';

var checkbox = $('input[type="checkbox"]');
checkbox.val('לא');
checkbox.on('change', (function(){
    if($(this).is(':checked')) $(this).val('כן');
    else $(this).val('לא');
}));

var x = window.matchMedia("(max-width: 768px)")




// send to lider
function sendLead(destinationUrl,method,device){
  $('form').on('click',(function(e){
    // e.preventDefault();
  }));

    var str = $('form').serialize();  
    var pieces = str.split('=');
    var res = pieces.toString().replace(/&/g, "");
    var arr = res.split(',');
    // console.log(arr);
    // // console.log(arr[0]);
    // // console.log(arr[1]);
    // console.log(arr[2]);

    var crm = $('form').form({
        url: destinationUrl,
        method: method,
        done: function(data){
            $("#mainForm").fadeOut(250, (function(){
                $("#thanku").fadeIn(250); 
                // $('.formHead ').css('display','none');
            }));
            dataLayer.push({'event': 'Lead'});
            var x = window.matchMedia("(max-width: 768px)")
          


        }
    })
    .addParam({name: 'utm_source', value: utm_source})
    .addParam({name: 'utm_medium', value: utm_medium})
    .addParam({name: 'utm_campaign', value: utm_campaign})
    .addParam({name: 'utm_content', value: utm_content})
    .addParam({name: 'utm_term', value: utm_term})
    .addParam({name: 'reffo', value: document.location.href})
    .addParam({name: 'reffo2', value: document.referrer})
    .addParam({name: 'from', value: device})
    .addParam({name: 'campaignId', value: 921 })
    // .addParam({name: 'ProjectID', value: 7003 })
    // .addParam({name: 'Password', value: 'zxc050619' })
    // .addParam({name: 'MediaTitle ', value: utm_source })
    
    crm.addValidation('number', (function(value) {
        if(validDate.test(value)) return true;
        return false;
    }))
}


// $(window).resize(function(){
  if(window.mobilecheck()){
    sendLead('https://k.co.il/lider/savej','GET','mobile');
  }else{
    sendLead('https://k.co.il/lider/savej','GET','desktop');
  }
// });


// if(x.matches){
//   sendLead('http://lider.k.co.il/savej','GET','mobile');
//   sendLeadBmby('http://www.bmby.com/shared/AddClient/index.php/','mobile');
// }else{
//   sendLead('http://lider.k.co.il/savej','GET','desktop');
//   sendLeadBmby('http://www.bmby.com/shared/AddClient/index.php/','desktop');
// }



//send to zapier(and from zap to google sheets)


// $('.timestamp').val(localTime());


//Prevent Default for Hrefs

// window.location.href.split('#')[0]

//   function map_download(){
//   var link = document.createElement('a');
//     link.href = 'map.png';
//     link.download = 'Download.jpg';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };