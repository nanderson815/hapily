import { Typography } from '@material-ui/core'
import React from 'react'
// import { useCollection } from 'react-firebase-hooks/firestore'
// import firebase from 'gatsby-plugin-firebase'

import Main from '../containers/Main'

// markup
const IndexPage = () => {
  // const [value, loading, error] = useCollection(
  //   firebase.firestore().collection('partners')
  // )
  // console.log('val:', value)
  // console.log('loading:', loading)
  // console.log(error)

  return (
    <Main>
      <Typography>Hi</Typography>
    </Main>
  )
}

export default IndexPage
