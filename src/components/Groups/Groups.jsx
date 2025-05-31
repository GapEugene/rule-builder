import { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import { Adder } from './controls';
import Editor from './Editor';

const Groups = () => {
  const groups = useSelector((state) => state.groups);
  const initialEditData = { isOpen: false, id: null, name: '' };
  const [editData, setEditData] = useState(initialEditData);

  return (
    <>
    
      <List
        items={groups}
        openEditor={(id, name) => setEditData({ isOpen: true, id, name })}
      />

      <Adder />

      <Editor editData={editData} setEditData={setEditData} initialEditData={initialEditData} />
    </>
  );
};

export default Groups;
