import { PermissionItemProps } from '~/modal/permission';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {}

export interface RootState {
  user: User | null;
  permissions: PermissionItemProps[];
}

const initialState: RootState = {
  user: null,
  permissions: [],
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    SET_USER(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    SET_PERMISSIONS(state, action: PayloadAction<PermissionItemProps[]>) {
      state.permissions = action.payload;
    },
  },
});

const { actions, reducer } = storeSlice;
export const { SET_PERMISSIONS, SET_USER } = actions;
export default reducer;
