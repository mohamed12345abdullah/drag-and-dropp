
// console.log("run js")

// 

const btn=document.getElementById("btn");
const inp=document.getElementById("inp");
const boxs=document.querySelectorAll(".box");
var items;
var drag;
// var  targetBox;

btn.addEventListener("click",()=>{// 
    if(inp.value!=""){// check if the input is empty or not
    console.log("run btn")
  

    boxs[0].innerHTML+=`
    <div class="item" draggable="true"  > ${inp.value} </div>
    `;  //add elemntin the box1
    inp.value=""; // delete value from input text
    }
    else{ window.alert("enter your data")}
    items=document.querySelectorAll(".item"); //create array from element has class item
    // console.log(items[0]);
    items.forEach(e => {
        e.addEventListener("dragstart",function(){
      // add event and store element that dragged in variable drag
            drag=this;
            e.style.opacity=0.1;
            // console.log(drag);

        })
        e.addEventListener("dragend",function(){
   
            e.style.opacity=1;
            

        })
    });
})



// items[0].addEventListener("click",function(){
//     console.log("dra"); 
// })

boxs.forEach(box=>{  // add event drag over for all boxes 
    box.addEventListener("dragover",(e)=>{
        e.preventDefault(); //prevent run dragleve after end dragover
        // console.log(box);
        console.log("over");
        // targetBox=box;
     
        box.style.background="rgb(34, 104, 235)";  //change background to box 
  
        
        // console.log(targetBox);
        
    })
  
    
    box.addEventListener("dragleave",()=>{
        

        // add event drageleave to return background when leave 
        box.style.background="  white ";
        // targetBox=" ";

       
  
        console.log("leve");
        // console.log(targetBox);
    })

    box.addEventListener("drop",()=>{
        console.log("drop")
        box.append(drag)
        box.style.background="  white ";
    })




//===========================================
 //fun darg end for boxes its for test another method with store the box draged in targetbox variable

    // box.addEventListener("dragend",()=>{
    //     // box.default(none);
    //     console.log("end");
    //     console.log(targetBox);
    //     console.log(drag);
    //     targetBox.append(drag);
    //     drag="";
    //     targetBox="";

    //     boxs.forEach(b=>{
    //         b.style.background="  rgb(34, 104, 235)";
    //     })

    //     // console.log("end");
    // })

})


// boxs.forEach(box=>{
   
// })


