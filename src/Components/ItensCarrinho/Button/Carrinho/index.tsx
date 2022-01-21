import React from 'react'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Carrinho =  () => {
    return (
        
            <Button startIcon = {<AddShoppingCartIcon/>} >Adicionar no Carrinho </Button>
        
    );
  };
  
  export default Carrinho;