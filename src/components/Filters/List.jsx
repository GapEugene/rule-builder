import Item from './Item';

const List = ({ items, groupId, isDisabled }) => {
  return (
    items.map((item) => (
      <Item key={item.id} groupId={groupId} isDisabled={isDisabled} {...item} />
    ))
  );
};

export default List;
