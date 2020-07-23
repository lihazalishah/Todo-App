var list = document.getElementById("list");

function Add_item(){
    var todo_item= document.getElementById("Todo");
        
    if(todo_item.value == ""){
       alert("please enter plan!!");
    }
else{
    // create li tag with text
    var li = document.createElement('li');
    var li_text= document.createTextNode(todo_item.value);

    li.appendChild(li_text);

    li.setAttribute("class","list")

    list.appendChild(li);

    todo_item.value = "";

    // create  delete  button
    var delBtn = document.createElement('button');
    var delText= document.createTextNode('DELETE');
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","delete_item(this)"); // yha ka this wha 'e' ko mil rha ha  this ka matlb pura button ha

    delBtn.appendChild(delText);

    li.appendChild(delBtn);


   // create  edit button 
    var EditBtn = document.createElement('button');
    var EditText = document.createTextNode('Edit')
    EditBtn.setAttribute("class","btn");
    EditBtn.setAttribute("onclick","Edit_item(this)");

    EditBtn.appendChild(EditText);

    li.appendChild(EditBtn);
}


}


function delete_item(e){  // e 1 delete button ha 
 var c= document.childNodes
    e.parentNode.remove();// ye row delete krne k lye
    
}

function Edit_item(e){// edit item

   var edit= e.parentNode.childNodes[0].nodeValue ;
 
    var edit_prompt= prompt("Edit value",edit);

    e.parentNode.childNodes[0].nodeValue=edit_prompt;
     
}
function deleteAll(){

    list.innerHTML= "";  // for delete all values of list
}