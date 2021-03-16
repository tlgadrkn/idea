import { Heading, majorScale, Pane, Paragraph } from 'evergreen-ui'
import * as React from 'react'

interface Props {
  content: { title: string; body: string }
}

export const Hero: React.FC<Props> = ({ content }: Props) => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)}px)`}
    >
      <Pane>
        <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginBottom={majorScale(8)}>
          {content.title}
        </Heading>
        <Paragraph fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.2rem, 4vw, 2rem)">
          {content.body}
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
