import { createSlice, nanoid } from '@reduxjs/toolkit';
import { findGroupById, isDescendant, removeGroupById } from './../utils';

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
            filters: [],
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
      const { draggedId, id: targetId } = action.payload;
      const draggedGroup = findGroupById(state, draggedId);

      if (
        !draggedGroup ||
        draggedId === targetId || 
        (targetId !== null && isDescendant(draggedGroup, targetId))
      ) {
        return state;
      }

      const nextState = removeGroupById(state, draggedId);

      if (targetId === null) {
        nextState.push(draggedGroup);
      } else {
        const targetGroup = findGroupById(nextState, targetId);

        if (targetGroup) {
          targetGroup.children.push(draggedGroup);
        } else {
          nextState.push(draggedGroup);
        }
      }

      return nextState;
    },
    removeGroup: (state, action) => {
      const id = action.payload;
      return removeGroupById(state, id);
    },

    addFilter: {
      reducer: (state, action) => {
        const { groupId, filter } = action.payload;
        const group = findGroupById(state, groupId);

        group.filters.push(filter);
      },
      prepare: (groupId) => ({
        payload: {
          groupId,
          filter: {
            id: nanoid(),
            field: '',
            operator: '',
            value: '',
          },
        },
      }),
    },
    updateFilter: (state, action) => {
      const { groupId, id, changes } = action.payload;
      const group = findGroupById(state, groupId);
      const filter = group.filters.find((filter) => filter.id === id);

      Object.assign(filter, changes);
    },
    moveFilter: (state, action) => {
      
    },
    removeFilter: (state, action) => {
      const { groupId, id } = action.payload;
      const group = findGroupById(state, groupId);
      group.filters = group.filters.filter((filter) => filter.id !== id);
    },
  },
});

export const {
  addGroup, updateGroup, moveGroup, removeGroup,
  addFilter, updateFilter, moveFilter, removeFilter,
} = groupSlice.actions;

export default groupSlice.reducer;
