import React from "react";
import { Stack } from "@mui/joy";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

class Registrarse extends React.Component {
    state = {
        correo: "",
        contrasena: ""
    };

    actualizarFormulario = (evento) => {
        this.setState({
            ...this.state,
            [`${evento.target.name}`]: evento.target.value
        });
    };

    registrarse = () => {
        axios.post("http://localhost:8080/api/registrarse", this.state)
          .then(() => alert("Registrado"))
    }

    render() {
        return (
            <Stack spacing={2} width="fit-content" mt={5} alignItems="center">
                <TextField
                    label="Correo"
                    name="correo"
                    type="email"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Contraseña"
                    name="contrasena"
                    type="password"
                    onChange={this.actualizarFormulario}
                />

                <Button
                    variant="contained"
                    onClick={this.registrarse}
                >
                  Crear cuenta
                </Button>
            </Stack>
        );
    }
};

export default Registrarse;
