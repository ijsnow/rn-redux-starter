// Import action handlers

// Action Handlers
const REDUCER_ACTION_HANDLERS = {
  /*
   *  [ACTION_NAME]: (state, action) => {
   *    return { ...state, stuff: action.payload }
   *  }
   */
};

initialState = {};

// Reducer
export default function userReducer (state = initialState, action) {
  const handler = REDUCER_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
