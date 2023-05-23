export const getMenuItemsWithChildeFormat = (arr, parent_id = null) =>
    arr.filter(item => item.parent_id === parent_id)
        .map(item => ({
            ...item,
            children: getMenuItemsWithChildeFormat(arr, item.id)
        }));