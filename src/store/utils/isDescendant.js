const isDescendant = (group, id) => {
  if (!group.children || group.children.length === 0) return false;

  for (const child of group.children) {
    if (child.id === id) return true;
    if (isDescendant(child, id)) return true;
  }

  return false;
}

export default isDescendant;
