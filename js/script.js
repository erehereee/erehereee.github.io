const button = document.getElementById('hamburger-button');
const powerList = document.getElementById('power-list');
const powerListItem = document.getElementById('power-list-item');

const energyList = document.getElementById('energy-list');
const energyListItem = document.getElementById('energy-list-item');

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

energyList.addEventListener('mouseleave', function() {
    energyList.classList.add('hide');
    energyListItem.classList.add('hide');
});
energyList.addEventListener('click', function() {
    energyList.classList.toggle('hide');
    energyListItem.classList.toggle('hide');
});

