import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from "redux-thunk"

import combineReducers from './reducer/index'

const store = createStore(combineReducers, applyMiddleware(thunk))

const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider