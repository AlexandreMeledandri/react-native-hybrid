const initialState = { scoreBoard: [] }

function addHistory(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_HISTORY':
    nextState = [{
        ...state,
        scoreBoard: [...state.scoreBoard, action.value]
    }]
    console.log(nextState);
    return nextState || state
    default:
        return state
  }
}
export default addHistory