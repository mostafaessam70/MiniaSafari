
$(document).ready(function(){
    
/* slider using jquery */
  window.onload=setInterval(function() {
        moveRight();
    }, 8000);

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 3000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 3000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };    
    
/* btn show city */
  //  $(".showcity").click(function(){ 
  //   $(".tablinks").slideToggle(200);   
  // }); 
    
    
//show more btn
    
    $(".moretextbtn").click(function(){
       $(".extra-info").slideToggle(1000);
       
       });

$("#show-nave").click(function(){
  $(".btnLink").slideToggle(800);
  $(".btnLink").css({
    float:"none",
    display:"block",
    textAlign:"left"
  });
});

    });  


function opennav(event,btnName) 
{
  var i, btnContent, btnLink;
  btnContent = document.getElementsByClassName("btnContent");
  for (i = 0; i < btnContent.length; i++) {
    btnContent[i].style.display = "none";
  }
    
  btnLink = document.getElementsByClassName("btnLink");
  for (i = 0; i < btnLink.length; i++) {
    btnLink[i].className = btnLink[i].className.replace(" active", "");
  }
    
  document.getElementById(btnName).style.display = "block";
  event.currentTarget.className += " active";
}
   document.getElementById("default").click();





/* aside links for cities*/

function openCity(event, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




/* verfying contact form */
var username=document.getElementById("name"),
    mail=document.getElementById("mail"),
    city=document.getElementById("city"),
    message=document.getElementById("message");
 
//name of client on focus
  username.onfocus=function(){
     username.removeAttribute("placeholder"); 
     username.style.border="5px solid #2196f3";
};

//name of client onblur
  username.onblur=function(){
         username.setAttribute("placeholder","Enter Your Name");
         username.style.border="none";
     };

//mail of client on focus
  mail.onfocus=function(){
     mail.removeAttribute("placeholder"); 
     mail.style.border="5px solid #2196f3";
};

//mail of client onblur
  mail.onblur=function(){
         mail.setAttribute("placeholder","Enter Your Mail");
         mail.style.border="none";
     };



//city of client on focus
  city.onfocus=function(){
     city.removeAttribute("placeholder"); 
     city.style.border="5px solid #2196f3";
};

//city of client onblur
  city.onblur=function(){
         city.setAttribute("placeholder","Enter Your City");
        city.style.border="none";
     };



//scroll button to top screen

    var scrolbtn=document.getElementById("topbtn");
window.onscroll=function(){
    var xsize=window.screen.width;
    var y = document.querySelectorAll("a.btnLink");

    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 )
    {
      //make the navbar fixed top on scroll
       document.getElementById("navbar").style.position="fixed";
       document.getElementById("navbar").style.top="0px";
       document.getElementById("navbar").style.zIndex="1";
       document.getElementById("navbar").style.width="100%";
       //apear the button frome the right side
        scrolbtn.style.display="block";
        scrolbtn.style.WebkitAnimation="button 3s";
        scrolbtn.style.animation="button 3s";
    } 
      
    
    else{
        document.getElementById("navbar").style.position="relative";
        scrolbtn.style.display="none";

    }
};



//go to top screen
scrolbtn.onclick= function()
{
  window.scrollTo(0,0);  
};

//send data of book form
//this conditions make the date diabled in the past for going date
var currentDate = new Date();
var day = currentDate.getDate(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear();

  if(month < 10 )
  {
      month="0"+month;
  }

  if(day < 10)
  {
      day="0"+day; 
  }
var currentDay = year+"-"+month+"-"+day;
var godate = document.getElementById("godate");
 godate.setAttribute("min",currentDay);


//basic validation//
function formvalidation(){

    //validation for go blace 
    var fromReg=/[a-zA-Z][^#&*<>\"~;$^%{}?]/gi;
    if(document.bookform.from.value==" " || !fromReg.test(document.bookform.from.value))
    {
        alert("pleas,enetr valid leaving place!");
        document.bookform.from.focus();
        return false;
    }
    //validation for back blace
    var toReg=/[a-zA-Z][^#&<>\"~;*$^%{}?]/g;
    if(document.bookform.to.value==" " || !toReg.test(document.bookform.to.value))
       {
        alert("pleas,enetr valid arrivale place!");
        document.bookform.to.focus();
        return false;
       }

    //validation for go date
    if(document.bookform.go.value==false)
    {  
      alert("choose travel date!");
        document.bookform.go.focus();
        return false;   
    }

   
   //validation for back date  
    if(document.bookform.back1.value==false)
    {
      alert("choose comeback date!");
        document.bookform.back1.focus();
        return false;   
    
    }
    //validation for adult
    if(document.bookform.Adult.value==""){
        alert("pleas,enter number of person!");
        document.bookform.Adult.focus();
        return false;
    }
    //validation for person name
    var nameReg=/[a-zA-Z][^[0-9]#&*<>\"~;$%{}?]/gi;
    if(document.bookform.name.value=="" || !nameReg.test(document.bookform.name.value)){
        alert("pleas,enter valid name!");
        document.bookform.name.focus();
        return false;
    }
    //validation for id 
    var IDReg=/[0-9][^[a-zA-Z]#&*<>\"~;$^%{}?]/g;
    if(document.bookform.id.value=="" ||!IDReg.test(document.bookform.id.value)){
        alert("pleas,enter your valid ID!");
        document.bookform.id.focus();
        return false;
    }
    //validation for phone
    var phoneReg=/[0-9][^[a-zA-Z]#&*<>\"~;$^%{}?]/g;
    if(document.bookform.phone.value==""||!phoneReg.test(document.bookform.phone.value)){
        alert("pleas,enter valid phone!");
        document.bookform.phone.focus();
        return false;
    }
    //validation for mail
    var maileReg=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if(document.bookform.mail.value=="" ||!maileReg.test(document.bookform.mail.value))
    {
        alert("pleas,enter valid your mail!");
        document.bookform.mail.focus();
        return false;
    }
    //validation service
    if(document.bookform.service.value==false ){
        alert("pleas,choose your service level!");
        document.bookform.service.focus();
        return false;
    }
    //validation for number of rooms
    if(document.bookform.rooms.value==false ||document.bookform.rooms.value<1){
        alert("pleas,choose number of rooms!");
        document.bookform.rooms.focus();
        return false;
    }

    //confirm data sending.
    var senddata=confirm("Are you shure that all information in the form are true ?");
    if(senddata==true)
    {
        
        alert("Your Data is Sended,Thank You.");
    }
    else{
        document.bookform.from.focus();
        return false;
    }

    return true;
}


//btn more for luxor
function changtext()
{
  var btnmore=document.getElementById("lux");
if(btnmore.innerHTML ==" Read Less") 
{
    btnmore.innerHTML=" Read More";
    btnmore.className=btnmore.className.replace("fa-arrow-up","fa-arrow-down");
} 
  
  else {
     btnmore.innerHTML=" Read Less"; 
     btnmore.className=btnmore.className.replace("fa-arrow-down","fa-arrow-up");
      }
}

//btn more for suhage
function changtextsuh()
{
  var btnmore=document.getElementById("Suh");
if(btnmore.innerHTML ==" Read Less") 
{
    btnmore.innerHTML=" Read More";
    btnmore.className=btnmore.className.replace("fa-arrow-up","fa-arrow-down");
} 
  
  else {
     btnmore.innerHTML=" Read Less"; 
     btnmore.className=btnmore.className.replace("fa-arrow-down","fa-arrow-up");
      }
}

//btn more for asute
function changtextasu()
{
  var btnmore=document.getElementById("asu");
if(btnmore.innerHTML ==" Read Less") 
{
    btnmore.innerHTML=" Read More";
    btnmore.className=btnmore.className.replace("fa-arrow-up","fa-arrow-down");
} 
  
  else {
     btnmore.innerHTML=" Read Less"; 
     btnmore.className=btnmore.className.replace("fa-arrow-down","fa-arrow-up");
      }
}


