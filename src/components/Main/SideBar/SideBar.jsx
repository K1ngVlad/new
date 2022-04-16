import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SideBar.css';

const SideBar = () => {
  const { score, level, levelScore } = useSelector((state) => state.score);
  useEffect(() => {
    if (score >= levelScore) {
      useDispatch({ type: 'LEVEL_UP' });
    }
  }, [score]);
  return (
    <div className="SideBar">
      <div className="NextTetromino">Следующая фигура</div>
      <div className="Level"> Уровень {level}</div>
      <div className="Score">Очки {score}</div>
    </div>
  );
};

export default SideBar;
