//function for navbar events
const popout=document.querySelector(".pop");
const navSlide=()=>{
    const burgers=document.querySelector('.burger');
    const nav=document.querySelector('.navitems');
    const navLinks=document.querySelector('.navitems li');
    const images=document.querySelector('.images');
    burgers.addEventListener('click',()=>{
        images.classList.toggle('images2');
        nav.classList.toggle('nav-active');  
    });

    }
    //function for sending mails
            function sendEmail() {
                const name=document.querySelector('#fname').value;
                const native=document.querySelector('#locate').value;
                const destination=document.querySelector("#coun").value;
                const message=document.querySelector('#msg').value;
                const mail=document.querySelector("#mail").value;
                const mobile=document.querySelector('#num').value;
                const subj=name+" wants to go to "+destination;
                const body='Full Name: '+name+'<br>Current Location: '+native+'<br> Destination: '+destination+'<br> Email: '+mail+'<br> Mobile: '+mobile+'<br> Message: '+message;
                const matter="Thanks " +name+ ", our team will contact you soon!"; //pop out box information
                 document.querySelector(".pop h3").innerText=matter;
              Email.send({
                Host: "smtp.gmail.com",
                Username: "@gmail.com",
                Password: "",
                To: "@gmail.com",
                From: "@gmail.com",
                Subject: subj,
                Body: body,
              })
            
             .then(function (message) {
                  if(message=='OK')
                  {
                    popOnSubmit();
                      
                  }
                  else
                  alert("not sent"+message);
                });
      
            }
            //Disabled "pagesource" viewable events
        /*    window.addEventListener('keydown', function(e) { 
                if(e.keyCode==123)
                e.preventDefault();
            },false);
            window.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                }, false);*/
  //pop out box for alerting about submission
const sub=document.getElementById("sub");
const popOnSubmit=()=> {
     sub.style.visibility='hidden';
     popout.classList.toggle("pop1");
     popout.scrollIntoView();
}
const buttonListener=()=>{
const buttons=document.querySelector(".pop button");
buttons.addEventListener("click",()=>{
popout.classList.toggle("pop1");
sub.style.visibility='visible';
});
} 
navSlide(); 
buttonListener();        
//Designed and developed by Saiteja Borra