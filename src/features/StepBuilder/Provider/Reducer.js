const InitialState = {
  currentStep: 0,
  menu: false,
};

const Reducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'PREVIOUS':
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case 'NEXT':
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case 'SET_STEP':
      return {
        ...state,
        currentStep: data,
      };
    case 'SET_MENU':
      return {
        ...state,
        menu: data,
      };
    default:
      return state;
  }
};

export { InitialState };

export default Reducer;
