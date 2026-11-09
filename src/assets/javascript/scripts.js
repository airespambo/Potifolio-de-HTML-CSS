const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    let dropdown = document.querySelector("#dropdown");

    dropdown.className = 
        dropdown.classList.contains("dropdown-opened") ? 'dropdown-closed' : 'dropdown-opened';
});