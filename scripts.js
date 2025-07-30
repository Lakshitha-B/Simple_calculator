const buttons=document.querySelectorAll("button");
const result=document.getElementById("result");
let input="";
buttons.forEach(button=>{button.addEventListener("click",()=>{
const value=button.textContent;
if(value==="AC"){
input="";
result.value="";
}
else if(value==="="){
    result.value=eval(input);
    input=result.value;
}
else{
    input+=value;
    result.value=input;
}})

});