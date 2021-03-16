import { majorScale, Pane, Text } from 'evergreen-ui'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'

interface HomeProps {
  content: {
    hero: { title: string; body: string }
    features: object
  }
}

const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <Pane>
      <header>
        <Container>
          <Logo />
          <Hero content={content.hero} />
        </Container>
      </header>
      <main>MAIN</main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          <Container>
            <Text>FOOTER</Text>
          </Container>
        </Pane>
      </footer>
    </Pane>
  )
}

Home.defaultProps = {
  content: {
    features: [{ title: 'default', body: 'default' }],
    hero: { title: 'default title', body: 'default body' },
  },
}

export default Home
