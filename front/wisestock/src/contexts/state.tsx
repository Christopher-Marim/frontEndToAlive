import React, { createContext, useState, useContext } from "react";
import { api } from "../services/api";
import { Strock } from "./types";

interface StrockContextData {
  loading: boolean;
  currentStrock: Strock;
  SetLoader(status: boolean): void;
  GetCurrentStrock(name: string): void;
}
interface Props {
  children: JSX.Element;
}

const StrockContext = createContext<StrockContextData>({} as StrockContextData);

const StrockProvider: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentStrock, setCurrentStrock] = useState<Strock>({} as Strock);

  async function GetCurrentStrock(name: string) {
    api
      .get(`/stock/${name}/quote`)
      .then((res) => {
        const result: Strock = res.data;
        setCurrentStrock(result);
        GetHistoryStrock(name);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function GetHistoryStrock(name: string) {
    let dateaux = new Date();
    let date = dateaux.toISOString().split("T")[0];

    let dateDeacreasedMonthAux = new Date(
      dateaux.setMonth(dateaux.getMonth() - 1)
    );

    let dateDeacreased = dateDeacreasedMonthAux.toISOString().split("T")[0];

    api
      .get(`/stocks/${name}/history?from=${dateDeacreased}&to=${date}`)
      .then((res) => {
        const result: Strock = res.data;
        setCurrentStrock((currentStrock) => ({
          ...currentStrock,
          prices: result?.prices,
        }));
      })
      .catch((error) => {
        alert(error);
      });
  }

  const SetLoader = (status: boolean) => setLoading(status);

  return (
    <StrockContext.Provider
      value={{
        loading,
        currentStrock,
        GetCurrentStrock,
        SetLoader,
      }}
    >
      {children}
    </StrockContext.Provider>
  );
};
export { StrockProvider, StrockContext };
