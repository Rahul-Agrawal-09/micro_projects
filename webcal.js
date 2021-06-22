const button=document.querySelectorAll(".col");
const box=document.querySelector(".display")
let str=""
// here % is the mod operator to give remainder
const operators=["/","*","+","-","%"];
let ans

const del=(s)=>{
    if (s==="" || s==="0" || s==="Invalid Syntax")
        return "";
    return (s.slice(0,-1));
}


const extract_operators=(s)=>{
    for (let i=0;i<s.length;i++){
        for (let j of operators){
            if ((j===s[i]) && (i===s.length-1)){
                ans="Invalid Syntax";
                return;
            }
        }
    }
    ans=eval(s);
    //console.log(ans);
    return ans;
}

const calculate=(event)=>{
    let p=event.toElement.innerText;
    if (p==="AC"){
        box.innerText=0;
        str=""
    }
    else if (p==="Del"){
        str=del(str);
    }
    else if (p==="="){
        box.innerText=extract_operators(str);
        str=String(ans);
    }
    else{
        str+=p;
        //console.log(str);
    }
    box.innerText=str;
    if (str==="")
        box.innerText=0;
}


for(let i=0;i<button.length;i++)
    button[i].addEventListener("click",calculate);