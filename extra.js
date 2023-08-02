window.addEventListener("load", function () {

    // Assume Maya if no choice has yet been made
    if (window.localStorage.getItem("RagdollHost1") == null) {
        window.localStorage.setItem("RagdollHost1", "maya");
    }

    setTab(null, window.localStorage.getItem("RagdollHost1"));

}, false );

/* Utility function */
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/* Called when the user clicks any tabbed element */
function setTab(event, tabName) {

    // Remember choice until next page visit
    window.localStorage.setItem("RagdollHost1", tabName);

    var i, tabcontent, tabs;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = hasClass(tabcontent[i], tabName) ? "block" : "none";
    }

    // Get all elements with class="tab" and remove the class "active"
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
        tabs[i].className += hasClass(tabs[i], tabName) ? " active" : ""
    }
}