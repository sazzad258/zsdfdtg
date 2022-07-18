$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("tabs-content").style.marginLeft = "320px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("tabs-content").style.marginLeft= "0";
}



$("#prooooo").click(function(){
  $("#mode").click(); 
  // return false;
});


$(document).ready(function(){
  $("#profile").click(function(){
    $(".profile").addClass("profile_active");
  });
});

$(document).ready(function(){
  $(".closebtn").click(function(){
    $(".profile").removeClass("profile_active");
  });
});