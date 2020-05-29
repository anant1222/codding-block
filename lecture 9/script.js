$(()=>{
     
   let newtask=$('#newtask');
   let addtask=$('#addtask');
   let tasklist=$('#tasklist')

   

addtask.click(()=>{
   tasklist.append($(`<li>`).text(newtask.val()))
    newtask.val('');
    
})

// let addtask=document.getElementById('addtask');

// addtask.onclick=function(){
//     console.log('addtask clicked')
// }














})