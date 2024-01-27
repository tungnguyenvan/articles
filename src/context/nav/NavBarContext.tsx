import React, { useCallback, useReducer } from "react";

enum NavBarContextAction {
  TOGGLE = "TOGGLE",
}

interface NavBarContextState {
  open: boolean;
}

type NavBarDispatcher = (
  state: NavBarContextState,
  action: NavBarContextAction
) => NavBarContextState;

interface NavBarContextType {
  state: NavBarContextState;
  dispatch: React.Dispatch<NavBarContextAction>;
}

const NavBarContext = React.createContext<NavBarContextType>({
  state: { open: true },
  dispatch: () => {},
});
const NavBarContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const navBarDispatcher: NavBarDispatcher = useCallback(
    (state: NavBarContextState, action: NavBarContextAction) => {
      switch (action) {
        case NavBarContextAction.TOGGLE:
          return { ...state, open: !state.open };
        default:
          return state;
      }
    },
    []
  );

  const [state, dispatch] = useReducer(navBarDispatcher, { open: true });

  return (
    <NavBarContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

const useNavBarContext = (): [
  NavBarContextState,
  React.Dispatch<NavBarContextAction>
] => {
  const context = React.useContext(NavBarContext);
  if (context === undefined) {
    throw new Error("useNavBarContext must be used within a NavBarContext");
  }

  return [context.state, context.dispatch];
};

export { useNavBarContext, NavBarContextProvider, NavBarContextAction };
