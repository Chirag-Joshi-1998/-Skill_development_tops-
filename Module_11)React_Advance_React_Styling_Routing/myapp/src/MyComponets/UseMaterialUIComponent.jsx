import React from "react";
import { Button, TextField, Card, CardContent, Typography, Container } from "@mui/material";

const UseMaterialUIComponent = () => {
  return (
    <Container maxWidth="sm" className="mt-10">
      <Card elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Material UI Form
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UseMaterialUIComponent;
