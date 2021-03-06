const addButton = document.querySelector('#add');
 
const updateLSData=()=>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes =[];
     console.log(textAreaData);
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote =(text='')=>{
    const note= document.createElement('div');
    note.classList.add('note');

    const htmlData =`
    
       
    <div class="note">
    <div class="operation">
    <button class="edit"><i class="far fa-edit"></i></button>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
<div class="main ${text ?"" : "hidden"}"></div>
<textarea class="${text ? "hidden" : "" }"></textarea>
</div>`;
note.insertAdjacentHTML('afterbegin',htmlData);
//getting the references
const  editButton = note.querySelector('.edit');
const  delButton = note.querySelector('.delete');
const  mainDiv = note.querySelector('.main');
const  textArea = note.querySelector('textarea');
///deleteing the node

delButton.addEventListener('click',()=>{
    note.remove();
})
//toggle using edit button

textArea.value=text;
mainDiv.innerHTML=text;

editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

textArea.addEventListener('change',(Event)=>{
    const value  = Event.target.value;
    mainDiv.innerHTML=value
})

document.body.appendChild(note);
//it  append a node as the last child of a node 

}

const notes= JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note) => addNewNote())};
addButton.addEventListener('click',()=>addNewNote());