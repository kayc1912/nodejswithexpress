import store from '../js/store.js';
const template =  `
    <ul>
        <li class = "nav-home"> Home </li>
        <li class = "nav-about"> About </li>
        <li class = "nav-products"> Products </li>

    </ul>
   `;
document.onclick = event => {
    const target = event.target;
    if(target.className === 'nav-home') navigate("home");
    else if(target.className === 'nav-about' ) navigate("about");
    else if(target.className === 'nav-products' ) navigate("products");
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

export default template;