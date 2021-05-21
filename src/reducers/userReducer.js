const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
          name: action.name,
          role: action.role,
          set: true
        }
    default:
      return state
    }
}

export default userReducer