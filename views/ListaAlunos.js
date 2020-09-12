import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default function ListaAlunos({ alunos, navigation }) {
    return (
        <ScrollView>
            {
                alunos.map((l, i) => (
                    <ListItem 
                        key={i} 
                        bottomDivider
                        onPress={() => navigation.navigate('ModificaAluno', {
                            id: l.id,
                            nome: l.nome,
                            cpf: l.cpf,
                            telefone: l.telefone
                        })}
                    >
                        <Avatar source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.nome}</ListItem.Title>
                            <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </ScrollView>
    )
}