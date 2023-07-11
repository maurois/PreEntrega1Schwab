import { Badge, IconButton, colors } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
  return ( 
    <Badge badgeContent={4} color="secondary">
    <IconButton>
        <ShoppingCartOutlinedIcon sx={{color:"white"}}/>
      </IconButton>
  </Badge>
  );
}
 
export default CartWidget;