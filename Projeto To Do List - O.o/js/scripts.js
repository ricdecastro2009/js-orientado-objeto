class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText){
        //clona template
        let template = document.querySelector('.task').cloneNode(true);
        // remove classe hide

        template.classList.remove('hide');
        //manipula texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        
        let list = document.querySelector('#tasks-container');

        // inserir na lista
        list.appendChild(template);

        // Adiciona eventos nas tasks
        this.addEvents();

        this.checkTasks('add');
    }

    removeTask(task){
        console.log(task);
        //Achar lemento pai
        let parentEl = task.parentElement;

        //Remover da lista
        parentEl.remove()

        this.checkTasks('remove');
    }

    completeTask(task){
        console.log(task);
        //Adiciona a classe de done
        task.classList.add('done');
    }

    addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];
        
        //Adicionar evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        })

        //Adicionar evento de completar Tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        })
    }

    checkTasks(command){
        let msg = document.querySelector("#empty-tasks");
        //logica de adicionar ou remover tasks

        if(command == 'add'){
            this.totalTasks += 1;
        }else if(command == 'remove'){
            this.totalTasks -= 1;
        }

        if(this.totalTasks == 1 ){
            msg.classList.remove('hide');
        }else{
            msg.classList.add('hide');
        }
    }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let taskText = document.querySelector('#task');
    if(taskText.value !== ''){
        todo.addTask(taskText.value);
    }
    taskText.value = '';
})