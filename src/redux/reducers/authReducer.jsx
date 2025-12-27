
const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
  {
    nom: "123",
    prenom: "123",
    username: "123",
    email: "khadija@example.com",
    password: "123"  
  },
  
]
};

export const authReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN':
      const user = state.users.find(u => u.username === action.payload.username && u.password === action.payload.password);
      if(user){
        return { ...state, isAuthenticated: true, user };
      } else {
        alert('login ou mot de passe n’est pas valide');
        return state;
      }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'REGISTER':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};