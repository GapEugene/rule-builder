import { useDispatch } from 'react-redux';
import { addGroup } from './../../../store/slices/groupSlice';

const Adder = ({ id = null, isDisabled }) => {
  const dispatch = useDispatch();

  const handleAddGroup = (parentId) => {
    dispatch(addGroup(parentId));
  };

  return (
    <button
      className="btn btn-primary"
      onClick={() => handleAddGroup(id)}
      disabled={isDisabled}
    >
      Добавить группу
    </button>
  );
};

export default Adder;
