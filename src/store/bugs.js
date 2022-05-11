// //ActionTypes
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// //Action Creators
// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description,
//   },
// });

// export const bugRemoved = (id) => ({
//   type: BUG_REMOVED,
//   payload: {
//     id,
//   },
// });

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id,
//   },
// });

// //Reducer
// let lastId = 0;

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
// }

import { createAction, createReducer } from "@reduxjs/toolkit";

// //Action Creators
export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

//Reducer
let lastId = 0;

export default createReducer([], {
  //key: value
  //actions: functions (event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
