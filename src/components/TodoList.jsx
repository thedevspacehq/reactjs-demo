// Initial

// import { useState, useEffect } from "react";

// let nextId = 0;

// function createTodo(text, completed = false) {
//   return {
//     id: nextId++,
//     text,
//     completed,
//   };
// }

// function NewTodo({ onAdd }) {
//   const [text, setText] = useState("");

//   function handleAddClick() {
//     if (text.trim() === "") return;
//     setText("");
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAddClick}>Add</button>
//     </>
//   );
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [footer, setFooter] = useState(null);

//   useEffect(() => {
//     setFooter(
//       <footer>
//         {todos.filter((todo) => !todo.completed).length} todos left
//       </footer>
//     );
//   }, [todos]);

//   return (
//     <>
//       <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//       {footer}
//     </>
//   );
// }

// Add remove button

// import { useState, useEffect } from "react";

// let nextId = 0;

// function createTodo(text, completed = false) {
//   return {
//     id: nextId++,
//     text,
//     completed,
//   };
// }

// function NewTodo({ onAdd }) {
//   const [text, setText] = useState("");

//   function handleAddClick() {
//     if (text.trim() === "") return;
//     setText("");
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAddClick}>Add</button>
//     </>
//   );
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [footer, setFooter] = useState(null);

//   useEffect(() => {
//     setFooter(
//       <footer>
//         {todos.filter((todo) => !todo.completed).length} todos left
//       </footer>
//     );
//   }, [todos]);

//   // Remove a todo by its id
//   function removeTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <>
//       <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       {footer}
//     </>
//   );
// }

// Edit existing item

import { useState, useEffect } from "react";

let nextId = 0;

function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  };
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    if (text.trim() === "") return;
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}

function TodoItem({ todo, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    if (editText.trim() !== "") {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          {todo.completed ? <s>{todo.text}</s> : todo.text}
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onRemove(todo.id)}>Remove</button>
        </>
      )}
    </li>
  );
}

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    setFooter(
      <footer>
        {todos.filter((todo) => !todo.completed).length} todos left
      </footer>
    );
  }, [todos]);

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  return (
    <>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
      {footer}
    </>
  );
}
