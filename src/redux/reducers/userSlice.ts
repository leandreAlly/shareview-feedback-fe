import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { UserRegister } from "../../utils/types/user";
import { registerUser } from "../action/userAction";

interface UserState {
  data: UserRegister[];
  loading: boolean;
  error: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<UserRegister>) => {
          state.loading = false;
          state.data.push(action.payload);
          state.error = null;
          toast.success("Registration successful!");
        }
      )
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = null;
        toast.error("Registration failed. Please try again.");
      });
  },
});

export default userSlice.reducer;
