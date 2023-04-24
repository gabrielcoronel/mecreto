import React from "react";
import { Box, TextField, IconButton, Button } from "@mui/material";
import { Textarea } from "@mui/joy";
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
      nombre: "",
      precio: "",
      descripcion: "",
      categoria: "",
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
            alert("Producto añadido");
          })
    };

    render() {
        return (
            <Stack spacing={2}>
                <TextField
                    label="Nombre"
                    name="nombre"
                    type="text"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Precio"
                    name="precio"
                    type="number"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Categoría"
                    name="categoria"
                    type="text"
                    onChange={this.actualizarFormulario}
                />

                <Textarea
                  placeholder="Descripción"
                  minRows={4}
                  variant="outlined"
                  name="descripcion"
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
                  Añadir
                </Button>
            </Stack>
        );
    }
};

export default Guardar;
