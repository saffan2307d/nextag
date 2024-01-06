function sgn(){
    var uid= document.getElementById("username").value;
    var pw=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var db = document.getElementById("dob").value;

    var user = localStorage.setItem("uid", uid) ;
    var pass = localStorage.setItem("pw" , pw);
    var em =localStorage.setItem("email" , email);
    var daob = localStorage.setItem("db", db);

    
}
    function lgn(){
        var email=document.getElementById("email").value;
        var pw=document.getElementById("password").value;
    
        var em =localStorage.setItem("email" , email);
        var pass = localStorage.setItem("pw" , pw);

       
        var pass = localStorage.getItem("pw" , pw);
        var em =localStorage.getItem("email" , email);
       
    
    }
    function cont(){
        var uid= document.getElementById("username").value;
        var pw=document.getElementById("password").value;
        var email=document.getElementById("email").value;
        var textareaa = document.getElementById("ta").value;
    
        var user = localStorage.setItem("uid", uid) ;
        var pass = localStorage.setItem("pw" , pw);
        var em =localStorage.setItem("email" , email);
        var tat = localStorage.setItem("textareaa", textareaa);
    
        alert("Your Message Has Been Submitted!")
    }
    function adtc(){
        alert("Your Order Has Been Placed And Will Be Delivered To You In 2 to 3 days. kindly send us your address in message section with name email and password in our contact form available on contact page. Thanks!!  ")
    }

    function chf(){
        alert("We have sent you an email of you old password in your account. kindly check it there.")
      }