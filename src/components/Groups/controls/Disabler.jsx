import { useDispatch } from 'react-redux';
import { updateGroup } from './../../../store/slices/groupSlice';

const Disabler = ({ id, isDisabled, parentDisabled }) => {
  const dispatch = useDispatch();

  const handleDisabler = (id) => {
    dispatch(updateGroup({
      id,
      changes: {
        isDisabled: !isDisabled,
      }
    }));
  };
  
  return (
    <button
      className={`btn me-2 ${isDisabled ? 'btn-secondary' : 'btn-outline-secondary'}`}
      onClick={() => handleDisabler(id)}
      disabled={parentDisabled}
    >
      {isDisabled ? 'Разблокировать' : 'Заблокировать'}
    </button>
  );
};

export default Disabler;
