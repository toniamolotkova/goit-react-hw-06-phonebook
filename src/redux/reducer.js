import * as types from './types';
import { combineReducers } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            if (state.find(item => item.name === payload.name)) {
                toast.error(`${payload.name} is already in contacts`);
                return state;
            } else {
                return [...state, payload]
            }
        case types.DELETE:
            return state.filter(item => item.id !== payload)
        default:
        return state;
    } 
}

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTER:
            return payload;
        default:
            return state;
    }
     }

export default combineReducers({items, filter});