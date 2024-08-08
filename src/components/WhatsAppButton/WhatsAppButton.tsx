import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

// Estiliza o botão do WhatsApp
const WhatsAppButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 35px;
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 50%;
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

  &:hover {
    background-color: #128c7e;
  }
`;

const WhatsAppChatButton = () => {
  // Função para abrir o chat do WhatsApp
  const openWhatsAppChat = () => {
    const phoneNumber = "+5519994142300";
    const message = "Olá, gostaria de mais informações.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <WhatsAppButton onClick={openWhatsAppChat}>
      <FontAwesomeIcon style={{fontSize: "2.3rem"}} icon={faWhatsapp} />
    </WhatsAppButton>
  );
};

export default WhatsAppChatButton;
