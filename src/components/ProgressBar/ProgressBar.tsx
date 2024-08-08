import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProgressBar } from "../SawBandList/data/data";

interface ProgressBarComponentProps {
  progress: ProgressBar[];
}

const CustomLinearProgress = styled(LinearProgress)({
  height: "1.5rem",
  position: "relative",
  backgroundColor: "#474747",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#F2BF27",
  },
});

const LabelContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#000",
});

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  progress,
}) => {
  return (
    <Box sx={{ width: "80%", padding: "1rem" }}>
      {progress.map((bar, index) => (
        <Box key={index} sx={{ position: "relative", marginBottom: "1rem" }}>
          <CustomLinearProgress variant="determinate" value={bar.value} />
          <LabelContainer>
            <Typography
              color={"#fff"}
              fontSize={13.5}
              fontWeight={"bold"}
              fontFamily={"National 2 Condensed, Arial, sans-serif"}
              gutterBottom
            >
              {bar.label}
            </Typography>
          </LabelContainer>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressBarComponent;
