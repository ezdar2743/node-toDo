const params = window.location.search;
const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const editFormDom = document.querySelector(".single-task-form");
const formAlertDom = document.querySelector(".form-alert");
const id = new URLSearchParams(params).get("id");

const showTask = async () => {
  try {
    const { data } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, name } = data;
    taskIDDOM.textContent = _id;
    taskNameDOM.value = name;
  } catch (err) {
    console.log(err);
  }
};
showTask();

editFormDom.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const taskName = taskNameDOM.value;
    const { data } = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
    });
    formAlertDom.style.display = "block";
    formAlertDom.textContent = "change!";
    formAlertDom.classList.add("text-success");
  } catch (err) {
    console.log(err);
  }
});
