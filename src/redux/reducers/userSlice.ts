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
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        toast.success(action.payload.message);
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message);
      });
  },
});

export default userSlice.reducer;
