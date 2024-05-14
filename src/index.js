import "./style.css";

const menuItems = document.querySelectorAll(".menu-item");
const dropDowns = document.querySelectorAll(".drop-down-menu");
const navBar = document.querySelector("nav");
const mainBody = document.querySelector("body");

console.log(menuItems);
console.log(navBar.offsetHeight);
console.log(navBar.offsetTop);

menuItems.forEach((menu) => {

    menu.addEventListener("mouseover", () => {
        // console.log(menu.innerHTML);
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menu) => {
            menu.classList.remove("menu-active");
            menu.classList.remove("selected");
        });
        menu.classList.add("menu-active");
        const childMenu = menu.children;
        // console.log(childMenu);
        if (childMenu.length > 0)
            childMenu[0].setAttribute("style", `top: ${navBar.offsetHeight + navBar.offsetTop + 2}px; `);

    });

    menu.addEventListener("mouseleave", () => {
        menu.classList.remove("menu-active");
    })

    menu.addEventListener("click", () => {
        // console.log(menu.innerHTML);
        menu.classList.remove("menu-active");
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menu) => {
            // menu.classList.remove("menu-active");
            menu.classList.remove("selected");
        });
        menu.classList.add("selected");
        const childMenu = menu.children;
        // console.log(childMenu);
        if (childMenu.length > 0)
            childMenu[0].setAttribute("style", `top: ${navBar.offsetHeight + navBar.offsetTop + 2}px;`);

    });


});


dropDowns.forEach((dropDown) => {
    dropDown.addEventListener("click", () => {
        const parentDiv = dropDown.parentElement;
        console.log("parent: ", parentDiv);
        // parentDiv.classList.remove("menu-active");
        parentDiv.classList.remove("selected");
        console.log("parent: ", parentDiv);
    });
});




