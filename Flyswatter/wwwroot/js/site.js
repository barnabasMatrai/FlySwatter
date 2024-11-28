// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Prevent opening right-click menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevent accidental zoom
document.addEventListener(
    "wheel",
    function touchHandler(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false }
);

// Prevent multitouch events (accidental pinch-zoom)
window.addEventListener("touchstart", touchHandler, false); 

function touchHandler(event) {
    if (event.touches.length > 1) {
        //the event is multi-touch
        //you can then prevent the behavior
        event.preventDefault()
    }
}