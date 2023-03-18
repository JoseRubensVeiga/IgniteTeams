import { Container, Title, Subtitle } from './styles';

interface Props {
    title: string;
    subtitle: string;
}

const Highlight = ({title, subtitle}: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default Highlight;