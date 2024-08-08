import { createTheme, ThemeOptions, CSSObject } from "@mui/material/styles";

// Extend the default theme interface
declare module "@mui/material/styles" {
  interface Theme {
    customStyles: {
      container: CSSObject;
      box: CSSObject;
      cardContainer: CSSObject;
      backButton: CSSObject;
      header: {
        toolbar: CSSObject;
        logo: CSSObject;
        drawerPaper: CSSObject;
      };
      hero: {
        root: CSSObject;
        video: CSSObject;
        carouselText: CSSObject;
        primaryButton: CSSObject;
        secondaryButton: CSSObject;
      };
      aboutUs: {
        container: CSSObject;
        box: CSSObject;
        textContainer: CSSObject;
        title: CSSObject;
        bodyText: CSSObject;
        image: CSSObject;
        backgroundLines: CSSObject;
      };
      products: {
        root: CSSObject;
        container: CSSObject;
        card: CSSObject;
        cardMedia: CSSObject;
        cardContent: CSSObject;
        cardButton: CSSObject;
      };
      diferenciars: {
        container: CSSObject;
        title: CSSObject;
        card: CSSObject;
        cardContent: CSSObject;
        icon: CSSObject;
      };
    };
  }
  interface ThemeOptions {
    customStyles?: {
      container?: CSSObject;
      box?: CSSObject;
      cardContainer?: CSSObject;
      backButton?: CSSObject;
      header?: {
        toolbar?: CSSObject;
        logo?: CSSObject;
        drawerPaper?: CSSObject;
      };
      hero?: {
        root?: CSSObject;
        video?: CSSObject;
        carouselText?: CSSObject;
        primaryButton?: CSSObject;
        secondaryButton?: CSSObject;
      };
      aboutUs?: {
        container?: CSSObject;
        box?: CSSObject;
        textContainer?: CSSObject;
        title?: CSSObject;
        bodyText?: CSSObject;
        image?: CSSObject;
        backgroundLines?: CSSObject;
      };
      products?: {
        root?: CSSObject;
        container?: CSSObject;
        card?: CSSObject;
        cardMedia?: CSSObject;
        cardContent?: CSSObject;
        cardButton?: CSSObject;
      };
      diferenciars?: {
        container?: CSSObject;
        title?: CSSObject;
        card?: CSSObject;
        cardContent?: CSSObject;
        icon?: CSSObject;
      };
    };
  }
}

const createCustomTheme = (): ThemeOptions => ({
  palette: {
    primary: {
      main: "#F2BF27",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#222",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "National 2 Condensed, Arial, sans-serif",
  },
  customStyles: {
    container: {
      textAlign: "center",
      marginBottom: "2rem",
      width: "90%",
      maxWidth: "1200px",
      "@media (max-width:600px)": {
        width: "100%",
        marginBottom: "1rem",
      },
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      "@media (max-width:600px)": {
        flexDirection: "column",
        gap: "1rem",
      },
    },
    backButton: {
      backgroundColor: "#F2BF27",
      color: "#000",
      marginTop: "2rem",
      marginLeft: "2rem",
      position: "absolute",
      top: "-10rem",
      left: "-15rem",
      "&:hover": {
        backgroundColor: "#F2BF27",
      },
      "@media (max-width:600px)": {
        top: "-5rem",
        left: "-7.5rem",
      },
    },
    header: {
      toolbar: {
        justifyContent: "space-between",
        color: "#fff",
        [createTheme().breakpoints.up('sm')]: {
          height: "20%vh",
        },
        
      },
      logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100px",
      },
      drawerPaper: {
        width: "240px",
      },
    },
    hero: {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height: "60vh",
        [createTheme().breakpoints.up('sm')]: {
          height: "80vh",
        },
      },
      video: {
        position: "absolute",
        width: "100%",
        height: "80%",
        objectFit: "cover",
        zIndex: -1,
        top: 0,
        [createTheme().breakpoints.up('sm')]: {
          height: "100%",
        },
      },
      carouselText: {
        textAlign: "center",
        color: "white",
        padding: "1rem",
        [createTheme().breakpoints.up('sm')]: {
          padding: "2rem",
        },
      },
      primaryButton: {
        background: "#F2BF27",
        borderRadius: '100px',
        padding: '1rem 2rem',
        fontSize: '1rem',
        color: "#000",
        "&:hover": { backgroundColor: "#F2BF27" },
        "@media (max-width:600px)": {
          padding: '0.5rem 1rem',
          fontSize: '0.75rem',
        },
      },
      secondaryButton: {
        color: "#fff",
        borderColor: "#fff",
        borderRadius: '100px',
        padding: '1rem 2rem',
        "&:hover": { borderColor: "#fff", color: "#fff" },
        "@media (max-width:600px)": {
          padding: '0.5rem 1rem',
          fontSize: '0.75rem',
        },
      },
    },
    aboutUs: {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        position: "relative",
      },
      box: {
        minHeight: "80vh",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        padding: "1rem",
        [createTheme().breakpoints.up('sm')]: {
          padding: "2rem",
        },
      },
      textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        marginBottom: "1rem",
        width: "70%",
        [createTheme().breakpoints.up('sm')]: {
          marginBottom: 0,
        },
      },
      title: {
        color: "#F2BF27",
        fontWeight: 700,
        fontSize: "1.5rem",
        [createTheme().breakpoints.up('sm')]: {
          fontSize: "2.5rem",
        },
        textAlign: "start",
        marginBottom: "1rem",
      },
      bodyText: {
        color: "#696969",
        fontSize: "1rem",
        [createTheme().breakpoints.up('sm')]: {
          fontSize: "1.25rem",
        },
        textAlign: "start",
      },
      image: {
        maxWidth: "100%",
        height: "auto",
      },
    },
    products: {
      root: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F2BF27, #F2d127)",
        position: "relative",
        padding: "2rem 0",
        "@media (max-width: 400px)": {
          paddingTop: "2rem",
        },
      },
      container: {
        borderRadius: "20px",
        padding: "2rem",
        marginBottom: "2rem",
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "400px",
        "@media (max-width: 400px)": {
          maxWidth: "100%",
          fontSize: "1rem",
        },
      },
      card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s",
        cursor: "pointer",
        margin: "1rem",
        width: "400px",
        "@media (max-width: 400px)": {
          width: "90%",
        },
        "&:hover": { transform: "scale(1.05)" },
      },
      cardMedia: {
        borderRadius: "10px 10px 0 0",
      },
      cardContent: {
        textAlign: "left",
      },
      cardButton: {
        background: "#F2BF27",
        borderRadius: '100px',
        padding: '1rem 2rem',
        fontSize: '1rem',
        color: "#000",
        "&:hover": { backgroundColor: "#F2BF27" },
        "@media (max-width:600px)": {
          padding: '0.5rem 1rem',
          fontSize: '0.75rem',
        },
      },
    },
    diferenciars: {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        paddingBottom: "5rem",
        paddingTop: "5rem",
      },
      title: {
        variant: "h2",
        color: "#000",
        fontSize: 35,
        fontWeight: 600,
        align: "center",
        marginBottom: 15,
        "@media (max-width: 400px)": {
          fontSize: "rem",
        },
      },
      card: {
        width: "23%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F2BF27",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
        "@media (max-width: 600px)": {
          width: "90%",
        },
      },
      cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      icon: {
        marginBottom: "1rem",
        color: "#3e3f40",
      },
    },
  },
});

const theme = createTheme(createCustomTheme());

export default theme;
