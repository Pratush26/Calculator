// Add all your JS here
const p = Math.PI;
let string = ""
let output = document.getElementById("out");
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(e)=>{
  if(e.target.innerHTML =="="){
    try{
     string = eval(string);
     output.value = string;
    }
    catch(err){
     output.value = "Error occurred" 
    }
  }
  else if(e.target.innerHTML =="AC"){
   output.value = string = "";
  }
  else if(e.target.innerHTML =="pi"){
   output.value = string += p;
  }
   else if(e.target.innerHTML =="DEL"){
   string = string.substring(0,string.length-1);
   output.value = string;
  }
   else if(e.target.innerHTML =="root"){
   let s = prompt("Enter the value of that's root value you wanted")
   output.value = string += Math.sqrt(s);
  }
   else if(e.target.innerHTML =="^"){
   let b = prompt("Enter the value of power: ")
   function math(a,b){
   return Math.pow(a,b);
  }
   re = math(string,b);
   output.value = re;
  }
  else{
    output.value = string += e.target.innerHTML;
    }
  })
})

//darkmode
function DarkMode(){
  let b = document.body;
  b.classList.toggle("body2");
}
