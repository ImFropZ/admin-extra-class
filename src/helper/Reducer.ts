interface Action {
  type: string;
  payload?: boolean | string | number;
}

export const ACTION = {
  //** Input */
  NEW_NAME: "newName",
  NEW_TEACHER: "newTeacher",
  NEW_PRICE: "newPrice",
  NEW_GENDER: "newGender",
  NEW_EMAIL: "newEmail",
  NEW_EDIT_ID: "newEditId",
  NEW_SEARCH_VALUE: "newSearchValue",
  NEW_DESCRIPTION: "newDescription",

  /** Toggle */
  TG_SEARCH: "tgSearch",
};

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case ACTION.NEW_NAME:
      return { ...state, name: action.payload?.toString() || "" };
    case ACTION.NEW_GENDER:
      return { ...state, gender: action.payload?.toString() || "" };
    case ACTION.NEW_EMAIL:
      return { ...state, email: action.payload?.toString() || "" };
    case ACTION.NEW_EDIT_ID:
      return { ...state, editId: action.payload?.toString() || "" };
    case ACTION.NEW_SEARCH_VALUE:
      return { ...state, searchValue: action.payload?.toString() || "" };
    case ACTION.TG_SEARCH:
      return { ...state, isSearch: !state.isSearch };
    case ACTION.NEW_TEACHER:
      return { ...state, teacher: action.payload?.toString() || "" };
    case ACTION.NEW_PRICE:
      return { ...state, price: action.payload || 0 };
    case ACTION.NEW_DESCRIPTION:
      return { ...state, description: action.payload?.toString() || "" };
    default:
      throw new Error();
  }
};
export default reducer;
