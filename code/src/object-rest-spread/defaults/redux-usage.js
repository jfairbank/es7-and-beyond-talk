const INITIAL_CONTACT = { name: '', email: '' };

function reducer(state = INITIAL_CONTACT, action) {
  switch(action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
