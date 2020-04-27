import items from "../../components/section-items/section-items.data";

const INITIAL_STATE = {
  sections: items,
};

export const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionReducer;