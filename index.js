
function showSidebar () {
    const sideBar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    sideBar.style.display = 'flex';
    hamburger.style.display = 'none';
}


function closeSidebar () {
    const sideBar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    sideBar.style.display = 'none';
    hamburger.style.display = 'block';
}