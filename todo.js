const parentList=[];


var button=document.getElementById('add');
button.addEventListener('click',todoList);
update();

// updateList()

function todoList(){
    let tit=document.getElementById('title');
    let desc=document.getElementById('description');

    if(tit.value || desc.value){
        parentList.push({title:tit.value,desc:desc.value});
        tit.value='';
        desc.value=''; 
        update();
    }
    
    
}

function editByIndex(index){
    let tit=document.getElementById('title');
    let desc=document.getElementById('description');
    tit.value=parentList[index].title;
    desc.value=parentList[index].desc;

    let my_buttons=document.getElementById('mybuttons')
    my_buttons.innerHTML=`
    <button   id="add" class="btn btn-success" onclick=saveByIndex(${index})>Save Changes</button>
    <button   id="add" class="btn btn-danger" onclick=Clear()>Cancel</button>
    `;

    // currentUpdatingIndex=index;

}
function saveByIndex(index){
    let tit=document.getElementById('title');
    let desc=document.getElementById('description');
    //Array Updation
    parentList[index]={title:tit.value,desc:desc.value};
    //UI
    update();
    Clear();
}

function Clear(){
    let tit=document.getElementById('title');
    let desc=document.getElementById('description');
    tit.value='';
    desc.value='';

     //Parent Buttttons
     let my_buttons=document.getElementById('mybuttons')
     my_buttons.innerHTML=`
     <button   id="add" class="btn btn-primary" onclick=todoList()>Add</button>
     `;
 
}
function  deleteByIndex(index){
    parentList.splice(index,1);
   

    update();
}

function update(){
    //This updates the list
    // console.log(parentList)
    let tableBody = document.getElementById("tableBody");
    let str = "";
    parentList.forEach((element,index) => {
    str += `
        <tr id="row${index}">
            <td>${index + 1}</td>
            <td>${element.title}</td>
            <td>${element.desc}</td> 
            <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" >Delete</button></td>
 
       
            <td><button class="btn btn-sm btn-primary" onclick="editByIndex(${index})">Edit</button></td> 
        </tr>`;
  });
  tableBody.innerHTML = str;
}

function modal(index){

    // let yesbutton = document.getElementById('modalyes');
    parentList.splice(index,1);
   

    update();
    
}