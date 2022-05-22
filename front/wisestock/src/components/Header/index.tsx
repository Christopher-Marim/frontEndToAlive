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
        {visibleSearch && <Search />}
        <div>
          <button type="button" className={"buttonAbout"}>
            Sobre{" "}
            <BsArrowUpRight
              color={"white"}
              size={16}
              style={{ marginLeft: 10 }}
            />
          </button>
          <button type="button" className={"buttonMenu"}>
            <HiMenuAlt4
              color={"white"}
              size={40}
            ></HiMenuAlt4>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}
