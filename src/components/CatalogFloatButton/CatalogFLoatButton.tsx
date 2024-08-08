import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

// Define a animação de shake
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

// Define a animação de pulse
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Estiliza o botão PDF
const PdfButton = styled.a`
  position: fixed;
  bottom: 100px;
  right: 35px;
  background-color: #ff5c8a;
  color: #fff;
  border: none;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  animation: ${shakeAnimation} 2s ease infinite,
    ${pulseAnimation} 1s ease infinite;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #ff5c8a;
  }
`;

const PdfChatButton = () => {
  const pdfURL = "/catalogo-hiperion/catalogo-hiperion.pdf"; // Caminho do PDF na pasta pública

  return (
    <Tooltip title="Ver Catálogo" arrow>
      <PdfButton href={pdfURL} download>
        <FontAwesomeIcon style={{ fontSize: "2.3rem" }} icon={faFileAlt} />
      </PdfButton>
    </Tooltip>
  );
};

export default PdfChatButton;
