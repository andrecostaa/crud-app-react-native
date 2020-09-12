import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableHighlight, StyleSheet} from 'react-native'
import { Button, Image } from 'react-native-elements'
import FlashMessage from "react-native-flash-message";

export default function AlunoForm({
    lblNome, lblCpf, lblTel, onSubmit
}) {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    const onChangeNome = (value) => {
        setNome(value)
    }

    const onChangeCpf = (value) => {
        setCpf(value)
    }

    const onChangeTel = (value) => {
        setTelefone(value)
    }

    const onContinue = () => {
        onSubmit({ nome: nome, cpf: cpf, telefone: telefone })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/cadastro-icon-png-3.png' }}
                style={{ width: 200, height: 200 }}
            />

            <Text>{lblNome}</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={e => onChangeNome(e)}
                value={nome}
            />

            <Text>{lblCpf}</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={e => onChangeCpf(e)}
                value={cpf}
            />

            <Text>{lblTel}</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={e => onChangeTel(e)}
                value={telefone}
            />
            <Button style={{paddingTop:20}}
                title='Salvar'
                style={styles.botao}
                onPress={onContinue}
            />
            <FlashMessage position="top" />
        </View>
    )
}

const styles = StyleSheet.create({

    botao: {
        paddingTop: 20,
        width: 300
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