$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.loginUp').click(function(){
        $('.LoginPopup').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.signUp').click(function(){
        $('.signUpPop').fadeIn();
        $('.overlay').fadeIn();
    });

     $('.closePop,.overlay').click(function(){
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });












    

});



// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});


// Accordion
$('.myaccordi>li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
//  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion


// Sticky Navigation
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.index-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
            

// Navigation Menu 
$(window).on('load', function() {
var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
$('ul.menu li a').each(function() {
    var hrefVal = $(this).attr('href');
    if (hrefVal == currentUrl) {
        $(this).removeClass('active');
        $(this).closest('li').addClass('active')
        $('ul.menu li.first').removeClass('active');
    }
});

});

// Tabbing JS
  $('[data-targetit]').on('click', function(e) {
  $(this).addClass('current');
  $(this).siblings().removeClass('current');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).fadeIn();
  $(".tab-slider").slick("setPosition");
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}

let showPopup = false;

$(window).on('beforeunload', function(e) {
  // Show the popup
  
  if (!showPopup) {
      // Show the custom popup and overlay
      $('.popup-default').show();
      $('.overlay').show();

      // Prevent the default unload behavior
      e.preventDefault();
      return '';
  }

});

$('.overlay').on('click', function() {
  // Hide the popup and overlay
  $('.overlay, .popup-default, .custom-layout').hide();
});

$('.popup-default .popup-close').on('click', function() {
  // Allow the unload behavior
  showPopup = true;
  window.location.reload(); // Simulate a reload to allow the page to close
});

$(document).on('click', '.custom-popupBtn', function(){
  $('.custom-layout').show();
  $('.overlay').show();
});

$('.custom-layout .popup-close').on('click', function() {
  $('.custom-layout').hide();
  $('.overlay').hide();
});


$(document).on('click', '.footer-formBtn', function(e){
    e.preventDefault();
    var gParent = $(this).parent().parent()

    var nameInput = gParent.find('.feildName');
    var emailInput = gParent.find('.feildEmail');
    var phoneInput = gParent.find('.feildPhone');

    var name = nameInput.val();
    var email = emailInput.val();
    var phone = phoneInput.val();

    if(!name) {
        nameInput.addClass('error');
        return
    }

    if(!email){
        nameInput.removeClass('error');
        emailInput.addClass('error');
        return
    }

    if(!phone){
        emailInput.removeClass('error');
        phoneInput.addClass('error');
        return
    }
    
    nameInput.removeClass('error');
    emailInput.removeClass('error');
    phoneInput.removeClass('error');

    $.ajax({
        url: "mail.php",
        method: 'POST',
        data: {
            action: 'submit-mail',
            Name : name,
            Email : email,
            Phone : phone
        },
        success: function (response) {
            console.log(response)
        }
    });

})










const newYearEl = document.getElementById("date");
const daysEl = document.getElementById("days");
const daysElCurr = daysEl.getElementsByClassName("curr");
const daysElNext = daysEl.getElementsByClassName("next");
const hoursEl = document.getElementById("hours");
const hoursElCurr = hoursEl.getElementsByClassName("curr");
const hoursElNext = hoursEl.getElementsByClassName("next");
const minsEl = document.getElementById("mins");
const minsElCurr = minsEl.getElementsByClassName("curr");
const minsElNext = minsEl.getElementsByClassName("next");
const secondsEl = document.getElementById("seconds");
const secondsElCurr = secondsEl.getElementsByClassName("curr");
const secondsElNext = secondsEl.getElementsByClassName("next");

const newYear = new Date().getFullYear() + 1;
let newYearTime = new Date("2024-06-20 13:30:00");
newYearTime = new Date(
  newYearTime.getTime() - new Date().getTimezoneOffset() * 60 * 1000
);

function updateAllCountdowns() {
  const dates = {
    current: {
      elements: [daysElCurr, hoursElCurr, minsElCurr, secondsElCurr],
      values: ["00", "00", "00", "00"]
    },
    next: {
      elements: [daysElNext, hoursElNext, minsElNext, secondsElNext],
      values: ["00", "00", "00", "00"]
    },
    general: {
      elements: [daysEl, hoursEl, minsEl, secondsEl]
    }
  };
  const currentDate = new Date();
  updateCountdown(dates.current, currentDate, true);
  const nextDate = new Date(
    currentDate.setSeconds(currentDate.getSeconds() + 1)
  );
  updateCountdown(dates.next, nextDate, false);
  for (let i = 0; i < dates.current.values.length; i++) {
    if (dates.current.values[i] - dates.next.values[i] !== 0) {
      dates.general.elements[i].classList.remove("flip");
    }
    setTimeout(function () {
      dates.general.elements[i].classList.add("flip");
    }, 50);
  }
}

function updateCountdown(dates, currentTime, isCurrent) {
  const totalSeconds = (newYearTime - currentTime) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (currentTime.getMonth() == 0 && currentTime.getDate() <= 2) {
    dates.values = ["00", "00", "00", "00"];
    for (let i = 0; i < dates.elements.length; i++) {
      for (let j = 0; j < daysElCurr.length; j++) {
        dates.elements[i][j].innerHTML = dates.values[i];
        if (isCurrent) {
          newYearEl.innerHTML = newYear - 1;
        }
      }
    }

    return;
  }

  dates.values = [
    days,
    formatTime(hours),
    formatTime(mins),
    formatTime(seconds)
  ];

  for (let i = 0; i < dates.elements.length; i++) {
    for (let j = 0; j < daysElCurr.length; j++) {
      dates.elements[i][j].innerHTML = dates.values[i];
    }
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateAllCountdowns();
setInterval(updateAllCountdowns, 1000);
