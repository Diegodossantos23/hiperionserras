import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "./data/serviceData";
import {
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ServiceImage from "../../assets/img/serra-hiperion.jpeg";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((service) => service.title === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div
        style={{
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Altura relativa à viewport
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          style={{
            color: "#fff",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            width: "50%",
            color: "#fff",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {service.description}
        </Typography>
      </div>
      <Divider style={{ backgroundColor: "#fff" }} />
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#000", marginTop: "1rem" }}
      >
        Highlights:
      </Typography>
      <ul>
        {service.highlights.map((highlight, index) => (
          <li key={index}>
            <Typography variant="body2" style={{ color: "#000" }}>
              {highlight}
            </Typography>
          </li>
        ))}
      </ul>
      <Divider style={{ backgroundColor: "#fff" }} />
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#000", marginTop: "1rem" }}
      >
        Details:
      </Typography>
      <Grid container spacing={2}>
        {service.details.map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: "#f2f2f2" }}>
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>
                  {detail}
                </Typography>
                <Typography variant="body2">
                  {service.detailsDescription && service.detailsDescription[index]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider style={{ backgroundColor: "#fff", marginTop: "1rem" }} />
      {/* Add other sections as needed */}
      <div style={{ marginTop: "2rem" }}>
        <Button
          variant="contained"
          onClick={handleGoBack}
          startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetails;
