(function() {
    // Theme switch
    const toggleTheme = document.querySelector("#toggle-theme");
    toggleTheme.addEventListener("click", function () {
        if (document.documentElement.hasAttribute("theme")) {
            document.documentElement.removeAttribute("theme");
        } else {
            document.documentElement.setAttribute("theme", "special");
        }
    });
}());
