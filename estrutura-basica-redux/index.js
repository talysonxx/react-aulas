const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const {incrementAction, decrementAction} = require('./actions/CounterActions')
const {addItemAction, removeItemAction} = require('./actions/ListAction')

const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')



const allReducers = combineReducers({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(allReducers)
// console.log(store.getState())

// executa quando o estado é mudado
store.subscribe(() => console.log(store.getState().counter))

store.dispatch(addItemAction('bolsonaro'))