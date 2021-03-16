import { majorScale, Pane } from 'evergreen-ui'
import Container from './Container'
import * as React from 'react'
import Logo from './Logo'

interface Props {}

export const Navigation = (props: Props) => {
  return (
    <nav>
      <Pane width="100vw" borderBottom height={majorScale(9)} paddingY={majorScale(1)}>
        <Container height="100%">
          <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
            <Logo />
          </Pane>
        </Container>
      </Pane>
    </nav>
  )
}
export default Navigation
