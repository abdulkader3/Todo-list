let todoStetasJS = document.querySelector('.todoStetasJS')
let motivetionBox = document.querySelector('.motivetionBox')
let motivetion = document.querySelector('.motivetion')
let motivetionMore = document.querySelector('.motivetionMore')
let zero = document.querySelector('.zero')
let zeroNumber = document.querySelector('.zeroNumber')
let yourTodoListInput = document.querySelector('.yourTodoListInput')
let todoInput = document.querySelector('.todoInput')
let todoButton = document.querySelector('.todoButton')
let todoOUTput = document.querySelector('.todoOUTput')
let todoOUTputBOX = document.querySelector('.todoOUTputBOX')
let todoOUTputINPUTbox = document.querySelector('.todoOUTputINPUTbox')
let todoOUTputEDITbutton = document.querySelector('.todoOUTputEDITbutton')
let todoOUTputDELETEbutton = document.querySelector('.todoOUTputDELETEbutton')
let i = 1



todoButton.addEventListener('click', () => {
    if (todoInput.value == '') {
        alert('ki doto list banabi ? kiso likkha lo.')

    } else {

        //==========what i want to creat ? 
        let todoOUTputBOX = document.createElement('div')
        let todoOUTputINPUTbox = document.createElement('input')
        let br = document.createElement('br')
        let todoOUTputEDITbutton = document.createElement('button')
        let todoOUTputDELETEbutton = document.createElement('button')






        //==========whear i want to creat ?
        todoOUTput.appendChild(todoOUTputBOX)
        todoOUTput.appendChild(todoOUTputBOX)
        todoOUTputBOX.appendChild(todoOUTputINPUTbox)
        todoOUTputBOX.appendChild(todoOUTputEDITbutton)
        todoOUTputBOX.appendChild(todoOUTputDELETEbutton)
        todoOUTput.appendChild(br)






        //=========wanna add any class name ?   
        todoOUTputBOX.classList.add('todoOUTputBOX')
        todoOUTputINPUTbox.classList.add('todoOUTputINPUTbox')
        todoOUTputEDITbutton.classList.add('todoOUTputEDITbutton')
        todoOUTputDELETEbutton.classList.add('todoOUTputDELETEbutton')


        //Now finally I can add contact
        todoOUTputEDITbutton.innerHTML = 'Edit'
        todoOUTputDELETEbutton.innerHTML = 'Delete'
        todoOUTputINPUTbox.value = todoInput.value
        todoInput.value = ''


        //It's time to set some attribute
        todoOUTputINPUTbox.setAttribute('readonly', 'readonly')

        todoOUTputEDITbutton.addEventListener('click', () => {
            if (todoOUTputEDITbutton.innerHTML == 'Edit') {
                todoOUTputEDITbutton.innerHTML = 'Save'
                todoOUTputINPUTbox.removeAttribute('readonly' , 'readonly')
            } else {
                todoOUTputEDITbutton.innerHTML = 'Edit'
                todoOUTputINPUTbox.setAttribute('readonly' ,'readonly')
            }

        })

        todoOUTputDELETEbutton.addEventListener('click', () => {
            todoOUTputBOX.remove()
        })



























    }

})