import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Image1 from "../../assets/img/WhatsApp Image 2024-05-30 at 11.10.50.jpeg";
import Image2 from "../../assets/img/WhatsApp Image 2024-05-30 at 11.10.14.jpeg";

const ImageItem = styled(Paper)({
  padding: "10px",
  textAlign: "center",
  color: "black",
  backgroundColor: "#f5f5f5",
});

const images = [
  { src: Image1, size: 2 },
  { src: Image2, size: 4 },
  { src: "https://via.placeholder.com/450", size: 3 },
  { src: "https://via.placeholder.com/150", size: 4 },
  { src: "https://via.placeholder.com/150", size: 2 },
  { src: "https://via.placeholder.com/150", size: 2 },
];

const ImageGrid = () => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={image.size} key={index}>
          <ImageItem>
            <img src={image.src} alt={`Imagem ${index + 1}`} width="100%" />
          </ImageItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;
