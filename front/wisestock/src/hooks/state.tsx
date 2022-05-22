import React, { createContext, useState, useContext } from "react";

interface ReduxContextData {
  loading: boolean;
  SetLoader(status: boolean): void;
  SetCurrentStrock(name: string): void;
}
interface Props {
  children: JSX.Element;
}
const ReduxContext = createContext<ReduxContextData>({} as ReduxContextData);

const ReduxProvider: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);

  async function SetCurrentStrock(name: string) {}

  const SetLoader = (status: boolean) => setLoading(status);

  return (
    <ReduxContext.Provider
      value={{
        loading,
        SetCurrentStrock,
        SetLoader,
      }}
    >
      {children}
    </ReduxContext.Provider>
  );
};

function useRedux() {
  const context = useContext(ReduxContext);

  if (!context) {
    throw new Error("useRedux must be used within an ReduxProvider.");
  }

  return context;
}

export { ReduxProvider, useRedux };
