import { useDispatch } from 'react-redux';
import { removeGroup } from './../../../store/slices/groupSlice';

const Remover = ({ id, isDisabled }) => {
  const dispatch = useDispatch();
  
  const handleRemove = (id) => {
    dispatch(removeGroup(id));
  };
  
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => handleRemove(id)}
      disabled={isDisabled}
    >
      Удалить
    </button>
  );
};

export default Remover;
