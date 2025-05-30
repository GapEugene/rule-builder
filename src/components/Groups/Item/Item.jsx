import List from './../List';
import { Adder, Expander, Disabler, Excluder, Remover } from './../controls';

const Item = ({ id, name, isExpanded, isDisabled, isBlocked, parentDisabled, children }) => {
  const itemClassName = `m-2 p-2 border rounded ${parentDisabled && 'bg-body-tertiary'} ${isBlocked && 'bg-warning-subtle'} ${(!parentDisabled && !isBlocked) && 'bg-white'}`;

  const handleDragStart = (e) => {
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={itemClassName}
      draggable={true}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="d-flex">
        <p className="h6 my-auto me-auto">{name}</p>

        <Expander id={id} isExpanded={isExpanded} />
      </div>

      {isExpanded && (
        <>
          <div className="d-flex mt-2">
            <div className="me-auto">
              <Adder id={id} isDisabled={parentDisabled || isDisabled} />
            </div>
            <div className="ms-3">
              <Disabler id={id} isDisabled={isDisabled} parentDisabled={parentDisabled} />
              <Excluder id={id} isDisabled={parentDisabled || isDisabled} isBlocked={isBlocked} />
              <Remover id={id} isDisabled={parentDisabled || isDisabled} />
            </div>
          </div>

          {children.length > 0 && <List items={children} parentDisabled={isDisabled || parentDisabled} />}
        </>
      )}
    </div>
  );
};

export default Item;
