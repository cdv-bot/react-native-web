import React from 'react'
import { ScrollView } from 'react-native'
import { Header } from '../header'
import {
  Main,
  MainTextOne,
  MainTextTwo,
  MainTextThree,
  MainTextFour
} from '../main'


export default function Home (props) {

  return (
    <ScrollView>
      <Header />
      <Main />
      <MainTextOne />
      <MainTextTwo />
      <MainTextThree />
      <MainTextFour />
    </ScrollView>
  )
}
