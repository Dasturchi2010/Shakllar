let boxs = document.querySelectorAll(".box");


boxs.forEach((box) => {

    box.addEventListener("mouseover", () => {
        box.classList.toggle("circle");
    });
     
    box.addEventListener("click", () => {
        box.classList.toggle("romb");
    });

    box.addEventListener("dblclick", () => {
        box.style.transform = "translateY(30px)";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "translateY(0)";
    });


});

