import React, {useState} from 'react';

import { Container, Title, Form, Input, Submit, List} from './styles'

import { getAllRepositories,saveRepository } from '../../services/storage';

import api from '../../services/api';

import { Ionicons } from '@expo/vector-icons'
import Repository from '../../components/Repository';
const Home = () => {
    
    const [input, setInput] = useState('');
    const [repositories, setRepositories] = useState([]);
    // const saveRepository = (repository) => {
    //     const data = {
    //         id: repository.id,
    //         name: repository.name,
    //         fullName: repository.full_name,
    //         description: repository.description,
    //         stars: repository.stargazers_count,
    //         forks: repository.forks_count
    //     }
    // }

    const handleAddRepository = async () => {
        try{
            const response = await api.get(`/repos/${input}`)
            await saveRepository('storedRepository', response.data);
            const repositories = await getAllRepositories('storedRepository');
            setRepositories(repositories);
            
        }catch(e){
            console.log(e.message);
        }
    }

    return(
       <Container>
           <Title>Repositórios</Title>
           <Form>
               <Input autoCapitalize="none" autoCorrect={false} placeholder="Procurar repositório"
                value={input} 
                onChangeText={text => setInput(text)} //ou so setInput [codigo limpo]
               />
               <Submit onPress={handleAddRepository}>
                    <Ionicons name="add" size={22} color="#fff" />
               </Submit>
           </Form>
           <List
                keyboardShouldPersistTaps="handled" //quando clica na lista fecha o teclado
                data={repositories}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => ( <Repository data={item} />)}
            />
       </Container>
     )
}

export default Home;