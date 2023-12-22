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
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(
          "Registration failed. Please try again."
        );
      }
    }
  }
);

export const verifyUserAccount = async (token: any) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}users/verify-email/${token}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to verify user account");
  }
};
