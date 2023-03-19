import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const LoaderDiv = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 5%;
  right: 5%;

  &:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #1976d2;
  border-color: #1976d2 transparent #1976d2 transparent;
  animation: ${rotate} 1.2s infinite;
}
`

export default function Loader() {
  return (
      <LoaderDiv />
    )
}