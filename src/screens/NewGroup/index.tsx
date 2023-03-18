import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';

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

                <Input />

                <Button
                    title="Criar"
                    style={{marginTop: 20}}
                />
            </Content>
        </Container>
    );
}

export default NewGroup;