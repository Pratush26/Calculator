// Add all your JS here
const p = 22/7;
let string = ""
let output = document.getElementById("out");
let buttons = document.querySelectorAll('.btn')

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
   string = "";
   output.value = string;
  }
   else if(e.target.innerHTML =="%"){
   string = "";
   output.value = string;
  }
   else if(e.target.innerHTML =="^"){
   string = "";
   output.value = string;
  }
  else{
    string = string + e.target.innerHTML;
    output.value = string;
    }
  })
})