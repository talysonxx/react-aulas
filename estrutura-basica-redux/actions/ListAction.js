const addItemAction = item => {return {type: 'ADD_ITEM', payload: item || null}}
const removeItemAction = position => {return {type: 'REMOVE_ITEM', payload: position || -1}}

module.exports = {
  addItemAction,
  removeItemAction
}