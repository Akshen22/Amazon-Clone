#previously we couldn't see the output in the console, it used to be: undefined
#so, I will use return!

a) function Hello(age, address) 
{
  var name=prompt("What is your name");
  age=age/1.5;
  alert("Hello "+name+"!"+" Your age is: "+age+" & Your address is: "+address);  
  return age;
}

Hello(24, "Mumbai");

b) var: saves data!
var dogyears= Hello(24,"Mumbai")
#whenever will write dog-years, will get answer 16!
