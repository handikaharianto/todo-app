import Container from "@mui/material/Container";

function FormContainer({ children }) {
  return (
    <Container
      component="section"
      sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
    >
      {children}
    </Container>
  );
}

export default FormContainer;
