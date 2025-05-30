import Item from './Item';

const List = ({ items, parentDisabled = false }) => {
  return (
    items.map((item) => (
      <Item
        key={item.id}
        parentDisabled={parentDisabled}
        {...item}
      />
    ))
  );
};

export default List;
