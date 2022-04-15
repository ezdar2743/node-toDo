const params = window.location.search;
const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const editFormDom = document.querySelector(".single-task-form");
const formAlertDom = document.querySelector(".form-alert");
const taskCompleted = document.querySelector(".task-edit-completed");
const id = new URLSearchParams(params).get("id");

const showTask = async () => {
  try {
    const { data } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, name } = data;
    taskIDDOM.textContent = _id;
    taskNameDOM.value = name;
    if (completed) {
      taskCompleted.checked = true;
    }
  } catch (err) {
    console.log(err);
  }
};
showTask();

editFormDom.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const taskName = taskNameDOM.value;
    const isCompleted = taskCompleted.checked;
    const { data } = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      completed: isCompleted,
    });
    formAlertDom.style.display = "block";
    formAlertDom.textContent = "change!";
    formAlertDom.classList.add("text-success");
  } catch (err) {
    console.log(err);
  }
});
