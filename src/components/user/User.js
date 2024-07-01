import { createSlice } from '@reduxjs/toolkit';
const user = createSlice({
    name:'user',
    initialState:{
        username:'',
        phno:'',
        address:'',
    },
    reducers:{
        updateUser: (state, action) => {
            const { username, phno, address } = action.payload;
            if (username !== undefined) state.username = username;
            if (phno !== undefined) state.phno = phno;
            if (address !== undefined) state.address = address;
        },
        
    }
});

export const { updateUser } = user.actions;
export default user.reducer;