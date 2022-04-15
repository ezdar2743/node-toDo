const taskDom = document.querySelector(".tasks");
const formDom = document.querySelector(".task-form");
const inputDom = document.querySelector(".task-input");
const formAlertDom = document.querySelector(".form-alert");

const showTasks = async () => {
  try {
    const { data } = await axios.get("/api/v1/tasks");
    console.log(data.length);
    if (data.length === 0) {
      taskDom.innerHTML = `<h5 class="empty-list"> no To DO</h5>`;
      return;
    }

    const allTasks = data
      .map((task) => {
        const { completed, name, _id } = task;

        return `<div class="single-task ${completed && "task-completed"}">
      <h5>
        <span><i class="far fa-check-circle"></i></span>${name}
      </h5>
      <div class="task-links">
        <a href="/edit.html?id=${_id}" class="edit-link">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <button href="#" class="delete-btn" data-id="${_id}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>`;
      })
      .join("");
    taskDom.innerHTML = allTasks;
  } catch (err) {
    console.log(err);
  }
};

formDom.addEventListener("submit", async (event) => {
  event.preventDefault();
  const todo = inputDom.value;

  try {
    await axios.post("/api/v1/tasks", { name: todo });
    showTasks();
    inputDom.value = "";
  } catch (err) {
    console.log(err);
  }
});

taskDom.addEventListener("click", async (event) => {
  const element = event.target;
  if (element.parentElement.classList.contains("delete-btn")) {
    const id = element.parentElement.dataset.id;

    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (err) {
      console.log(err);
    }
  }
});

showTasks();
