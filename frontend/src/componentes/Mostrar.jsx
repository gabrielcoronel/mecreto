import React from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import { Stack } from "@mui/joy";
import Articulo from "./Articulo.jsx";

class Mostrar extends React.Component {
    state = {
        datos: []
    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/mostrar")
            .then((response) => this.setState({
                ...this.state,
                datos: response.data
            }));
    }

    render() {
        return (
            <Box sx={{
            }}>
              <Stack spacing={2}>
                  {
                      this.state.datos === null ?
                      <CircularProgress /> :
                      this.state.datos
                          .map(function (articulo) {
                              return <Articulo datos={articulo} />;
                          })
                  }
              </Stack>
            </Box>
        );
    }
};

export default Mostrar;
