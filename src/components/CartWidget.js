import { IconButton, colors } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
  return ( 
    <>
      <IconButton>
        <ShoppingCartOutlinedIcon sx={{color:"white"}}/>
      </IconButton>
    </> 
  );
}
 
export default CartWidget;