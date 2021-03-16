import { Pane } from 'evergreen-ui'
import * as React from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const Container = ({ children, ...props }: Props) => {
  return (
    <Pane maxWidth="960px" marginX="auto" width="100%" {...props}>
      {children}
    </Pane>
  )
}

export default Container
