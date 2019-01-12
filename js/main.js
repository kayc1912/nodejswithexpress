import store   from './store.js'


const renderPage = () => {
    console.log("Page render")
}

store.subcribe("stateChanged", renderPage);

window.stateChange = () => {
    store.setState({})
}