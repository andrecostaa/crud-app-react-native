import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import { Header, Button } from 'react-native-elements'

import axios from 'axios';

import ListaAlunos from './ListaAlunos'

export default function Home({ navigation }) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
      async function buscarAlunos() {
        const resultado = await axios('http://professornilson.com/testeservico/clientes',);
        setAlunos(resultado.data);
      }
      buscarAlunos();
    }, [alunos])

    return (
        <View>
            <Header
                centerComponent={{
                    text: "Lista",
                    style: { color: "#fff", fontSize: 20 },
                }}
                rightComponent={
                    <Button
                        title="+"
                        onPress={() => navigation.navigate('AddAluno')}
                    ></Button>
                }
            />
            <ListaAlunos alunos={alunos} navigation={navigation} />
        </View>
    )
}