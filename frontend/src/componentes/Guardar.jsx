import React from "react";
import { Box, TextField, IconButton, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Stack } from "@mui/joy";
import axios from "axios";

function encodeFile(file) {
    const fileReader = new FileReader();

    const promise = new Promise((resolve, reject) => {
        fileReader.readAsDataURL(file);

        fileReader.onerror = () => reject(fileReader.error);
        fileReader.onload = () => resolve(fileReader.result);
    });

    return promise;
};

class Guardar extends React.Component {
    state = {
      modelo: "",
      talla: "",
      colorway: "",
      precio: "",
      foto: ""
    };

    actualizarFormulario = (evento) => {
        this.setState({
            ...this.state,
            [`${evento.target.name}`]: evento.target.value
        });
    };

    actualizarArchivo = (evento) => {
        encodeFile(evento.target.files[0])
            .then((contenido) => {
                this.setState({
                    ...this.state,
                    foto: contenido
                });
            });
    };

    guardar = () => {
        axios.post("http://localhost:8080/api/guardar", this.state)
          .then(function () {
            alert("Sneaker guardado");
          })
    };

    render() {
        return (
            <Stack sx={{ padding: "1rem", border: "1px solid silver", borderRadius: "15px" }} spacing={2}>
                <TextField
                    label="Modelo"
                    name="modelo"
                    type="text"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Talla"
                    name="talla"
                    type="text"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Colorway"
                    name="colorway"
                    type="text"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Precio"
                    name="precio"
                    type="number"
                    onChange={this.actualizarFormulario}
                />

                <Box sx={{
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <IconButton variant="contained" component="label">
                      <input
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={this.actualizarArchivo}
                      />

                      <PhotoCamera />
                  </IconButton>
                </Box>

                <Button
                    variant="contained"
                    onClick={this.guardar}
                >
                  Guardar
                </Button>
            </Stack>
        );
    }
};

export default Guardar;
