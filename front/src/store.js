import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const number = 100;

function reducer(state = number,action) {
    return state
}
let store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
