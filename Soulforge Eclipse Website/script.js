function togglePost(header) {
    const wrapper = header.nextElementSibling;

    if (!wrapper) return;

    if (wrapper.style.maxHeight) {
        wrapper.style.maxHeight = null;
    } else {
        wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    }
}

const menuBtn = document.getElementById("menu-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    mobileSidebar.classList.toggle("open");
    overlay.classList.toggle("show");
});

