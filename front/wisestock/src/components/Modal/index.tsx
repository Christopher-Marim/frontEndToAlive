import { MouseEvent } from "react";
import { color } from "../../global/styles";
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
  const handleOutsideClick = (e: any) => {
    if (e.target.id == "modal") {
      onClose();
    }
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
        
        <InfosSimulation
          quantidade={0}
          capitalGains={0}
          currentPrice={10000}
          dateChoiced="23/05/2022"
          priceDateChoiced={1}
        ></InfosSimulation>
        <div className="group">
          <div className="groupInputs">
            <Input
              placeholder="QTD"
              type={"number"}
              maxLength={4}
              style={{ width: 45, marginRight: 20, textAlign: "center" }}
            ></Input>
            <Input
              placeholder="Data"
              type={"date"}
              style={{ width: "100%" }}
            ></Input>
          </div>
          <Button style={{ width: "100%", marginTop: 20, marginBottom:20 }}>Comparar</Button>
        </div>
      </Wrapper>
    </Container>
  );
}
