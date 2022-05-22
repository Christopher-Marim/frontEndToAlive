import { color as cor } from "../../global/styles";
import { Container } from "./styles";
import Logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { InputHTMLAttributes } from "react";
import { useRedux } from "../../hooks/state";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Search(props: InputProps) {
  const theme = cor;

  return (
    <Container theme={theme} {...props}>
    <input {...props} type={'text'} placeholder={'Buscar ação...'}/>
    <button><FiSearch size={20} ></FiSearch></button>
    </Container>
      
  );
}
