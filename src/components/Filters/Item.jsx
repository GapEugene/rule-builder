import { useEffect, useState } from 'react';
import fields from './fields';
import { useDispatch } from 'react-redux';
import { removeFilter, updateFilter } from './../../store/slices/groupSlice';
import useFilterDragAndDrop from './../../hooks/useFilterDragAndDrop';

const Item = ({ id, field = '', operator = '', value = '', groupId, isDisabled }) => {
  const dispatch = useDispatch();

  const [selectedField, setSelectedField] = useState(field);
  const [selectedOperator, setSelectedOperator] = useState(operator);
  const [inputValue, setInputValue] = useState(value);

  const { handleDragStart } = useFilterDragAndDrop(id, groupId);

  useEffect(() => {
    if (!fields[selectedField]?.operators.some(operator => operator.value === selectedOperator)) {
      setSelectedOperator('');
    }
  }, [selectedField, selectedOperator]);

  useEffect(() => {
    if (selectedField && selectedOperator && inputValue) {
      dispatch(updateFilter({
        groupId,
        id,
        changes: {
          field: selectedField,
          operator: selectedOperator,
          value: inputValue,
        },
      }));
    }
  }, [dispatch, groupId, id, selectedField, selectedOperator, inputValue]);

  const handleRemove = () => {
    dispatch(removeFilter({ groupId, id }));
  };

  return (
    <div
      className="d-flex mt-2"
      draggable={!isDisabled}
      onDragStart={handleDragStart}
    >

      <div className="w-25 me-2">
        <select
          className="form-select"
          value={selectedField}
          onChange={(event) => setSelectedField(event.target.value)}
          disabled={isDisabled}
        >
          <option value="">Выберите поле</option>
          {Object.entries(fields).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {selectedField && (
        <div className="w-25 me-2">
          <select
            className="form-select"
            value={selectedOperator}
            onChange={(event) => setSelectedOperator(event.target.value)}
            disabled={isDisabled}
          >
            <option value="">Выберите оператор</option>
            {fields[selectedField].operators.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      )}

      <div className="w-25 me-2">
        <input
          type="text"
          className="form-control"
          placeholder="Введите значение"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          disabled={isDisabled}
        />
      </div>

      <div>
        <button
          className="btn btn-outline-danger"
          onClick={handleRemove}
        >
          Удалить
        </button>
      </div>

    </div>
  );
};

export default Item;
