const initialState = {
  name: "Nithin",
  course: "React",
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: "Rahul",
      };

    case "CHANGE_COURSE":
      return {
        ...state,
        course: "Redux",
      };

    default:
      return state;
  }
};

export default studentReducer;