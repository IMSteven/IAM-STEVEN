function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let lastScrollTop = 0; // Keep track of the last scroll position

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // Get the current scroll position
    let navbar = document.querySelector("header > nav"); // Adjust the selector as needed

    console.log("Current Scroll Position:", currentScrollPos); // Debugging line

    if (lastScrollTop < currentScrollPos && currentScrollPos > 50) {
        // Scrolling Down (and add a threshold)
        navbar.style.top = "-80px"; // Adjust based on your navbar's height
        console.log("Hiding Navbar"); // Debugging line
    } else {
        // Scrolling Up
        navbar.style.top = "0px";
        console.log("Showing Navbar"); // Debugging line
    }

    lastScrollTop = currentScrollPos; // Update lastScrollTop to the current scroll position
}

document.addEventListener('DOMContentLoaded', function() {
    const showPopup = document.querySelector('.hire-btn');
    const popupContainer = document.querySelector('.pop-container');
    const closeBtn = document.querySelector('.close-btn');

    showPopup.onclick = () => {
        popupContainer.classList.add('active');
    }
    closeBtn.onclick = () => {
        popupContainer.classList.remove('active');
    }
});