import { useSelector } from 'react-redux';
import List from './List';
import { Adder } from './controls';

const Groups = () => {
  const groups = useSelector((state) => state.groups);

  return (
    <>
      <List items={groups} />
      <Adder />
    </>
  );
};

export default Groups;
