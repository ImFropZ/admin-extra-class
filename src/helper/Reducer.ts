interface Action {
  type: string;
  payload?: boolean | string | number;
}

interface State {
  name?: string;
  gender?: string;
  email?: string;
  editId?: string;
  searchValue?: string;
  isSearch?: boolean;
}

export const ACTION = {
  NEW_NAME: "newName",
  NEW_GENDER: "newGender",
  NEW_EMAIL: "newEmail",
  NEW_EDIT_ID: "newEditId",
  NEW_SEARCH_VALUE: "newSearchValue",
  TG_SEARCH: "tgSearch",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "newName":
      return { ...state, name: action.payload?.toString() };
    case "newGender":
      return { ...state, gender: action.payload?.toString() };
    case "newEmail":
      return { ...state, email: action.payload?.toString() };
    case "newEditId":
      return { ...state, editId: action.payload?.toString() };
    case "newSearchValue":
      return { ...state, searchValue: action.payload?.toString() };
    case "tgSearch":
      return { ...state, isSearch: !state.isSearch };
    default:
      throw new Error();
  }
};
export default reducer;
