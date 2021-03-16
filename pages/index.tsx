import { majorScale, Pane, Text } from 'evergreen-ui'
import styles from '../styles/Home.module.css'

interface HomeProps {
  content: {
    hero: { title: string; body: string }
    features: object
  }
}

const Home: React.FC<HomeProps> = () => {
  return (
    <Pane>
      <header>
        <Text>Idea Logo</Text>
      </header>
      <main>MAIN</main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          FOOTER
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
