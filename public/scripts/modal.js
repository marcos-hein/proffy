const modalOverlay = document.querySelector(".modal-overlay")
const classes = document.querySelectorAll(".experimental-class")
console.log("aqui")
for (const classFree of classes)
    classFree.addEventListener("click", function() {
        const classId = classFree.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `${classId}`

    })

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})