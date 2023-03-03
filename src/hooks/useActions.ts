import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import actionsCreators from '../store/actions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
};
