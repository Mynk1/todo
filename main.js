function addTodo(){

  const inputJs = document.getElementById('userInput');
  const listJs = document.getElementById('list');

  if (inputJs.value.trim() === "") return;

  const todo = document.createElement("li");

  todo.innerHTML = `
    <span class="todo-text">${inputJs.value}</span>

    <div class="actions">
      <span class="complete-btn action">✅</span>
      <span class="delete-btn action" onclick="this.parentElement.parentElement.remove()">🗑️</span>
    </div>
  `;

  const text = todo.querySelector(".todo-text");
  const btn = todo.querySelector(".complete-btn");

  // Toggle strike-through on click
  btn.onclick = function () {
    if (text.style.textDecoration === "line-through") {
      text.style.textDecoration = "none";
      btn.style.opacity = "1";
      btn.textContent = "✅";
      btn.style.fontSize = "1rem";    
    } else {
      text.style.textDecoration = "line-through";
      btn.style.opacity = "0.5";
      btn.style.fontSize = "1.2rem";      
      btn.textContent = "↺";
    }
  };

  listJs.appendChild(todo);
  inputJs.value = "";
  inputJs.focus();
}
