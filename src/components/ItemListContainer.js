import { Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ItemListContainer = ({greetings}) => {
  return ( 
    <>
      <CssBaseline />
      <Container maxWidth="sm">
      <Typography>
        {greetings}
      </Typography>
      </Container>

    </>
   );
}
 
export default ItemListContainer;