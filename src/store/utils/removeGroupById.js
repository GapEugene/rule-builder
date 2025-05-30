const removeGroupById = (groups, id) => {
  return groups
    .filter((group) => group.id !== id)
    .map((group) => ({ ...group, children: removeGroupById(group.children, id) }));
};

export default removeGroupById;
