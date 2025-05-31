import { useDispatch } from 'react-redux';
import { moveFilter } from './../store/slices/groupSlice';

const useFilterDragAndDrop = (id, fromGroupId) => {
  const dispatch = useDispatch();

  const handleDragStart = (event) => {
    event.stopPropagation();
    event.dataTransfer.setData('id', id);
    event.dataTransfer.setData('fromGroupId', fromGroupId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, toGroupId) => {
    event.preventDefault();
    event.stopPropagation();

    const draggedid = event.dataTransfer.getData('id');
    const sourceGroupId = event.dataTransfer.getData('fromGroupId');

    if (
      draggedid &&
      sourceGroupId &&
      toGroupId &&
      sourceGroupId !== toGroupId
    ) {
      dispatch(
        moveFilter({
          id: draggedid,
          fromGroupId: sourceGroupId,
          toGroupId: toGroupId,
        })
      );
    }
  };

  return { handleDragStart, handleDragOver, handleDrop };
};

export default useFilterDragAndDrop;
