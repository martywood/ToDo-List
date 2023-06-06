//  Refactor ToDo list application and separate form functionality into a separate component. This will make your code cleaner and easier to read.  Also great for reusable components.

// function for TodoForm component
function TodoForm({addTodo}) {
      // Another managed variable, in state.  Value is the input we will take from the user, and setValue initialized with an empty string.
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        // by default, behavior is to reload page, this will prevent that.
        e.preventDefault();
        // check the field and if is value is empty, if so return or do nothing  Otherwise we can go ahead and construct new todos.  Evlatuate new todos, access todos list, add new values, text property is value that was entered and isCompleted will be initialized to F when first created.  Then set todos to new todos, from current or old state to new state.  Then clear our form to be setValue empty string once again.
        if (!value) return;
        // checking for dependencies, we can't access todos so we need to add a function and pass in value, but that function needs to be in index.js
        addTodo(value);
        setValue('');
    }
    
    return (
        /* Need to have onSubmit event on form to be able to map to a function where we can take that value and add to our list of todos and will take handleSubmit function */
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            // how we style
            className="input"
            // value going to be value we just defined in the state of application
            value={value}
            placeholder="Add ToDo ..."
            // to set value in our input, enter expression that takes our event and set our value and take the value that was entered, accessed by the following.  Will give us the input
            onChange={e => setValue(e.target.value)}
            />
        </form>                
    );
}