import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, Container, Paper } from "@mui/material";
import ButtonsSign from "./Components/ButtonsLog";

function SignIn() {
  return (
    <PageContainer title="Prácticas - Postulación a practicas profesionales | Administración Pública" description="Sistema de prácticas profesionales">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundImage: 'url(https://cdn.discordapp.com/attachments/1145537724644864134/1166227278720671775/image.png?ex=6549b8ca&is=653743ca&hm=fe863285f7e6c37ea2b2c8d499f3f9b9d7b92f615ef8f34692dd7c81586a0dec&)',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "983px",
          padding: "100px",
        }}
        minHeight={700}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
         <Box sx ={{
          bgcolor: 'white',
          color: 'black',
          boxShadow: 4,
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
         }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "black",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Postulación a Prácticas Profesionaless
            </Typography>
            
            <ButtonsSign/>
            
          
          </Box> 
        </Box>
      </Box>
      <Box
        padding={0}
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="center"
      >
        

      </Box>
    </PageContainer>
  );
}

export default SignIn;
