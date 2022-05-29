module.exports = function listReducer(state = [{}], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]

    case 'REMOVE_ITEM':
      if (action.payload >= state.length || action.payload < 0 || state.length === 0) return state

      const newArr = state.filter((item, index) => index !== action.payload)
      return newArr

    default:
      return state
  }
}