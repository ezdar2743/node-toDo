const taskDom = document.querySelector(".tasks");
const showTasks = async () => {
  try {
    const { data } = await axios.get("/api/v1/tasks");

    const allTasks = data
      .map((task) => {
        const { completed, name, _id } = task;

        return `<div class="single-task">
      <h5>
        <span><i class="far fa-check-circle"></i></span>${name}
      </h5>
      <div class="task-links">
        <a href="#" class="edit-link">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <button href="#" class="delete-btn">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>`;
      })
      .join();
    taskDom.innerHTML = allTasks;
  } catch (err) {
    console.log(err);
  }
};

showTasks();
