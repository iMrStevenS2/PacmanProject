var closepop = document.getElementById('closeup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup');

closepop.addEventListener('click', function () {
    overlay.classList.remove('active');
    overlay.classList.add('noActive');
});