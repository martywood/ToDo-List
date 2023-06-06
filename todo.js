// Separate the ToDo functionality into a component.  Add additional attirubte to our div to list our todos, id will value of the index and add onClick event, call the function removeTodo.  Need to pass in parameters todo, index, remove - being the name of the function.  Call function handle to differentiate from parent function. (-) if we click on line we can remove item as before.  Add handle function, in body remove and pass the index - the function that is dedicated to removing an item from todo list.  Code is cleaner, tags are simpler, dedicated tags, indicated what they do.
function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} <button>Mark Completed</button></div>
}