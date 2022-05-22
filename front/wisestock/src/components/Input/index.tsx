import { color } from "../../global/styles";
import { Container } from "./styles";
import { InputHTMLAttributes } from 'react';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: PropsInput) {
  const theme = color;

  return (
    <Container theme={theme} {...props}/>
  );
}
