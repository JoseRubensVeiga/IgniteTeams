import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/HighLight';

import { Container, Content, Icon } from './styles';

const NewGroup = () => {

    return (
        <Container>
            <Header showBackButton/>
            
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie uma turma para adicionar pessoas"
                />

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    );
}

export default NewGroup;