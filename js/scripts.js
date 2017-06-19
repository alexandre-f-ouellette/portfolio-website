//Functions run out of Document Ready
// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Google Maps
var map;
function initMap(){
  var myCoords = {lat:45.4214, lng:-75.6919};

  map = new google.maps.Map(document.getElementById('gmap'),{
    center: myCoords,
    zoom: 11
  });

  var image = {
    url: 'img/icons/my-8bit-face-40.png',
    size: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };

  var marker = new google.maps.Marker({
    position: {lat:45.4532473, lng:-75.6550977},
    map: map,
    icon: image,
    title: "Here I am!",
    animation: google.maps.Animation.DROP,
  });
};

$(document).ready(function() {
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top - 50
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  //Stellar
  $.stellar();

  //Tooltips
  $(function () {
    $('#bilingual-tooltip').tooltip();
    $('#contact-tooltip').tooltip();
    $('#writing-tooltip').tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Character count for message box
  $(".message-box").on('keyup', function () {

    console.log("Keyup event triggered...");

    // Get character count
    var charCount = $(".message-box").val().length;

    // Log character count
    console.log(charCount);

    // Append to the DOM
    $('#char-count').html("Character count: " + charCount);

    // Change color if longer than 50 characters
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "white");
    };
  });

  // Behavior on contact form submit
  $("#contact-form-button").on("click", function() {
    var name = $("#input-name").val();
    var phoneNumber = $("#input-tel").val();
    var email = $("#input-email").val();
    var message = $("#input-message").val();

    if(message == "") {
      $("#input-message").css("border", "2px solid red");
    } else {

      validationMessage = "Thanks for your message " + name + "! <br>" + "Here is what you sent us:<br><br> <u>Email:</u> " + email + "<br>" + "<u>Phone Number:</u> " + phoneNumber + "<br>" + "<u>Message:</u><br>" + message;

      $("#visible-comment").html(validationMessage);

      $(".contact-form-labels").hide();
      $("#input-name").hide();
      $("#input-tel").hide();
      $("#input-email").hide();
      $(".message-box").hide();
    };

    return false;
  });

  // work section
  for(var i=0; i < works.length; ++i){
    $('.carousel-indicators').append('\
      <li data-target="#carousel-example-generic" data-slide-to="' + i + '" ' + (i === 0 ? 'class="active"' : "") + '></li>\
    ');

    $('.carousel-inner').append('\
      <div class="item' + (i === 0 ? " active" : "") + '">\
        <a href="' + works[i].url + '" class="work-img">\
          <img src="' + works[i].pic + '" alt="' + works[i].title + '">\
          <div class="carousel-caption">\
            <h3 class="info">' + works[i].title + '</h3>\
          </div>\
        </a>\
      </div>');

    var images = $('#projects img');

    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };

  $(".item")
    .mouseenter( function() {
      $(".info", this).show();
    })
    .mouseleave( function() {
      $(".info", this).hide();
    });
});
