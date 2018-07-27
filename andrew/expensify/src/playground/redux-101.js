// Basic setup
import { createStore } from 'redux';

//action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 2 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({ reset = 0 } = {}) => ({
    type: 'RESET',
    reset
});

//Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: action.reset
            };
            default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 1021 }));

store.dispatch(setCount({ count: 55 }));

store.dispatch(resetCount({ reset: 2 }));