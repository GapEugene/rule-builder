import { useDispatch } from 'react-redux';
import { updateGroup } from './../../../store/slices/groupSlice';
import clsx from 'clsx';

const Expander = ({ id, isExpanded }) => {
  const dispatch = useDispatch();

  const handleExpander = (id) => {
    dispatch(updateGroup({
      id,
      changes: {
        isExpanded: !isExpanded,
      }
    }));
  };

  return (
    <button className="btn btn-sm btn-outline-secondary ms-3" onClick={() => handleExpander(id)}>
      <i className={clsx('fa-solid', isExpanded ? 'fa-chevron-up' : 'fa-chevron-down')} />
    </button>
  );
};

export default Expander;
