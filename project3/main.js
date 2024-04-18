const form = document.querySelector('form');
const list = document.querySelector('ul');
const addDiv = document.querySelector('.add-button');
const text = document.querySelector('.text');
let li = document.getElementsByTagName('li');
let textDelImg = document.querySelector('.text-delete-img');
let matrix = [];
const divList = document.querySelector('.div-list');
const listDelBtn = document.getElementsByClassName('list-delete-button');
const sortBtn = document.querySelector('.sort-image');
let dataText;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  dataText = data.get('text');
  addToMatrix();
})


textDelImg.addEventListener('mousedown', clearText);


function refreshMatrix(){
    matrix.length == 0 ? divList.style.display = 'none' : divList.style.display = 'block';

    list.innerHTML ='';
    for(key of matrix){
        list.insertAdjacentHTML('beforeend',`<li class="tasks__item"><span class="list-text">${key}</span><div class="text-delete-img list-delete-button">X</div></span></li>`);
    }

    deleteList();
    sortBtn.innerHTML = `<img src="/image/sort-off-2.png" alt="sort">`

    

}

function addToMatrix(){
    if (dataText.trim().length != 0){ 
        matrix.push(dataText)
        addDiv.innerHTML = 'Добавленно';
        addDiv.classList.add('click-add-button');
        
        
        setTimeout(() =>{
            addDiv.innerHTML = `<span>Добавить</span><div class="add-button-circle"><span>+</span></div>`;
            addDiv.classList.remove('click-add-button');
        }, 1000);
        clearText();
    }  else {
            addDiv.innerHTML = 'Пустая строка';
            addDiv.classList.add('click-add-button-error');
            
            setTimeout(() =>{
                addDiv.innerHTML = `<span>Добавить</span><div class="add-button-circle"><span>+</span></div>`;
                addDiv.classList.remove('click-add-button-error');
            }, 1000)
        }
        refreshMatrix()

}   
    

function clearText(){
    text.value = '';
}

 function deleteList(){
    for(element of listDelBtn){
    element.addEventListener('mousedown', (evt) => {
        let parent = evt.target.parentNode;
        parent.parentNode.removeChild(parent);
        listToMatrix();
        refreshMatrix();
    })
  };
}

function listToMatrix(){
    matrix = []
    for(let i=0; i<li.length; i++){
        let temp = li[i].textContent.split('')
        temp.pop();
        temp = temp.join('');
        matrix.push(temp)
    }
}



// SORT

sortBtn.addEventListener('click', sortAsc);

function sortAsc(event){
  if(matrix.length > 1){
    matrix.sort((a, b) => a.localeCompare(b));
    refreshMatrix();
    sortBtn.innerHTML = ` <img src="image/sort-on-1.png" alt="sort">`;
    sortBtn.removeEventListener('click', sortAsc);
    sortBtn.addEventListener('click', sortDesc)
  }
}

function sortDesc(event){
  matrix.sort((a, b) => b.localeCompare(a));
  refreshMatrix();
  sortBtn.innerHTML = ` <img src="image/sort-on-2.png" alt="sort">`;
  sortBtn.removeEventListener('click', sortDesc);
  sortBtn.addEventListener('click', sortAsc)
}

listToMatrix()
refreshMatrix();
  



