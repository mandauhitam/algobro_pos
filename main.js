function toggle() {
    const sidebar = document.querySelector(".sidebar");

    const main = document.querySelector(".main");

    sidebar.classList.toggle("active");

    main.classList.toggle("active");
}