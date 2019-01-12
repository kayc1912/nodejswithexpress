import store   from './store.js'


const renderPage = () => {
   const rootElm = document.getElementById("root");
   const state = store.getState();
   const {activePage} = state; //new syntax for ES6
   //const activePage = state.activepage;
   const navBar =  `
    <ul>
        <li class = "nav-home"> Home </li>
        <li class = "nav-about"> About </li>
        <li class = "nav-products"> Products </li>

    </ul>
   `;
   const home = `
        ${navBar} 
        <div> 
            <h1>HOMEPAGE</h1>
        </div>`
    ;
    const about = `
    ${navBar} 
    <div> 
        <h1>ABOUT</h1>
    </div>`
    ;
    const products = `
    ${navBar} 
    <div> 
        <h1>PRODUCTS</h1>
    </div>`
    ;

    document.onclick = event => {
        const target = event.target;
        if(target.className === 'nav-home') navigate("home");
        else if(target.className === 'nav-about' ) navigate("about");
        else if(target.className === 'nav-products' ) navigate("products");
    };
    
    let template = "";
    if(activePage === 'home') template = home;
    else if(activePage === 'about') template = about;
    else if(activePage === 'products') template = products;

    rootElm.innerHTML = template;
};

const navigate = page => {
    const state = store.getState();
    const newState = {
        ...state,  
        activePage: page 
    };// destructing object, new syntax of ES6 
    // This mean get all the old state from object 'state' , only change the 'activePage'. 
    store.setState(newState);
};

renderPage();
store.subcribe("stateChanged", renderPage);
