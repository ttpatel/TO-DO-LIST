

function getAndUpdate() {
    console.log("Adding to List...");
 var tit = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
       
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    else {

        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
                    <tr id="row${index}">
                    <th scope="row">${index + 1}</th>
                    <td id="row${index}col2">${element[0]}</td>
                    <td id="row${index}col3">${element[1]}</td> 
                    <td id="row${index}col4"><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
                    <td id="row${index}col5"><button class="btn btn-sm btn-primary" onclick="edited(${index})">Edited</button></td> 
                    </tr>`;
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    alert('Are you sure you want to delete?')
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}
function edited(itemIndex) {
    console.log("Edited", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Edit itemIndex element from the array

    tit=itemJsonArray[itemIndex][0]
    desc=itemJsonArray[itemIndex][1]
   
    // document.getElementById('title').value=itemJsonArray[itemIndex][0];
    // document.getElementById('description').value=itemJsonArray[itemIndex][1];
    var current_element=document.getElementById("row"+itemIndex+"col2");
    // var new_textbox=document.createElement("textarea");
    // new_textbox.value="JatiRehje"
    // current_row.appendChild(new_textbox)
    current_element.innerHTML=`<textarea rows=1>${tit}</textarea>`

    var current_element=document.getElementById("row"+itemIndex+"col3");
    current_element.innerHTML=`<textarea rows=1>${desc}</textarea>`

    var current_element=document.getElementById("row"+itemIndex+"col4");
    current_element.innerHTML=`<button type="button" class="btn btn-primary" onclick="save_changes(${itemIndex})">Save changes</button>`

    var current_element=document.getElementById("row"+itemIndex+"col5");
    current_element.innerHTML=`<button type="button" class="btn btn-primary" onclick="cancel(${itemIndex})">Cancel</button>`
 
    // localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    // update();
}
function save_changes(index){
    var tit=document.getElementById("row"+index+"col2").children[0].value
    var desc=document.getElementById("row"+index+"col3").children[0].value

    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    
    itemJsonArray[index]=[tit,desc];

    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    current_row=document.getElementById("row"+index+"col2").parentElement;
    current_row.innerHTML=`
                    <th scope="row">${index + 1}</th>
                    <td id="row${index}col2">${tit}</td>
                    <td id="row${index}col3">${desc}</td> 
                    <td id="row${index}col4"><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
                    <td id="row${index}col5"><button class="btn btn-sm btn-primary" onclick="edited(${index})">Edited</button></td>
    `
    alert('Are you sure you want to make changes!!!')
}

function cancel(index){
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    
    tit=itemJsonArray[index][0]
    desc=itemJsonArray[index][1]

    current_row=document.getElementById("row"+index+"col2").parentElement;
    current_row.innerHTML=`
                    <th scope="row">${index + 1}</th>
                    <td id="row${index}col2">${tit}</td>
                    <td id="row${index}col3">${desc}</td> 
                    <td id="row${index}col4"><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
                    <td id="row${index}col5"><button class="btn btn-sm btn-primary" onclick="edited(${index})">Edited</button></td>
    `


}


