import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$blue500',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello world</Button>
}
