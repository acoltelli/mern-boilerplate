import axios from "axios";
import {
  GET_DATA
} from "./types";


// // Create Habit
// export const createHabit = habitData => dispatch => {
//   axios
//     .post("/api/habits/create", habitData)
//     .then(res =>
//       dispatch({
//         type: CREATE_HABIT,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };



// Get all habits for specific user
export const getData = () => dispatch => {
  // dispatch(setHabitsLoading());
  axios
    .get("/api/data")
    .then(res =>
      dispatch({
        type: GET_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DATA,
        payload: null
      })
    );
};
