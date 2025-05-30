const findGroupById = (groups, id) => {
  for (const group of groups) {
    if (group.id === id) return group;
    
    if (group.children.length > 0) {
      const found = findGroupById(group.children, id);
      if (found) return found;
    }
  }

  return null;
};

export default findGroupById;
