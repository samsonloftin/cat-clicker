/*
 *
 * THE
 * MODEL
 * 
*/

const catData = {
    currentCat: null,
    showForm: false,
    cats: [
        {
            name : 'Moozie',
            source : 'img/cat01.gif',
            alt : 'Moozie the cat being super cute!',
            catounter : 0
        },
        {
            name : 'Zambie',
            source : 'img/cat02.gif',
            alt : 'Zambie look is a very cute cat!',
            catounter : 0
        },
        {
            name : 'Tony',
            source : 'img/cat03.gif',
            alt : 'Tony the cat looking fierce!',
            catounter : 0
        },
        {
            name : 'Leo',
            source : 'img/cat04.gif',
            alt : 'Leo the cat looking professional!',
            catounter : 0
        },
        {
            name : 'Mary',
            source : 'img/cat05.gif',
            alt : 'Cannot resist Mary and her cat charms',
            catounter : 0
        }
    ]
};

/*
 *
 * THE
 * OCTOPUS
 * 
*/

const theCatWrangler = {

    init() {
        // Sets the first cat in cats as the currentCat
        catData.currentCat = catData.cats[0];

        //Starts catDisplay & CatList to start displaying
        catList.init();
        catDisplay.init();
    },

    // returns currentCat to getCurrentCat property
    getCurrentCat() {
        return catData.currentCat;
    },

    // returns cats list to getCats property
    getCats() {
        return catData.cats;
    },

    //set a new current cat
    setCurrentCat(cat) {
        catData.currentCat = cat;
    },

    // increases counter after click
    increaseCatounter() {
        catData.currentCat.catounter++;
        catDisplay.render();
    },

    openForm() {

    },

    closeForm() {

    },

    saveForm() {

    }
};

/*
 *
 * THE
 * VIEW
 * 
*/

let catFormView = {

    init() {

    },

    render() {
        
    }
};

let catDisplay = {

    init() {
        // DOM Elements
        this.catBox = document.getElementById('cat-box');
        this.catName = document.getElementById('cat-name');
        this.catImg = document.getElementById('cat-img');
        this.catCounter = document.getElementById('cat-counter');

        // sets click to increase counter
        this.catImg.addEventListener('click', () => {
            theCatWrangler.increaseCatounter();
        });

        // Updates view
        this.render();
    },

    render() {
        // retrieves info from the current cat
        const currentCat = theCatWrangler.getCurrentCat();
        this.catCounter.textContent = currentCat.catounter;
        this.catName.textContent = currentCat.name;
        this.catImg.src = currentCat.source;
        this.catImg.alt = currentCat.alt;
    }
};

let catList = {

    init() {
        // DOM Element
        this.catCollect = document.getElementById('cat-collection');

        // display the changes
        this.render();
    },

    render() {
        let catEntry;
        const cats = theCatWrangler.getCats(); 

        // empty the cat list
        this.catCollect.innerHTML = '';

        cats.forEach(cat => {

            catEntry = document.createElement('li');
            catEntry.textContent = cat.name;

            catEntry.addEventListener('click', ((catCopy => () => {
                    theCatWrangler.setCurrentCat(catCopy);
                    catDisplay.render();
            }))(cat));

            // Adds Cat to List
            this.catCollect.appendChild(catEntry);
        });
    }
};

/*
 *
 * START
 * APP
 * 
*/
theCatWrangler.init();