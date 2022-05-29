const {createStore, applyMiddleware} = require('redux')
const thunk = require('redux-thunk')
const fetch = require('node-fetch')

const initalState = [{id: 0, title: '', completed: false}]

const addItem = item => {return {type: 'ADD_ITEM', payload: item}}

const loadItemAndAdd = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
      .then(response => response.json())
      .then(json => {addItem(json)})
  }
}

const listReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]

      default:
        return state
  }
}

const store = createStore(listReducer, applyMiddleware(thunk))

store.dispatch(addItem({id: 1, title: 'Nova tarefa', completed: true}))
store.dispatch(loadItemAndAdd())

store.subscribe(() => {console.log(store.getState())})