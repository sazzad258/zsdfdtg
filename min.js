// jQry
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$("a.brows").click(function(){
  $("input.second").trigger ('click');
});
$("i#sent").click(function(){
  $("input.submit").trigger ('click');
});


$(".show_price").click(function(){
  
})


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


$("#hide").click(function(){
  $("#panel").hide();
});

// javaScript

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("massage_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}