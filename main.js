const addBtn = document.querySelector('.add-btn');
const listDiv = document.querySelector('.list');
const myList = document.querySelector('.my-list');

let i = 0;

addBtn.addEventListener('click', function(e){
    let ul = document.createElement('ul');
    ul.className='my-list';
    listDiv.appendChild(ul);

    let rowNumbers = document.getElementsByClassName('row-number');
    if(rowNumbers.length > 0){
        i = rowNumbers[rowNumbers.length-1].innerHTML*1
    }
    
    let li = document.createElement('li');
    li.classList.add('row-number');
    li.innerHTML=i+1;
    ul.appendChild(li);

    let li2 = document.createElement('li');
    li2.innerHTML='<input type="text" style="width:100%; height:25px;">'
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.innerHTML='<i class="fas fa-check-circle check"></i>'
    ul.appendChild(li3);

    let li4 = document.createElement('li');
    li4.innerHTML='<i class="fas fa-trash trash"></i><i class="fas fa-save save"></i>'
    ul.appendChild(li4);
    


});

myList.addEventListener('click', function(e){
    // let ul = document.createElement('ul');
    // ul.className='my-list';
    // listDiv.appendChild(ul);

    // let rowNumbers = document.getElementsByClassName('row-number');
    // if(rowNumbers.length > 0){
    //     i = rowNumbers[rowNumbers.length-1].innerHTML*1
    // }
    
    // let li = document.createElement('li');
    // li.classList.add('row-number');
    // li.innerHTML=i+1;
    // ul.appendChild(li);

    // let li2 = document.createElement('li');
    // li2.innerHTML='<input type="text" style="width:100%; height:25px;">'
    // ul.appendChild(li2);

    // let li3 = document.createElement('li');
    // li3.innerHTML='<i class="fas fa-check-circle check"></i>'
    // ul.appendChild(li3);

    // let li4 = document.createElement('li');
    // li4.innerHTML='<i class="fas fa-trash trash"></i><i class="fas fa-save save"></i>'
    // ul.appendChild(li4);
    console.log('salam')
    


});

