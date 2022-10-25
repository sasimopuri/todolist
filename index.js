let input=document.querySelector("#inputfeild");
let display=document.querySelector(".display");

document.querySelector("#add").onclick=()=>{
    if(input.value.length==0)
    {
        alert("Enter task")
    }
    else{
        display.innerHTML+=`<div class="display">
        <div dcontainer><span id="work">${input.value}</span>
        <button class="material-symbols-outlined">delete</button>
        </div></div>` 
        let alltasks=document.querySelectorAll(".material-symbols-outlined");
        for(let i=0;i<alltasks.length;i++)
        {
            alltasks[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }
        input.value='';

    }
}

