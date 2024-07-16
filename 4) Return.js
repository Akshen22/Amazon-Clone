#previously we couldn't see output in the console, it used to be:undefended 

function Hello(age, address) 
{
  var name=prompt("What is your name");
  age=age/1.5;
  alert("Hello "+name+"!"+" Your age is: "+age+" & Your address is: "+address);  
  return age;
}

Hello(24, "Mumbai");
