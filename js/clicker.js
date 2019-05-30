let catBox = document.querySelector(".cat-box"),
    catListDisplay = document.createElement("div"),
    catListUl = document.createElement("ul"),
    imageCounter = 0,
    catArray = [],
    catArrayImg = [];

function catArrayFunc(name, image) {
    catArray.push(name);
    catArrayImg.push(image);
};

function hideCats() {
    catArray.forEach(cat => {
        let findCat = document.getElementById(cat);
        findCat.setAttribute("class","cat hide");
    });
};

function catElements() {

    catArray.forEach(cat => {
        let catListText = document.createElement("li"),
            catDiv = document.createElement("div"),
            catImg = document.createElement("img"),
            catName = document.createElement("h3"),
            catCounter = document.createElement("p"),
            counter = 0;

        imageCounter += 1;
        catImg.src = "img/cat0" + imageCounter + ".gif";

        catListText.innerHTML = cat;
        catListText.setAttribute("id", ("l" + cat));
        catImg.setAttribute("class", "kittyImg");
        catDiv.setAttribute("class", "cat hide");
        catDiv.setAttribute("id", cat);
        catName.setAttribute("class", "cat-title");
        catCounter.setAttribute("class", "counter");
        catCounter.innerHTML = counter;
        catName.innerHTML = cat;

        // Creating the cat list
        catBox.appendChild(catListDisplay);
        catListDisplay.appendChild(catListUl);
        catListUl.appendChild(catListText);
        catListText.appendChild(catDiv);
        catDiv.appendChild(catName);
        catDiv.appendChild(catImg);
        catDiv.appendChild(catCounter);

        catImg.addEventListener("click", () => {
            counter += 1;
            catCounter.innerHTML = counter;
        }, false);

        catListText.addEventListener("click", () => {
            let gettingAttr = catListText.getAttribute("id");
            
            hideCats();
            catArray.forEach(element => {
                if (gettingAttr === ("l" + element)) {
                    catDiv.setAttribute("class", "cat");
                }
            });
        });
    });
}

catArrayFunc("sally", "img/cat.gif");
catArrayFunc("markie", "img/cat02.gif");
catArrayFunc("jake", "img/cat03.gif");
catArrayFunc("mary", "img/cat04.gif");
catArrayFunc("moozie", "img/cat05.gif");
catElements();