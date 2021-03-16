import { Pane } from 'evergreen-ui'
import * as React from 'react'

interface Props {
  children: React.ReactNode
  height?: string
}

const Container: React.FC<Props> = (props) => {
  const { children, ...rest } = props
  return (
    <Pane maxWidth="960px" marginX="auto" width="100%" {...rest}>
      {children}
    </Pane>
  )
}

export default Container
