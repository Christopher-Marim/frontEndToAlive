import { color as cor } from "../../global/styles";
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { useStrock } from "../../hooks/useStrock";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search(props: InputProps) {
  const theme = cor;
  const [nameStrock, setNameStrock] = useState("");

  const { GetCurrentStrock } = useStrock();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length<15){
      setNameStrock(e.target.value);
    }
    else{
      return false
    }
  };

  return (
    <Container theme={theme} {...props}>
      <input
        {...props}
        type={"text"}
        placeholder={"Buscar ação..."}
        value={nameStrock}
        onChange={onChangeInput}
      />
      <button data-testid={'buttonSearch'} type="button" onClick={()=>GetCurrentStrock(nameStrock)}>
        <FiSearch size={20}></FiSearch>
      </button>
    </Container>
  );
}
