import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
// state = reducer(state, action);
// notify the subscribers

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug2" }));
// unsubscribe();

// store.dispatch(bugRemoved(2));
store.dispatch(bugResolved({ id: 1 }));
console.log(store.getState());

// Build your own redux
// import store from "./customStore";
// import * as actions from "./actions";
// store.subscribe(() => {
//   console.log("Store Changed!");
// });
// store.dispatch(actions.bugAdded("Bug1"));
// console.log(store.getState());
