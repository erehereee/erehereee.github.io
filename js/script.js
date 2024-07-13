const button = document.getElementById('hamburger-button');
const powerList = document.getElementById('power-list');
const powerListItem = document.getElementById('power-list-item');

const divParent = document.createElement('div');
const divChild1 = document.createElement('a');
const divChild2 = document.createElement('a');
const divChildChild1 = document.createElement('li');
const divChildChild2 = document.createElement('li');
const divChildChild1Text = document.createTextNode('PLN');
const divChildChild2Text = document.createTextNode('Genset');
divParent.setAttribute('class', 'list-item')
divChildChild1.appendChild(divChildChild1Text);
divChildChild2.appendChild(divChildChild2Text)
divChild1.appendChild(divChildChild1);
divChild2.appendChild(divChildChild2);
divParent.appendChild(divChild1);
divParent.appendChild(divChild2);

button.addEventListener('click', function() {
    const buttonClass = document.querySelector('.container .sidebar');
    buttonClass.classList.toggle('hide');
})



/*<!-- <div class="list-item">
                        <a href="">
                        <li>PLN</li>
                        </a>
                        <a href="">
                        <li>Genset</li>
                        </a>
                    </div> -->*/

powerList.addEventListener('mouseenter', function() {
    powerList.appendChild(divParent);
    powerList.classList.add('hide');
    powerListItem.classList.add('hide');
});
powerList.addEventListener('mouseenter', function() {
    powerList.appendChild(divParent);
    powerList.classList.add('hide');
    powerListItem.classList.add('hide');
});

// powerList.addEventListener('mouseleave', function() {
//     const menuClass = document.querySelectorAll('.container .sidebar .main-menu .menu')[1];
//     menuClass.classList.remove('menu-list');
//     menuClass.classList.add('menu');
// })