
const initialState = {lastScore: []}

function addHistorique(state, action) {
    let nextState
    switch (action.type) {
        case 'PUT_NEW_SCORE':
        nextState = {
            ...state,
            lastScore: [...state.lastScore, action.value]
        }
            return nextState || state
    default:
      return state
    }
  }
  export default addHistorique