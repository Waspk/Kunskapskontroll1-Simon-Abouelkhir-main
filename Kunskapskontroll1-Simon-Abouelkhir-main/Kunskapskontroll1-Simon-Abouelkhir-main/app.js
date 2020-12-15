/* BYT UT MINST ETT FOTO START*/

let buyButtonArticle1 = document.querySelector('.art-1 button');

let buyButtonArticle2 = document.querySelector('.art-2 button');


buyButtonArticle2.addEventListener('click',
    function(event){
        pictureChange();
        changeButtonColor();

    }
)

function pictureChange(){
    let secondPicture = document.querySelector ('.art-2 figure img');
    secondPicture.setAttribute('src', 'img/skateboard.png')
}

/* change of photo end*/




/* Change the color in element START */

//Target Nav A
let navA = document.querySelectorAll('nav a');

//Choose the Home Nav Button
let homeNavbutton = navA[0];


//Add the Click event to change the color of home to red.
homeNavbutton.addEventListener('click',
    function(event){
        changeColorWithHome();
    }


)


// Create the function to add the color orange to body
function changeColorWithHome(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'orange';
}



let productsHomeNav = navA[1];

//Add the Click event to change the text of the Products Home Button to 'RESET ME';

productsHomeNav.addEventListener('click',

    function(event){
        changeProductsText();
    }
)


// Create the function to change the text to 'RESET ME'
function changeProductsText(){
    
    productsHomeNav.innerText = 'RESET ME';
}



/* Change Text in one element end*/




/* Change color in buttom  START*/


function changeButtonColor(){

    buyButtonArticle2.style.background = 'yellow';
    buyButtonArticle2.style.color = 'black';
}


/* Change color in button end*/






/* Remove an element start*/

// Klick the  home button in footer to remove Social Media raw.

let menuFooter = document.querySelectorAll('section article a');

let homeFooter = menuFooter[0];

homeFooter.addEventListener('click',
    function(event){
        removeSocialMedia();
    }
)


function removeSocialMedia(){
    let articlesFooter = document.querySelectorAll('section article');

    
    let socialMedia = articlesFooter[2];

    socialMedia.style.display = 'none';
}


/* Remove an element end*/






/* Add a list start*/


let productsFooter = menuFooter[1];

let thisIsTrue = true;

productsFooter.addEventListener('click',
    function(event){
        if (thisIsTrue){
            thisIsTrue = false;
            createList();
        }
        
    }
)


let myListItemsNames = ['Fire Hoodie', 'Forrest Hoodie', 'Water Hoodie', 'Ash Hoodie']

function createList(){
    
    let footer = document.querySelector('footer');
    let myList = document.createElement('ul');
    footer.appendChild(myList);
    let myListH3 = document.createElement('h3');
    myList.appendChild(myListH3);


    for(i = 0; i < myListItemsNames.length ; i++){
        myListH3.innerText = 'Products';
        let myListItem = document.createElement('li');
        myListItem.innerText = myListItemsNames[i];
        myList.appendChild(myListItem);
        myListItem.style.border = '1px solid green';
    }
}



/* Add a list end*/




/* Reset button Start*/


let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


reset.addEventListener('click', resetAll);

function resetAll(){
    //reset Body to white background
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';

    //reset RESET ME to Products
    let productHomeNav = navA[1];
    productHomeNav.innerText = 'product';

    //reset Forrest-hoodie-picture to Fire-hoodie-picture
    let secondPicture = document.querySelector ('.art-2 figure img');
    secondPicture.setAttribute('src', 'img/hoodie-fire.png');

    //reset Buy Button color to black
    let buyButtonArticle2 = document.querySelector('.art-2 button');
    buyButtonArticle2.style.backgroundColor = 'black';
    buyButtonArticle2.style.color = 'white';


    //reset Social Media to show
    let articlesFooter = document.querySelectorAll('section article');
    let socialMedia = articlesFooter[2];
    socialMedia.style.display = 'flex';


    //reset UL
    let productList = document.querySelector('ul');
    productList.remove();
    thisIsTrue = true;
}

/* Reset button end*/



