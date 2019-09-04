import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducer from '../Reducers/reducer';

export const store = createStore(
    combineReducers({
        state: reducer
    })
)

const initialState = {
    todos: []
  }  