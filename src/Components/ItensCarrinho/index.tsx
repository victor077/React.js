import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Produtos from '../ItensCarrinho/Imagens/Produtos';
import Carrinho from '../ItensCarrinho/Button/Carrinho';
import '../ItensCarrinho/Imagens/Produtos/style.css'
import Box  from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ItensCarrinho = () => {
  return (
  
   <Box>
       <Box className='shopping'>
       <ShoppingCartIcon />
       </Box>
       <Box className='titulo'>
       <Typography variant = 'h4'>Lista de Produtos</Typography>
       </Box>

       <Box className='Bainner'>
  <Paper className='container' elevation = {3}>
      <Box className='imagemProduto'>
      <Produtos></Produtos>
      <Box className='texto'>
      <Typography className='prod'>Nome do Produto:</Typography>
      <Typography>Preço:</Typography>
      </Box>
      <Box className='carrinho'>
      <Carrinho></Carrinho>
      </Box>
      </Box>
  </Paper>
  </Box>

  <Box className='Bainner'>
  <Paper className='container' elevation = {3}>
      <Box className='imagemProduto'>
      <Produtos></Produtos>
      <Box className='texto'>
      <Typography className='prod'>Nome do Produto:</Typography>
      <Typography>Preço:</Typography>
      </Box>
      <Box className='carrinho'>
      <Carrinho></Carrinho>
      </Box>
      </Box>
  </Paper>
  </Box>

  <Box className='Bainner'>
  <Paper className='container' elevation = {3}>
      <Box className='imagemProduto'>
      <Produtos></Produtos>
      <Box className='texto'>
      <Typography className='prod'>Nome do Produto:</Typography>
      <Typography>Preço:</Typography>
      </Box>
      <Box className='carrinho'>
      <Carrinho></Carrinho>
      </Box>
      </Box>
  </Paper>
  </Box>

  <Box className='Bainner'>
  <Paper className='container' elevation = {3}>
      <Box className='imagemProduto'>
      <Produtos></Produtos>
      <Box className='texto'>
      <Typography className='prod'>Nome do Produto:</Typography>
      <Typography>Preço:</Typography>
      </Box>
      <Box className='carrinho'>
      <Carrinho></Carrinho>
      </Box>
      </Box>
  </Paper>
  </Box>


  

  
  </Box>

  
  

  );
};

export default ItensCarrinho;
