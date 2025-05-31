import useFilterDragAndDrop from './../../hooks/useFilterDragAndDrop';
import Item from './Item';

const List = ({ items, groupId, isDisabled }) => {
  const { handleDragOver, handleDrop } = useFilterDragAndDrop();

  return (
    <div
      className="bg-light p-3"
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, groupId)}
    >
      {items.map((item) => (
        <Item
          key={item.id}
          groupId={groupId}
          isDisabled={isDisabled}
          {...item}
        />
      ))}
    </div>
  );
};

export default List;
