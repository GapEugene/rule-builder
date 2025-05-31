import { useDispatch } from 'react-redux';
import { moveGroup } from './../store/slices/groupSlice';

const useGroupDragAndDrop = (id = null) => {
  const dispatch = useDispatch();

  const handleDragStart = (event) => {
    event.stopPropagation();
    event.dataTransfer.setData('draggedId', id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const draggedId = event.dataTransfer.getData('draggedId');
    dispatch(moveGroup({ draggedId, id }));
  };

  return { handleDragStart, handleDragOver, handleDrop };
};

export default useGroupDragAndDrop;
