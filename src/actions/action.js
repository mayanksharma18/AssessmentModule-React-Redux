import axios from "axios";
const FETCH_QUESTIONS = "FETCH_QUESTIONS";

// export const quiz=()=>{
//     return{
//         type:FETCH_QUESTIONS,
//         payload:function data(){
//             return
//         }
//     }
// }

export function fetch(questions) {
  console.log(questions);
  return {
    type: FETCH_QUESTIONS,
    payload: questions
  };
}

export function fetchData() {
  return dispatch => {
    axios
      .get("http://localhost:3001/allquestions")
      .then(resp => dispatch(fetch(resp.data)));
  };
}
