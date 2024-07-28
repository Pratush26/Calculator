// Add all your JS here
const p = Math.PI;
let string = ""
let output = document.getElementById("out");
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(e)=>{
  if(e.target.innerHTML =="="){
    string = eval(string);
    output.value = string;
  }
  else if(e.target.innerHTML =="AC"){
   string = "";
   output.value = string;
  }
  else if(e.target.innerHTML =="pi"){
   string = string + p;
   output.value = string;
  }
   else if(e.target.innerHTML =="DEL"){
   string = string.substring(0,string.length-1);
   output.value = string;
  }
   else if(e.target.innerHTML =="root"){
   let s = prompt("Enter the value of that's root value you wanted")
   string = string + Math.sqrt(s);
   output.value = string;
  }
   else if(e.target.innerHTML =="^"){
   let b = prompt("Enter the value of power: ")
   function math(a,b){
   return Math.pow(a,b);
  }
   re = math(string,b);
   console.log(re)
   output.value = re;
  }
  else{
    string = string + e.target.innerHTML;
    output.value = string;
    }
  })
})

//darkmode
function DarkMode(){
  let b = document.body;
  b.classList.toggle("body2");
}
