const addBtn = document.querySelector('.add-btn');
const listDiv = document.querySelector('.list');
const myList = document.getElementsByClassName('my-list');

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
    li2.classList.add('list2')
    li2.innerHTML='<input class="input-class" type="text" style="width:100%; height:25px;">'
    ul.appendChild(li2);

    let li3 = document.createElement('li');
    li3.classList.add('list3')
    li3.innerHTML='<i class="fas fa-check-circle check"></i>'
    ul.appendChild(li3);

    let li4 = document.createElement('li');
    li4.innerHTML='<i class="fas fa-trash trash"></i><i class="fas fa-save save"></i>'
    ul.appendChild(li4);
    


});

listDiv.addEventListener('click', function(e){
    const item =e.target;
    const input = document.querySelector(".input-class");
    const listTwo = document.querySelector(".list2");
    const listThree = document.querySelector(".list3");
    if(item.className.match(/save/g)){
        if(input.value == ""){
            alert("Boşluqları tamamla")
        }else{
            let ul = document.createElement('ul');
            ul.className='my-list';
            listDiv.appendChild(ul);
    
            let rowNumbers = document.getElementsByClassName('row-number');
            if(rowNumbers.length > 0){
                i = rowNumbers[rowNumbers.length-1].innerHTML*1
            }
            
            let li = document.createElement('li');
            li.classList.add('row-number');
            li.innerHTML=i;
            ul.appendChild(li);
    
            let li2 = document.createElement('li');
            li2.classList.add('list2')
            li2.innerText=input.value;
            ul.appendChild(li2);
    
            let li3 = document.createElement('li');
            li3.innerHTML='<i class="fas fa-check-circle check"></i>';
            li3.classList.add('list3');
            ul.appendChild(li3);
    
            let li4 = document.createElement('li');
            li4.innerHTML='<i class="fas fa-edit edit"></i><i class="fas fa-trash trash"></i>'
            ul.appendChild(li4);
    
            item.parentElement.parentElement.remove() 
            
    
            }
        }
           else if(item.className.match(/trash/g)){
               item.parentElement.parentElement.remove() 
               

            }

            else if(item.className.match(/edit/g)){
                listTwo.innerHTML='<input class="input-edit" type="text" style="width:100%; height:25px;">';
                let inputEdit = document.querySelector('.input-edit');
                inputEdit.focus();
                inputEdit.innerText = listTwo.innerText ;
                

               
            }

           
                
            else if(item.className.match(/check/g)){
                
               
                 listThree.innerHTML='<i class="fas fa-times-circle times"></i>'
                
               
              }
              
              else if(item.className.match(/times/g)){
                  
                listThree.innerHTML='<i class="fas fa-check-circle check"></i>'
              }

         
            
        
        
       


});

