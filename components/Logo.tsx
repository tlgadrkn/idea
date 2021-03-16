import * as React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'
interface Props {}

const Logo = ({ ...props }) => {
  return (
    <Link href="/">
      <a>
        <Text fontSize="40px" color="#47B881" {...props}>
          Idea
        </Text>
      </a>
    </Link>
  )
}

export default Logo
