* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f9f9f9;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px #ccc;
}

form input,
form textarea,
form button,
.todo-section input,
.todo-section button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}

#todoList li {
  margin-top: 10px;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

#todoList li button {
  background: red;
  color: white;
  width: auto;
  padding: 5px 10px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
