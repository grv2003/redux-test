import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listners = [];

  function subscribe(listner) {
    //basically listners maintains list of functions to be called
    listners.push(listner);
    //listner();
  }

  function dispatch(action) {
    //Call the reducer to get the new state
    state = reducer(state, action);
    //Notify the subscribers
    for (let i = 0; i < listners.length; i++) {
      // console.log(listners[i]);
      listners[i]();
    }
  }
  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
