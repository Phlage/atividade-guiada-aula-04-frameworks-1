// src/components/CardProdutoMUI.jsx
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

// Componente que exibe um card de produto usando o Material-UI.
// Recebe a imagem, o nome, a descrição e o preço via props.
export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      {/* CardMedia exibe a imagem do produto de forma responsiva. */}
      <CardMedia
        component="img"
        height="180"
        image={imagem}
        alt={nome}
      />

      {/* CardContent agrupa o texto principal: nome e descrição. */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descricao}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          R$ {preco}
        </Typography>
      </CardContent>

      {/* CardActions é a área reservada para os botões/ações do card. */}
      <CardActions>
        <Button size="small" variant="contained">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
