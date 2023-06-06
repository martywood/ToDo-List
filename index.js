// function that has our top component
function App(){
  // initial state, variable name todos, function to set will use standard naming covention setTodos, then use .useState feature to set initial state.  Initial state is an array of three objects with text, description of todo and boolean of T or F isCompleted.  All are initially false.
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'take dogs for a walk',
      isCompleted: false,
    },
    {
      text: 'book a hotel',
      isCompleted: false,
    }                        
  ]);

  // Using ES6 notation, takes parameter text, value of form.  Two lines of code get access to local state and updates list.  Update text:text after refractoring and removing the form functionality and their tags into a separate file

  const addTodo = text => {
      const newTodos =[...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
  }  

  // JSX to display todos in the broswer.  Expression inside an empty tag or fragment, take a look at'todos', and 'map()' to that. Loop through each of the todos and create a div tag for each one.  Parameters that will be used from the map callback signature is, going to call each one of those that are passed in 'todo' as opposed to 'todos'.  Then the index is going to be an 'i'. Using here ES6 for functions. Then going to simply have a '<div>' tag that we're going to be using to list each of those items.  And we're going to pass in a 'key' here with a value of the index.  Then we're going to have another expression here, simply the text of that todo. Going to enter '{todo.text}'. And then < / div >'.

  // Styling - use some within the tag of our element to render our todo list.  Add className with value of "todo"

  // Add a form with an input element.
  // Remove function, e to denote event that will be passed, get handle on id that will be part of div by creating const index, make sure value being passed is in fact a number with JS function that makes number from string if in fact a string.  Access value using e.target.id, value that we set below for div.  This will give index position of the todo we want to remove.  Update state in a couple of lines.  First, get handle on current todos, let temp.  Then temp list going to update by removing that todo using the index, pass the index and pass 1 (remove that 1 item from list).  setTodos in one step, go from current state to new state.
  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }
  // Add new component for form, add attribute for todo function addTodo.  Add new component Todo, pass index with index value of i, todo with value of item of todo list so todo, remove will point to removeTodo function.  Since the parameter removeTodo now comes from todo.js and what is passed there is the index, we are no longer dealing with an event, so will simply be text - call it index above so it's easier to read.  And remove const index.  Update array of objects as before, except value is being passed from the component.  Error, fix with key with i being passed in.
  return (
      // Add styling to complete your ToDo list application, add divs that will wrap remaining tags, add app as out outermost div. Add another div, and enter className again with todo-list.  Wrap inner tags and indent.  To cleanup, no longer need fragment tags.
      <div className="app" >
          <div className="todo-list">
              {todos.map((todo,i) => 
                  <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
              <TodoForm addTodo={addTodo}/>
          </div>
      </div>
  );
}

// Add to the DOM, and the parameter to pass in here will be '< App/ >' component.  Then we're going to target the element within the HTML that we're going to pass all this content into.
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);