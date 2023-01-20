var modalOpenButton = document.getElementsByClassName("modal-open-button");
var modalOverlay = document.getElementById("modal-overlay");
var scrollableModal = document.getElementById("modal-container-scrollable");
var modalClosebutton = document.getElementsByClassName("modal-container-close-button");


Array.from(modalOpenButton, button => button.addEventListener("click", event => {

    modalOverlay.classList.add("modal-overlay-visible");

    if (event.currentTarget.id === "modal-open-button-default"){
        scrollableModal.classList.remove("modal-container-visible")
    }else{
        scrollableModal.classList.add("modal-container-visible")
    }

}));


const closeModal = () => {
    modalOverlay.classList.remove("modal-overlay-visible");
    scrollableModal.classList.remove("modal-container-visible");
}


Array.from(modalClosebutton, button => button.addEventListener("click", closeModal));


modalOverlay.addEventListener("click", closeModal);

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 27:
        modal.style.display = "none";
        break;
    default:
        return; // Do nothing for the rest
  }
};