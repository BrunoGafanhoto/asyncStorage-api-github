import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Container, Name, Description, Stats, Stat, StatCount } from './styles';

const Repository = ({ data }) => {
    return(
        <Container>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>
            <Stats>
                <Stat>
                    <Ionicons name="star" size={16} color="#333" />
                    <StatCount>{data.stars}</StatCount>
                </Stat>

                <Stat>
                    <FontAwesome name="code-fork" size={16} color="#333" />
                    <StatCount>{data.stars}</StatCount>
                </Stat>
            </Stats>
        </Container>
    )
}

export default Repository