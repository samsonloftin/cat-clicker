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

    // returns the value for showForm
    retrieveForm() {
        return catData.showForm;
    },

    // toggles the boolean of showForm
    toggleForm() {
        catData.showForm = !(catData.showForm);
        catDisplay.render();
    },

    editCat(name, url, alt, clicks) {
        catData.currentCat.name = name;
        catData.currentCat.source = url;
        catData.currentCat.alt = alt;
        catData.currentCat.catounter = clicks;
        catDisplay.render();
        catList.render();
    }

};

/*
 *
 * THE
 * VIEW
 * 
*/

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

        // DOM Admin Button Elements
        this.adminButton = document.getElementById('admin');
        this.adminForm = document.getElementById('admin-form');
        this.adminCancel = document.getElementById('admin-cancel');

        // toggles the Admin Button
        this.adminButton.addEventListener('click', () => {
            theCatWrangler.toggleForm();
        });

        // toggles the cancel button (does the same thing as the admin button)
        this.adminCancel.addEventListener('click', () => {
            theCatWrangler.toggleForm();
        });

        // DOM Admin Inputs
        this.adminName = document.getElementById('admin-name');
        this.adminUrl = document.getElementById('admin-url');
        this.adminAlt = document.getElementById('admin-alt');
        this.adminClick = document.getElementById('admin-clicks');
        this.adminSave = document.getElementById('admin-save');

        this.adminSave.addEventListener('click', () => {
            theCatWrangler.editCat(this.adminName.value, this.adminUrl.value, this.adminAlt.value, this.adminClick.value);
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

        //Places currentCat info into the form
        this.adminName.value = currentCat.name;
        this.adminUrl.value = currentCat.source;
        this.adminClick.value = currentCat.catounter;
        this.adminAlt.value = currentCat.alt;

        // retrieves the value of catData.showForm from the octopus
        const catForm = theCatWrangler.retrieveForm();

        // checks the boolean and shows or hides the form
        if (catForm == false) {
            this.adminForm.setAttribute('class', 'hide');
        } else if (catForm == true) {
            this.adminForm.setAttribute('class', 'show');
        }
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