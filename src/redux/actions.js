import * as types from './types';
import shortid from 'shortid';


export const addContact = ({ name, number }) => ({
    type: types.ADD,
        payload: {
        id: shortid.generate(),
      name,
      number,
        }
})

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

