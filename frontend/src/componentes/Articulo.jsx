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
        alert("Compra realizada");
      });
};

function eliminar(id) {
    axios.post("http://localhost:8080/api/eliminar", { id })
      .then(function() {
        alert("Sneaker eliminado");
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
                      {this.props.datos.modelo}
                      {this.props.datos.colorway}
                      ({this.props.datos.talla})
                    </Typography>

                    <Typography variant="subtitle">
                      {this.props.datos.precio}
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
