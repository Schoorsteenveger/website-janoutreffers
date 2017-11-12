
// Google Maps with eventlistner zoom on clickfunction
function initMap() {
  var myLatlng = {lat:52.36277, lng:4.8606646};
  var data = "It finally works! Except for this thing to zoom back after 3 seconds...";
  var infowindow = new google.maps.InfoWindow({
      content: data
    });

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Feel welcome and click this marker...'
  });

  map.addListener('center_changed', function() {
  // 3 seconds after the center of the map has changed, pan back to the
  // marker.
  window.setTimeout(function() {
    map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(17);
    map.setCenter(marker.getPosition());
    infowindow.open(map,marker);
    });  
};

// Twitter
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if (!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);
  }}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.8&appId=511153102368492";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
    });

    return false;    
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();

  });

  $(function () {
    $('#item1').tooltip();

  });

  // Button Show input 
  $(".button").on("click", function() {
  console.log("clicked");  ;
  var comment = $(".message-box").val();  
  console.log(comment);

  $("#visible-comment").html(comment);

  // Background color messagebox
  $(".message-box").css('background-color', '#ffdacc');

  // Border red or hide
  if($(".message-box").val() == 0) {  
    $(".message-box").css("border-color", "red");
    } else {
    $(".message-box").hide();
    }

    return false;
  });

  // Char counter
  var charCount;  
  $(".message-box").on("keyup", function() {
    console.log("keyup happened");

    var textlength = 3;  
    var text = "string";  
    charCount = $(".message-box").val().length;

    console.log(charCount);  
    $("#char-count").html(charCount);

    if(charCount > 50) {  
    $("#char-count").css("color", "red");
      } else {
    $("#char-count").css("color", "green");
      };
  });

  //work section
  for(var i = 0; i < works.length; ++i ) { 
    $("#work").append("\
      <div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>\
        <a href='" + works[i].url + "' target='_blank' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info'> <p class='proj-title'>Inspiration</p> " + works[i].title + " </span>\
        </a>\
      </div>\
  ");

  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "10px solid CadetBlue");
  } else {
    $(images[i]).css("border", "10px solid BurlyWood");
    };
  };

  // mouse Hover
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

});




