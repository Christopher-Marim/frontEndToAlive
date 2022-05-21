import { color } from "../../global/styles";
import { Wrapper } from "../Header/styles";
import { Container } from "./styles";



export function HomeBody() {
  const theme = color;

  return (
    <Container theme={theme}>

      <Wrapper></Wrapper>
     
    </Container>
  );
}
