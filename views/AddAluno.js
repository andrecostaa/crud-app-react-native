import React from 'react'
import { View } from 'react-native'
import AlunoForm from './AlunoForm';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView } from 'react-native-gesture-handler';

export default function AddAluno({navigation}) {

    const cliente = {
        nome: '',
        telefone: '',
        cpf: ''
    }

    async function salvar() {
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: cliente.nome,
            cpf: cliente.cpf,
            telefone: cliente.telefone,
        })
            .then(function (response) {
                showMessage({
                    message: "Registro Cadastrado com sucesso",
                    type: "success",
                });
                setTimeout(() => {
                    navigation.navigate('Home')
                }, 2500);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onSubmit = (c) => {
        if (c && c.nome !== '' && c.cpf !== '' && c.telefone !== '') {
            cliente.nome = c.nome
            cliente.cpf = c.cpf
            cliente.telefone = c.telefone
            salvar();
        } else {
            showMessage({
                message: 'É necessário preencher todos os campos.',
                type: 'danger'
            })
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>

                <AlunoForm
                    lblNome={'Digite seu Nome'}
                    lblCpf={'Digite seu Cpf'}
                    lblTel={'Digite seu Telefone'}
                    onSubmit={onSubmit}
                />

            </ScrollView>
        </View>
    )
}