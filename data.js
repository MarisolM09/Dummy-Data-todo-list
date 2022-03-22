    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 5,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        for(let i=0;i<arrayOfTodos.length;i++){
        
        let ol = document.getElementById('todo-list')
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(arrayOfTodos[i].title));
        ol.appendChild(li);
        }      
    }
    
    var input = document.getElementById('Input')
    console.log(input.value)
    function filterCallback (element) {
        // returns the elements by the "userId"
        return element.userId == input.value
    } 

    function compTrue (value) {
        return value.completed === "true"
    }
    
    const filterTodos = () => {
        //clears the previous array
        document.getElementById('todo-list').innerHTML = ''
        //filters the value placed in input
        let filteredArray = arrayOfTodos.filter(filterCallback);
        console.log(arrayOfTodos.filter(filterCallback))
        // display the filter in the document not the console.log
        for(let i=0;i<filteredArray.length;i++){
        
            let ol = document.getElementById('todo-list')
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(arrayOfTodos[i].title));
            ol.appendChild(li);
            }   
    }
    
       const clearTodos = () => {
        
        document.getElementById('todo-list').innerHTML = ''
    }
    const filterCompleted = () => {
        
         
       
    }
     