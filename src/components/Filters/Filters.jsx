import { useDispatch } from 'react-redux';
import { addFilter } from './../../store/slices/groupSlice';
import List from './List';

const Filters = ({ filters, groupId, isDisabled }) => {
  const dispatch = useDispatch();

  const handleAddFilter = () => {
    dispatch(addFilter(groupId));
  };

  return (
    <div className="mt-2">
      <div className="mb-2">
        <List items={filters} groupId={groupId} isDisabled={isDisabled} />
      </div>

      <button
        className="btn btn-info"
        disabled={isDisabled}
        onClick={handleAddFilter}
      >
        Добавить фильтр
      </button>
    </div>
  );
};

export default Filters;
