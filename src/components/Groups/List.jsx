import Item from './Item';

const List = ({ items, openEditor, parentDisabled = false }) => {
  return (
    items.map((item) => (
      <Item
        key={item.id}
        parentDisabled={parentDisabled}
        openEditor={openEditor}
        {...item}
      />
    ))
  );
};

export default List;
