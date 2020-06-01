const initialState={
  questions : []
}

function reducer(state = initialState, action){
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