import { color } from "../../global/styles";
import { Container, Wrapper } from "./styles";
import Logo from "../../assets/logo.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { Search } from "../Search";

interface PropsHeader {
  visibleSearch: boolean;
}

export function Header({ visibleSearch }: PropsHeader) {
  const theme = color;

  return (
    <Container theme={theme}>
      <Wrapper>
        <img src={Logo} alt="Logo WiseStrock" />
        <div className="groupButtonsHeader" style={{justifyContent:!visibleSearch?"flex-end":'space-between'}}>
          {visibleSearch && <Search style={{ width: 400 }} />}
          <button type="button" className={"buttonMenu"}>
            <HiMenuAlt4 color={"white"} size={40}></HiMenuAlt4>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}
