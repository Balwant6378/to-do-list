const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
     function(event){
        if(event.key == "Enter"){
            addToDo(this.value);
            this.value = "";
        }
     }
)

const addToDo = (item)=>{
    const newli = document.createElement("li");
    newli.innerHTML = `
     ${item}
    <i class="fa-solid fa-xmark"></i>
    `;
    newli.addEventListener("click", 
        function(){
            this.classList.toggle("done")
        }
    )
    newli.querySelector("i").addEventListener(
        "click",
         function(){
            newli.remove();
         }
    )
    toDoBox.appendChild(newli);
}
