import { useEffect, useState } from "react";
import { Strock } from "../../contexts/types";
import { color } from "../../global/styles";
import { useStrock } from "../../hooks/useStrock";
import { ChartStrock, DataChart } from "../ChartStrock";
import { InfosStrock } from "../InfosStrock";
import { Container, Wrapper } from "./styles";

interface infosStrock{
  min?:number;
  max?:number;
  currentSize?:number;
  data?:DataChart[]
}

export function CompareStrocksBody() {
  const [strock1, setStock1] = useState<infosStrock>({} as infosStrock)
  const [strock2, setStock2] = useState<infosStrock>( {} as infosStrock)
  const theme = color;

  const { currentStrock, currentStrock2 } = useStrock();

  function getInformations(strock: Strock) {
    var min = strock.prices
      ?.map((price) => price.closing)
      .reduce(function (a, b) {
        return Math.min(a, b);
      });

    var max = strock.prices
      ?.map((price) => price.closing)
      .reduce(function (a, b) {
        return Math.max(a, b);
      });

    let currentSize = strock.prices?.[0].volume;

    let data = strock.prices?.map((price) => {
      let aux = {
        name: price.pricedAt.slice(5, 7) + "/" + price.pricedAt.slice(-2),
        priceClosing: price.closing,
      };
      return aux;
    });

    return { min, max, currentSize, data };
  }

  useEffect(() => {
    
    setStock1(getInformations(currentStrock));
    setStock2(getInformations(currentStrock2));
  },[currentStrock, currentStrock2]);



 const data = strock1?.data?.map((x)=>{
    let data2aux = strock2?.data?.map((y)=>{
       if(x.name == y.name){
         return {name:x.name, priceClosing:x.priceClosing, priceClosingStrock2:y.priceClosing }
       }
     })
     if(data2aux)
     return data2aux.filter(item=>item)[0]
   }) || []

 
  return (
    <Container theme={theme}>
      <Wrapper>
        <InfosStrock
          name={currentStrock.name}
          currentPrice={currentStrock.lastPrice}
          highPrice={strock1?.max?strock1?.max:0}
          lowPrice={strock1?.min?strock1?.min:0}
          size={strock1?.currentSize?strock1?.currentSize:0}
        ></InfosStrock>
        <h1>X</h1>
        <InfosStrock
          name={currentStrock2.name}
          currentPrice={currentStrock2.lastPrice}
          highPrice={strock2?.max?strock2?.max:0}
          lowPrice={strock2?.min?strock2?.min:0}
          size={strock2?.currentSize?strock2?.currentSize:0}
        ></InfosStrock>
        <ChartStrock strock1={currentStrock.name} strock2={currentStrock2.name} data={data as DataChart[]}></ChartStrock>
      </Wrapper>
    </Container>
  );
}
