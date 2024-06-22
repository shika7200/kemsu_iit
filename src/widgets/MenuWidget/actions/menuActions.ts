
export const filteredMenuItems = (items: MenuItemProps[], currentPath: string) => {
  return items.filter(item => item.href !== currentPath);
};
