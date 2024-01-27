import { UserModel } from "../models/UserModel";
import { useGet } from ".";

export const useUsers = (onError?: (error: unknown) => void) => {
  return useGet<UserModel[]>({
    path: "/users",
    onError,
  });
};

export const useUserDetail = (params: {
  id?: number;
  onError?: (error: unknown) => void;
}) => {
  return useGet<UserModel>({
    path: `/users/${params.id}`,
    skip: !params.id,
    onError: params.onError,
  });
};

export const useUserInfo = (onError?: (error: unknown) => void) => {
  return useGet<UserModel>({
    path: `/users/me`,
    onError,
  });
};
