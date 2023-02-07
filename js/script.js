// select Element  
const inputBox = document.getElementById("input-box"),
    addTaskBtn = document.getElementById("push"),
    tasks = document.getElementById("tasks");

addTaskBtn.onclick = () => {
    let inputBoxValue = inputBox.value;
    if(inputBoxValue !== "") {
        const task = `
        <div class="task">
            <span class="taskname">${inputBoxValue}</span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `
        tasks.insertAdjacentHTML("beforeend", task);
        // delete btn function  
        let deleteBtns = document.querySelectorAll(".delete");
        deleteBtns.forEach((deleteBtn) => {
            deleteBtn.addEventListener("click", function () {
                this.parentNode.remove();
            })
        })
       
        // complete task 
        let tasknames = document.querySelectorAll(".taskname");
        tasknames.forEach((taskname) => {
            // taskname.parentNode.classList.remove("completed");
            taskname.addEventListener("click", function() {
                this.parentNode.classList.toggle("completed");
            })
        })
        inputBox.value = "";
    } else {
        alert("please fill this input")
    }
}