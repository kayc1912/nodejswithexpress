import store   from './store.js'
import home from '../pages/home.js'
import about from '../pages/about.js'
import products from '../pages/products.js'


const renderPage = () => {
   const rootElm = document.getElementById("root");
   const state = store.getState();
   const {activePage} = state; //new syntax for ES6
   //const activePage = state.activepage;
    let template = "";
    if(activePage === 'home') template = home;
    else if(activePage === 'about') template = about;
    else if(activePage === 'products') template = products;

    rootElm.innerHTML = template;
};
renderPage();
store.subcribe("stateChanged", renderPage);
