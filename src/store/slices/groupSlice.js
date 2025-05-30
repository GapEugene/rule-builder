import { createSlice, nanoid } from '@reduxjs/toolkit';
import findGroupById from './../utils/findGroupById';
import removeGroupById from './../utils/removeGroupById';

const initialState = [];

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: {
      reducer: (state, action) => {
        const { parentId, group } = action.payload;

        if (parentId === null) {
          state.push(group);
        } else {
          const parentGroup = findGroupById(state, parentId);
          if (parentGroup) parentGroup.children.push(group);
        }
      },
      prepare: (parentId) => ({
        payload: {
          parentId,
          group: {
            id: nanoid(),
            name: 'Новая группа',
            logic: 'AND',
            isExpanded: true,
            isBlocked: false,
            isDisabled: false,
            children: [],
          },
        },
      }),
    },
    updateGroup: (state, action) => {
      const { id, changes } = action.payload;
      const group = findGroupById(state, id);
      Object.assign(group, changes);
    },
    moveGroup: (state, action) => {
      const { id, parentId } = action.payload;

      console.log(id, parentId);
    },
    removeGroup: (state, action) => {
      const id = action.payload;
      return removeGroupById(state, id);
    },
  },
});

export const { addGroup, updateGroup, moveGroup, removeGroup } = groupSlice.actions;
export default groupSlice.reducer;
