import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: "16px" }}>
            Somos a revolução do mercado de anabolizantes e produtos hormonais.
            Buscamos aplicar a dinamicidade da internet ao vasto (e pouco
            explorado) mercado. Venha fazer parte da revolução Bombermans.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nosso aplicativo</FooterTitle>
          <AppList>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/app-store.png" alt="AppStore" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/google-play.png" alt="PlayStore" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
