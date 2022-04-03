import { useSelector } from 'react-redux';

export const calculation = () => {
  return (dispatch) => {
    // const func = () => {

    // }
    setTimeout(() => {
      dispatch({ type: 'PLUS_COUNT' });
    }, 10);
  };
};
