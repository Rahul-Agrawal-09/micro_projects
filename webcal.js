const button=document.querySelectorAll(".col");
const box=document.querySelector(".display")
let str=""
const operators=["/","*","+","-","%"];
let operators_in_expression={}
let ans


// const solve_expression=(op)=>{
//     let arr=[];
//     let start=0;
//     let end=0;
//     for(var item in op){
//         end=op[item];
//         arr.push(Number(str.slice(start,end)));
//         start=end+1;
//     }
//     if (start===str.length)
//         return console.error("error");
//     arr.push(Number(str.slice(start)));
//     console.log(arr);
//     console.log(eval(str))
// }

const extract_operators=(s)=>{
    for (let i=0;i<s.length;i++){
        for (let j of operators){
            if ((j===s[i]) && (i===s.length-1)){
                return console.error("error");
            }
        }
    }
    console.log(operators_in_expression);
    ans=eval(s);
    console.log(ans);
    return ans;
    //solve_expression(operators_in_expression);
}

const calculate=(event)=>{
    let p=event.toElement.innerText;
    if (p==="AC"){
        box.innerText=0;
        str=""
        return;
    }
    else if (p==="Del"){
        del();
    }
    else if (p==="="){
        box.innerText=extract_operators(str);
        str=String(ans);
        return;
    }
    else{
        str+=p;
        console.log(str);
    }
    box.innerText=str;
}


for(let i=0;i<button.length;i++)
    button[i].addEventListener("click",calculate);