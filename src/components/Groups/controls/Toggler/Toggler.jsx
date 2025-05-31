import { useDispatch } from 'react-redux';
import { updateGroup } from './../../../../store/slices/groupSlice';
import styles from './Toggler.module.css';

const Toggler = ({ id, isDisabled, logic }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    const nextLogic = logic === 'AND' ? 'OR' : 'AND';

    dispatch(updateGroup({
      id,
      changes: {
        logic: nextLogic,
      },
    }));
  };

  return (
    <label className={styles.toggler}>
      <input
        className={styles.checkbox} 
        type="checkbox"
        onChange={handleToggle}
        checked={logic === 'OR'}
        disabled={isDisabled}
      />
      <span className={styles['value-1']}>AND</span>
      <span className={styles['value-2']}>OR</span>
    </label>
  );
};

export default Toggler;
