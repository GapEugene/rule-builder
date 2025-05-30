import { useDispatch } from 'react-redux';
import { updateGroup } from './../../../store/slices/groupSlice';

const Excluder = ({ id, isDisabled, isBlocked }) => {
  const dispatch = useDispatch();

  const handleExcluder = (id) => {
    dispatch(updateGroup({
      id,
      changes: {
        isBlocked: !isBlocked,
      }
    }));
  };

  return (
    <button
      className={`btn me-2 ${isBlocked ? 'btn-warning' : 'btn-outline-warning'}`}
      onClick={() => handleExcluder(id)}
      disabled={isDisabled}
    >
      {isBlocked ? 'Включить' : 'Исключить'}
    </button>
  );
};

export default Excluder;
