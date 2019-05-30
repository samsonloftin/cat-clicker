let catBox = document.querySelector(".cat-box");

function cat(name, image) {
    let catDiv = document.createElement("div"),
        catName = document.createElement("h3"),
        catImg = document.createElement("img"),
        catCounter = document.createElement("p"),
        counter = 0;

    catImg.src = image;

    catDiv.appendChild(catName);
    catDiv.appendChild(catImg);
    catDiv.appendChild(catCounter);
    catBox.appendChild(catDiv);

    catName.setAttribute("class", "cat-title");
    catName.innerHTML = name;
    catCounter.setAttribute("class", "counter");
    catCounter.innerHTML = counter;

    catImg.addEventListener("click", () => {
        counter += 1;
        catCounter.innerHTML = counter;
    }, false);
};

cat("sally", "img/cat.gif");
cat("markie", "img/cat02.gif");
cat("jake", "img/cat03.gif");
cat("mary", "img/cat04.gif");
cat("moozie", "img/cat05.gif");