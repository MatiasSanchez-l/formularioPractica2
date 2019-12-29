var loginn = document.getElementById("login");
var registerr = document.getElementById("register");
var btn = document.getElementById("btn");

function register()
{
    loginn.style.left = "-400px";
    registerr.style.left = "50px";
    btn.style.left = "110px";
}

function login()
{
    loginn.style.left = "50px";
    registerr.style.left = "450px";
    btn.style.left = "0px";
}