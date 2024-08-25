import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/hiperionserras?igsh=MTN1bHduMnVzeGd6Zw==",
      icon: <InstagramIcon />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <LinkedInIcon />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
      icon: <YouTubeIcon />,
    },
  ];

  const footerColumns = [
    {
      title: "Localização",

      content: [
        <Link
          href="https://www.google.com/maps/place/Av.+Get%C3%BAlio+Vargas,+692+-+Calmon+Viana,+Po%C3%A1+-+SP,+08560-000/@-23.5301908,-46.3430066,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7ae5e4b19f1d:0xcea5fed61ee7e13a!8m2!3d-23.5301958!4d-46.3381357!16s%2Fg%2F11csk14mrv?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          color="#fff"
          key="POÁ-SP"
        >
          POÁ-SP
        </Link>,
        <Link
          href="https://www.google.com/maps/place/Hiperion+Serras/@-22.3599585,-46.9454274,15z/data=!4m6!3m5!1s0x65ff8045174de7df:0xabd5ebd017494fed!8m2!3d-22.3599585!4d-46.9454274!16s%2Fg%2F11l7401r46?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          color="#fff"
          key="MOGI GUAÇU-SP"
        >
          MOGI GUAÇU-SP
        </Link>,
         <Link
         href="https://www.google.com/maps/place/Hiperion+Serras/@-22.3599585,-46.9454274,15z/data=!4m6!3m5!1s0x65ff8045174de7df:0xabd5ebd017494fed!8m2!3d-22.3599585!4d-46.9454274!16s%2Fg%2F11l7401r46?entry=ttu"
         target="_blank"
         rel="noopener noreferrer"
         color="#fff"
         key="MOGI GUAÇU-SP"
       >
         CEP: 13847-005
       </Link>,
      ],
    },
    {
      title: "Contato",
      content: [
        "vendas@hiperionserras.com.br",
        "(19) 9.9740-2223",
        "(19)3831-5457",
        
      ],
    },
    {
      title: "Produtos",
      content: ["Serras Circulares", "Lâminas serra fita", "Afiação"],
    },
  ];

  return (
    <Box component="footer" bgcolor="#222" padding="2rem 0">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="#fff"
        padding="1rem"
        textAlign="center"
      >
        <Typography
          fontFamily="National 2 Condensed, Arial, sans-serif"
          variant="body1"
          fontWeight="bold"
          marginBottom="1rem"
        >
          Siga-nos:
        </Typography>

        <Stack marginBottom="1rem" direction="row" spacing={2}>
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.url} className="socialLink">
              {React.cloneElement(link.icon, { sx: { color: "#fff" } })}
            </Link>
          ))}
        </Stack>
        <Typography
          fontFamily="National 2 Condensed, Arial, sans-serif"
          variant="body1"
        >
          © 2024 Hiperion Serras. Desenvolvido por Crew web.
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid #6c757d"
        padding="1rem 0"
      >
        {footerColumns.map((column) => (
          <Box
            key={column.title}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            textAlign="center"
            maxWidth={{ xs: "100%", md: "300px" }}
            marginBottom={{ xs: "1rem", md: 0 }}
            padding="1rem"
          >
            <Typography
              fontFamily="National 2 Condensed, Arial, sans-serif"
              variant="h6"
              color="#fff"
              marginBottom="1rem"
              minHeight="2rem"
            >
              {column.title}
            </Typography>
            {column.content.map((item, index) => (
              <Typography
                key={index}
                fontFamily="National 2 Condensed, Arial, sans-serif"
                variant="body2"
                color="#fff"
                marginBottom="0.5rem"
              >
                {item}
              </Typography>
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;
