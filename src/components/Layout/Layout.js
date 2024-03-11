import { Box, Container } from "@mui/material";
import { Toaster } from 'react-hot-toast';

export const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box display="grid" gap={2} padding={2}>
          {children}
        </Box>
      </Container>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
};
