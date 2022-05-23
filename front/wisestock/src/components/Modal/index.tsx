import {
  ButtonHTMLAttributes,
  ChangeEvent,
  EventHandler,
  MouseEvent,
  useState,
} from "react";
import { color } from "../../global/styles";
import { useStrock } from "../../hooks/useStrock";
import { Button } from "../Button";
import { InfosSimulation } from "../InfosSimulation";
import { Input } from "../Input";
import { Container, Wrapper } from "./styles";

interface ModalProps {
  onClose(): void;
  strockName: string;
}

export function Modal({ onClose, strockName }: ModalProps) {
  const theme = color;
  const [qtd, setQtd] = useState("");
  const [date, setDate] = useState("");
  const [priceAtDate, setPriceAtDate] = useState<number>(0);
  const [lastPrice, setLastPrice] = useState<number>(0);
  const [capitalGains, setCapitalGains] = useState<number>(0);
  const [visibleInfos, setVisibleInfos] = useState(false);

  const { GetSimulationStrock } = useStrock();

  const onChangeInputQtd = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 5) {
      setQtd(e.target.value);
    } else {
      return false;
    }
  };
  const onChangeInputDate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 15) {
      setDate(e.target.value);
      console.log(e.target.value);
    } else {
      return false;
    }
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.id == "modal") {
      onClose();
    }
  };
  const handleButtonCompareClick = () => {
    setVisibleInfos(true);
    GetSimulationStrock(strockName, parseFloat(qtd), date).then((result) => {
      if (result) {
        setLastPrice(result.lastPrice);
        setCapitalGains(result.capitalGains);
        setPriceAtDate(result.priceAtDate);
      }
      else{
        alert(result)
      }
    });
  };
  return (
    <Container id="modal" onClick={handleOutsideClick}>
      <Wrapper theme={theme}>
        <div className="groupTexts">
          <h1>
            Projeção de ganhos <strong>{strockName}</strong>
          </h1>
          <p>
            A projeção de ganhos tem como objetivo auxiliar o investidor a
            simular o ganho de capital em determinado periodo.
          </p>
        </div>
        {visibleInfos&& (
          <InfosSimulation
            quantidade={parseFloat(qtd)}
            capitalGains={capitalGains}
            currentPrice={lastPrice}
            dateChoiced={date}
            priceDateChoiced={priceAtDate}
          ></InfosSimulation>
        )}
        <div className="group">
          <div className="groupInputs">
            <Input
              placeholder="QTD"
              type={"number"}
              value={qtd}
              onChange={onChangeInputQtd}
              style={{ width: 45, marginRight: 20, textAlign: "center" }}
            ></Input>
            <Input
              placeholder="Data"
              value={date}
              onChange={onChangeInputDate}
              type={"date"}
              max={Date.now()}
              style={{ width: "100%" }}
            ></Input>
          </div>
          <Button
            type="button"
            style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
            onClick={handleButtonCompareClick}
          >
            Comparar
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
}
