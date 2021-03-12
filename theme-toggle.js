const checkbox = document.getElementById("theme-toggle-checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})