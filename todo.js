const parentList=[];


var button=document.getElementById('add');
button.addEventListener('click',Manenaiavadtu);
update();

// updateList()

function Manenaiavadtu(){
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
    <button   id="add" class="btn btn-danger" onClick=Clear()>Cancel</button>
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
     <button   id="add" class="btn btn-primary" onclick=Manenaiavadtu()>Add</button>
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
            <td><button class="btn btn-sm btn-danger" onclick="deleteByIndex(${index})">Delete</button></td>
            <td><button class="btn btn-sm btn-primary" onclick="editByIndex(${index})">Edit</button></td> 
        </tr>`;
  });
  tableBody.innerHTML = str;
}

