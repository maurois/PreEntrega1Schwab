import { Badge, IconButton, colors } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
  return ( 
    
    <IconButton>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon sx={{color:"white"}}/>
      </Badge>
      </IconButton>

  );
}
 
export default CartWidget;