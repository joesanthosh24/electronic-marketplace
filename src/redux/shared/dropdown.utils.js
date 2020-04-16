export const addItemToDropDown = (dropDownItems, itemToAdd) => {
  const existingItem = dropDownItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return dropDownItems.map((dropDownItem) =>
      dropDownItem.id === itemToAdd.id
        ? { ...dropDownItem, quantity: dropDownItem.quantity + 1 }
        : dropDownItem
    );
  }

  return [...dropDownItems, { ...itemToAdd, quantity: 1 }];
};
