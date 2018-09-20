
const initialState = {lastScore: []}

function addHistorique(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_HISTORY':
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