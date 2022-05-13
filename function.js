var tasks=[];
function myFunction(){
    let a = document.getElementById("input-task");
    tasks.push(a.value);
    // alert(a.value);
    let temp = document.createElement("p");
    temp.id=`p+${a.value}`;
    temp.innerHTML = 
    `<span id="span+${a.value}">${a.value}</span>
    <input type="checkbox" name= "" id="${a.value}" style="width:15px;height:15px;margin:auto 10px;" onclick="inputCheck(event)"/> 
    <img src="./bin.png" alt="" style="width:20px;height:20px;" id = "img+${a.value}" onclick="deleteTask('${temp.id}',${a.value})"/>
    `;
        
    document.getElementById("block1").appendChild(temp);  
    // document.getElementById("task-completed").innerHTML = "<hr><p>Do you want to keep 'tasks' which are completed at the end ? </p><input type='checkbox' name='' id='items-arrange' onclick='arrangeItems()'/><span>yes</span>"
    
}
function inputCheck(e){
    let check = document.getElementById(e.target.id);
    let a = document.getElementById("input-task");

    // alert("true");
    // console.log(check);
    if(check.checked){
        let t = document.getElementById(`span+${e.target.id}`);
        t.style="text-decoration : line-through"
        //console.log(t);
        //console.log("checked");
    }
    else{
        let t = document.getElementById(`span+${e.target.id}`);
        t.style="text-decoration : none;"
        // console.log("not checked");
    }
}
function deleteTask(tempId,val){
    console.log(val)
    // document.getElementById(`${tempId}`).innerHTML = "";
    document.getElementById(`${tempId}`).remove();
}
// let a  = document.getElementsByTagName("p");
// console.log(a.length);
// let p = document.getElementById("items-arrange");
// p.addEventListener('click',function(){
//     alert("true");
// })
// if(p.checked)alert("true")
// else alert("false")
// var end_tasks=[];
// function arrangeItems(){
//     let c = 0;
//     alert("its working");
//     let a = document.getElementsByTagName("input");
//     // console.log(a[0],a[a.length-1])
//     for(let i =1;i<a.length-1;i++){
//         c++;
//         if(a[i].checked){
//             // c++;
//             end_tasks.push(document.getElementById(`p+${a[i].id}`));
//             // alert(document.getElementById(`p+${a[i].id}`));
//             document.getElementById(`p+${a[i].id}`).remove();
//         }
//     }
//     console.log(c,end_tasks);
    
// }

// if(document.getElementsByTagName("img")){
//     document.getElementById("task-completed").style["display"] = "block";
// }