
let taskContainer = document.querySelector(".tasks")
document.getElementById("add").addEventListener("click" , ()=>{
  let taskVal= document.getElementById("write").value.trim()
  if(taskVal === "")return;
  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task");

  const taskP = document.createElement("p")
  taskP.textContent = taskVal;
  
  const btnContainer = document.createElement("div")
  btnContainer.classList.add("btn-container")

  const delBtn = document.createElement("button")
  delBtn.textContent = "Delete"

  const doneBtn = document.createElement("button")
  doneBtn.textContent = "Done"
  doneBtn.style.backgroundColor = "green"



  doneBtn.addEventListener("click",()=>{
    taskDiv.style.backgroundColor = "#80EF80"
    taskP.style.color = "black"
  })

  delBtn.addEventListener("click",()=>{
    taskDiv.remove();
  })

  btnContainer.appendChild(doneBtn)
  btnContainer.appendChild(delBtn)

  taskDiv.appendChild(taskP)
  taskDiv.appendChild(btnContainer)

  taskContainer.appendChild(taskDiv)
  document.getElementById("write").value = ""
  
})

