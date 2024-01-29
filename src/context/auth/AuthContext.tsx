import React, { useCallback } from "react";
import { UserModel } from "../../models/UserModel";

export enum AuthActionType {
  SET_USER = "SET_USER",
  LOG_OUT = "LOG_OUT",
}

interface AuthState {
  user?: UserModel;
}

type AuthContextDispatcher = (
  state: AuthState,
  action: { type: AuthActionType; data: Partial<AuthState> }
) => AuthState;

interface AuthContextProps {
  state: AuthState;
  dispatch: React.Dispatch<{ type: AuthActionType; data: Partial<AuthState> }>;
}

const initializeContext: AuthContextProps = {
  state: {
    user: undefined,
  },

  dispatch: (action: { type: AuthActionType; data: Partial<AuthState> }) => {
    throw new Error("AuthContextProvider not initialized");
  },
};

const AuthContext = React.createContext<AuthContextProps>(initializeContext);
export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatcher: AuthContextDispatcher = useCallback(
    (
      state: AuthState,
      action: { type: AuthActionType; data: Partial<AuthState> }
    ) => {
      switch (action.type) {
        case AuthActionType.SET_USER: {
          return { ...state, user: action.data.user };
        }
        case AuthActionType.LOG_OUT: {
          return { ...state, user: undefined };
        }

        default: {
          return state;
        }
      }
    },
    []
  );

  const [state, dispatch] = React.useReducer(
    dispatcher,
    initializeContext.state
  );

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
