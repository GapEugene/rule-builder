import clsx from 'clsx';
import List from './List';
import { Adder, Expander, Disabler, Excluder, Remover, Toggler } from './controls';
import Filters from './../Filters';
import useGroupDragAndDrop from './../../hooks/useGroupDragAndDrop';

const Item = ({
  id, name, isExpanded, isDisabled, isBlocked,
  logic, children, filters, parentDisabled, openEditor,
}) => {

  const { handleDragStart, handleDragOver, handleDrop } = useGroupDragAndDrop(id);

  const itemClassName = clsx(
    'm-2 p-2 border rounded',
    logic === 'AND' ? 'border-primary' : 'border-success',
    isDisabled && 'bg-body-tertiary',
    isBlocked && 'bg-warning-subtle',
    !parentDisabled && !isBlocked && 'bg-white'
  );

  return (
    <div
      className={itemClassName}
      draggable={!(isDisabled || parentDisabled)}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >

      <div className="d-flex">
        <div className="d-flex align-items-center my-auto me-auto">
          <p className="h6 mb-0">{name}</p>
          <button
            className="btn btn-sm btn-outline-secondary border-0"
            onClick={() => openEditor(id, name)}
            disabled={parentDisabled || isDisabled}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>

        <Toggler id={id} isDisabled={parentDisabled || isDisabled} logic={logic} />

        <Expander id={id} isExpanded={isExpanded} />
      </div>

      {isExpanded && (
        <>
          <Filters
            groupId={id}
            filters={filters}
            isDisabled={parentDisabled || isDisabled}
          />

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

          {children.length > 0 && <List items={children} openEditor={openEditor} parentDisabled={isDisabled || parentDisabled} />}
        </>
      )}

    </div>
  );
};

export default Item;
