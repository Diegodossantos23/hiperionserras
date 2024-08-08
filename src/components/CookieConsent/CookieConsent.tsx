import  { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, Link, useTheme, useMediaQuery } from '@mui/material';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '1rem',
        borderTop: '1px solid #ccc',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1, mb: isSmallScreen ? 2 : 0 }}>
          <Typography fontWeight={"bold"} variant="h6" gutterBottom>
            Cookies
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Usamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. 
            Também compartilhamos informações sobre o uso de nosso site com nossos parceiros de mídia social, publicidade e análise 
            que as combinam com outras informações que você forneceu a eles ou que coletaram de seu uso de seus serviços. Você concorda 
            com nossos cookies se continuar a usar nosso site.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            <Link href="https://jobconvo.com/politica-de-privacidade/"  underline="hover" sx={{ color: '#72777d', mr: 1 }}>Termos</Link> | 
            <Link href="https://jobconvo.com/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: '#72777d', ml: 1 }}>
              Privacidade
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F2BF27',
              color: '#000',
              '&:hover': { backgroundColor: '#F2BF27' },
            }}
            onClick={handleAccept}
          >
            Aceitar tudo
          </Button>
          {/* <Button
            variant="outlined"
            sx={{ borderColor: '#F2BF27', color: '#F2BF27', '&:hover': { borderColor: '#F2BF27' } }}
          >
            Configurar Cookies
          </Button> */}
        </Box>
      </Container>
    </Box>
  );
};

export default CookieConsent;
