import { createSlice } from "@reduxjs/toolkit"

// slide auth
const initialAuthState = {
    isAuthenticated : false,
  }
  
  
  
  const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
      login(state){
        state.isAuthenticated = true
      },
      logout(state){
        state.isAuthenticated = false
      }
  
    }
  })
  
  export const authActions = authSlice.actions;
  export default authSlice.reducer;