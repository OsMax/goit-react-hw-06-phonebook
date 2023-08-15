import React from 'react';
import css from './Filter.module.css';
import { setFilter } from 'redux/phoneSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const setNewFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <input className={css.inputFind} type="text" onInput={setNewFilter} />
      <span className={css.textFind}>Find contacts by name</span>
    </div>
  );
};

export default Filter;
