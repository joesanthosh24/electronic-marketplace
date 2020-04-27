export const addItem = (items, itemToAdd) => {
  console.log(items);
  const existingItem = items.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return items.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const decreaseQuantity = (items, itemToDecrease) => {
  const existingItem = items.find((item) => item.id === itemToDecrease.id);

  if (existingItem.quantity === 1) {
    return items.filter((item) => item.id !== itemToDecrease.id);
  }

  return items.map((item) =>
    item.id === itemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
