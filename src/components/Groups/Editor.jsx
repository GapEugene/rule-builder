import { useDispatch } from 'react-redux';
import Modal from './../Modal';
import { updateGroup } from './../../store/slices/groupSlice';

const Editor = ({ editData, setEditData, initialEditData }) => {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateGroup({
      id: editData.id,
      changes: {
        name: editData.name.trim() ? editData.name : 'Безымянная',
      },
    }));

    setEditData(initialEditData);
  };

  return (
    <Modal
      title="Редактирование заголовка группы"
      isOpen={editData.isOpen}
      handleClose={() => setEditData(initialEditData)}
      controls={() => (
        <>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => setEditData(initialEditData)}
          >
            Отмена
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
          >
            Сохранить
          </button>
        </>
      )}
    >
      <input
        type="text"
        className="form-control"
        value={editData.name}
        onChange={(event) => setEditData((state) => ({ ...state, name: event.target.value }))}
      />
    </Modal>
  );
};

export default Editor;
