import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardComponent = ({ tier, isButtonDisabled, handleButtonClick }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardHeader
      title={tier.title}
      subheader={tier.subheader}
      titleTypographyProps={{ align: "center" }}
      subheaderTypographyProps={{
        align: "center",
      }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          mb: 2,
        }}
      >
        <Typography component="h2" variant="h5" color="text.primary">
          {tier.price}
        </Typography>
      </Box>
      <ul>
        {tier.description.map((line) => (
          <Typography component="li" variant="subtitle1" align="center" key={line}>
            {line}
          </Typography>
        ))}
      </ul>
      {(tier.title === "Postulación Primera Práctica" || tier.title === "Postulación Segunda Práctica") && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Button
            variant="text"
            color="primary"
            onClick={() => tier.title === "Postulación Primera Práctica" ? handleButtonClick("verPostulacionesPrimera") : handleButtonClick("verPostulacionesSegunda")}
          >
            Ver Postulaciones
          </Button>
        </Box>
      )}
    </CardContent>
    <CardActions sx={{ mb: 2 }}>
      <Button
        disabled={tier.disabled || isButtonDisabled}
        fullWidth
        variant={tier.buttonVariant}
        onClick={() => handleButtonClick(tier.actionName)}
      >
        {tier.buttonText}
      </Button>
    </CardActions>
  </Card>
);

export default CardComponent;