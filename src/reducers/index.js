import questions from "../components/Data";

const intialState={
  questions : []
}

function reducer(state=intialState,action){
    console.log(action)
    const {payload}=action
    console.log(payload)
    switch(action.type){
        case 'FETCH_QUESTIONS':
        return {
          ...state,
          questions:payload
        }
        default:
        return state
    }
}

export default reducer