document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");


    tabContents.forEach((tab, index) => {
        tab.computedStyleMap.display = index === 0 ? "block" : "none";

    });

    tabs.forEach((tab, index) =>{
        tab.addEventListener("click", () => {
            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach((content, i) => {
                content.computedStyleMap.display = i ===index ? "block" : "none";
            });
        });
    });
});

