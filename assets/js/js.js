/* Provide a popup */
const element = document.querySelector('.popup');
element.addEventListener('click', function(event) {
    const clickedElement = event.target;
    clickedElement.firstElementChild.classList.toggle("show")
});