import { useState, useEffect } from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Tooltip title="Voltar para o topo" arrow>
      <Zoom in={visible}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: theme.spacing(2),
            left: theme.spacing(2),
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </Tooltip>
  );
};

export default ScrollToTop;
