const button = document.getElementById('hamburger-button');
const powerList = document.getElementById('power-list');
const powerListItem = document.getElementById('power-list-item');
button.addEventListener('click', function() {
    const buttonClass = document.querySelector('.container .sidebar');
    buttonClass.classList.toggle('hide');
})

powerList.addEventListener('mouseleave', function() {
    powerList.classList.add('hide');
    powerListItem.classList.add('hide');
});
powerList.addEventListener('click', function() {
    powerList.classList.toggle('hide');
    powerListItem.classList.toggle('hide');
});
