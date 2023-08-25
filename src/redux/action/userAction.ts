import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserRegister } from "../../utils/types/user";
import { BASE_API_URL } from "../../utils/constants";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData: UserRegister, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}users/register`,
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
