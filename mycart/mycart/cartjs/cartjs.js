function dropfunction() {
  document.getElementById("userdropdown").classList.toggle("show");
}

function checkpassword()
{
  if(document.getElementById("pwd1")!=document.getElementById("pwd2"))
  {
     alert("password mismatch");
  }
}

function enabledone()
{
   if(document.getElementById("agreement").checked)
   {
       document.getElementById("done").disabled=false; 
   }
   else
   {
       document.getElementById("done").disabled=true; 
   }
}

function enablebook()
{
       document.getElementById("b1").disabled=false; 
	   document.getElementById("b1").disabled=false; 
	   document.getElementById("b1").disabled=false; 
}