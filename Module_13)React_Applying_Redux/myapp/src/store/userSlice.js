import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API call
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
});

const userSlice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    addUser: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(user => user.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
