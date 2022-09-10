import { useNavigate } from 'react-router-dom'
import { Container } from './buttonStyles'

export default function Button() {
  const navigate = useNavigate()

  return <Container onClick={() => navigate('/')}>&lt; Voltar</Container>
}
