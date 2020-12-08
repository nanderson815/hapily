import React from 'react'
import Container from '@material-ui/core/Container'

export default function Main({ children }) {
  return <Container maxWidth="xl">{children}</Container>
}
