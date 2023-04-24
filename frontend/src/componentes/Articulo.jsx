import React from "react";
import axios from "axios";
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
} from "@mui/material";
import { Delete, ShoppingCart } from "@mui/icons-material";

function comprar(id) {
    axios.post("http://localhost:8080/api/comprar", { id })
      .then(function() {
        alert("Maquillaje comprado");
      });
};

function eliminar(id) {
    axios.post("http://localhost:8080/api/eliminar", { id })
      .then(function() {
        alert("Maquillaje borrado");
      });
};

class Articulo extends React.Component {
    render() {
        return (
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={this.props.datos.foto}
                />

                <CardContent>
                    <Typography variant="h5">
                      {this.props.datos.categoria}
                      {this.props.datos.nombre}
                    </Typography>

                    <Typography variant="subtitle">
                      {this.props.datos.precio}
                    </Typography>

                    <Typography>
                      {this.props.datos.descripcion}
                    </Typography>

                    {
                      this.props.datos.comprado ?
                      <Typography color="red">Comprado</Typography>:
                      <Typography color="green">Disponible</Typography>
                    }
                </CardContent>

                <CardActions>
                    <IconButton
                        variant="outlined"
                        onClick={() => comprar(this.props.datos._id)}
                    >
                        <ShoppingCart />
                    </IconButton>

                    <IconButton
                        variant="outlined"
                        onClick={() => eliminar(this.props.datos._id)}
                    >
                        <Delete />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
};

export default Articulo;
