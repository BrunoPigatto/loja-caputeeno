import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 355px;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
