

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Successfully");
        window.location.replace("map2.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}




