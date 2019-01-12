let state = {
        activePage : 'home',
        productDetail : null,
        shoppingCart: null,
        products : []
}

const events = {} 



const subcribe = (eventName, callBack ) => {
    if(!events.hasOwnProperty(eventName)) {
            events[eventName] = []
    }
    events[eventName].push(callBack)
}

const publish = (eventName, data) => {
    if(!events.hasOwnProperty(eventName)) return 
    events[eventName].map(callBack => {
        callBack(data);
    })
}

const getState = () => state

const setState = newState => {
    state = newState
    publish("stateChanged", state)
}
export default {
    setState, 
    getState,
    subcribe
}