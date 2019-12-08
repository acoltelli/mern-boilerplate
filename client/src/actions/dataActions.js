import axios from "axios";
import { GET_DATA } from "./types";


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

export const getData = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
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
