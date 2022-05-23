import React, { createContext, useState, useContext } from "react";
import { setTimeout } from "timers";
import { api } from "../services/api";
import { SimulationStrock, Strock } from "./types";

interface StrockContextData {
  loading: boolean;
  currentStrock: Strock;
  currentStrock2: Strock;
  SetLoader(status: boolean): void;
  GetCurrentStrock(name: string): void;
  CompareStrocks(name: string, name2: string): void;
  GetSimulationStrock(
    name: string,
    qtd: number,
    date: string
  ): Promise<SimulationStrock | void>;
}
interface Props {
  children: JSX.Element;
}

const StrockContext = createContext<StrockContextData>({} as StrockContextData);

const StrockProvider: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [currentStrock, setCurrentStrock] = useState<Strock>({} as Strock);
  const [currentStrock2, setCurrentStrock2] = useState<Strock>({} as Strock);

  async function CompareStrocks(name: string, name2: string) {
    await GetCurrentStrock(name2, setCurrentStrock2);
    GetCurrentStrock(name);
  }

  async function GetCurrentStrock(
    name: string,
    action?: React.Dispatch<React.SetStateAction<Strock>>
  ) {
    api
      .get(`/stock/${name}/quote`)
      .then((res) => {
        const result: Strock = res.data;
        !action ? setCurrentStrock(result) : action(result);
        GetHistoryStrock(name, !action ? setCurrentStrock : action);
      })
      .catch((error) => {
        alert("Erro ao buscar Ação 😣");
        console.error(error);
      });
  }

  async function GetSimulationStrock(name: string, qtd: number, date: string) {
    const res = api
      .get(`/stocks/${name}/gains?purchasedAt=${date}&purchasedAmount=${qtd}`)
      .then((res) => {
        const result: SimulationStrock = res.data;
        console.log(result);
        return result;
      })
      .catch((error) => {
        alert("Erro ao buscar Ação 😣");
        console.error(error);
      });

    return res;
  }

  async function GetHistoryStrock(
    name: string,
    action: React.Dispatch<React.SetStateAction<Strock>>
  ) {
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
        action((currentStrock) => ({
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
        currentStrock2,
        GetCurrentStrock,
        GetSimulationStrock,
        SetLoader,
        CompareStrocks,
      }}
    >
      {children}
    </StrockContext.Provider>
  );
};
export { StrockProvider, StrockContext };
