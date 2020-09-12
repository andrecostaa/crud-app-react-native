import React, { useEffect, useState } from 'react'
import FlashMessage from "react-native-flash-message";
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Text, TextInput, View, TouchableHighlight, StyleSheet } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default function ModificaAluno({ route, navigation }) {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        if (route.params.id) {
            console.log(route.params)
            const { nome } = route.params
            const { telefone } = route.params
            const { cpf } = route.params
            const { id } = route.params

            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setId(id)
        }

    }, [])


    function excluirDados() {
        axios.delete('http://professornilson.com/testeservico/clientes/' + id
        )
            .then(function (response) {
                setNome('')
                setTelefone('')
                setCpf('')
                setId('')
                showMessage({
                    message: "Cliente excluído com sucesso!",
                    type: "success",
                });
                setTimeout(() => {
                    navigation.navigate('Home')
                }, 2500);
            })
            .catch(function (error) {
                showMessage({
                    message: "Algum erro aconteceu!",
                    type: "danger",
                });
                console.log(error);
            });
    }

    async function alterarDados() {
        await axios.put('http://professornilson.com/testeservico/clientes/' + id, {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
        }
        )
            .then(function (response) {
                showMessage({
                    message: "Cliente alterado com sucesso!",
                    type: "success",
                });
                setTimeout(() => {
                    navigation.navigate('Home')
                }, 2500);
            })
            .catch(function (error) {
                showMessage({
                    message: "Algum erro aconteceu!",
                    type: "danger",
                });
                console.log(error);
            });
    }

    const onChangeNome = (value) => {
        setNome(value)
    }

    const onChangeCpf = (value) => {
        setCpf(value)
    }

    const onChangeTel = (value) => {
        setTelefone(value)
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/cadastro-icon-png-3.png' }}
                    style={{ width: 200, height: 200 }}
                />
                <Text>Digite seu Nome</Text>
                <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={e => onChangeNome(e)}
                    value={nome}
                />

                <Text>Digite seu Cpf</Text>
                <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={e => onChangeCpf(e)}
                    value={cpf}
                />

                <Text>Digite seu Telefone</Text>
                <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={e => onChangeTel(e)}
                    value={telefone}
                />
                <Button style={{ paddingTop: 20 }}
                    title="Alterar"
                    style={styles.botao}
                    onPress={() => alterarDados()}
                />

                <Button style={{ paddingTop: 20 }}
                    title="Excluir"
                    color="red"
                    linearGradientProps={{
                        colors: ['red', 'red', 'red'],
                    }}
                    style={styles.botaoExcluir}
                    onPress={() => excluirDados()}
                />
                <FlashMessage position="top" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    botao: {
        paddingTop: 20,
        width: 300
    },
    botaoExcluir: {
        paddingTop: 20,
        width: 300,

    },

    titulo: {
        paddingTop: 20,
        fontSize: 18
    },

    Screen: {
        paddingTop: 20,
        fontSize: 28
    }

})