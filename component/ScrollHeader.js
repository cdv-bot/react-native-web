import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function ScrollHeader ({ children }) {
  const scrollRef = React.useRef()

  return (
    <View style={{position:"relative"}}>
      <ScrollView>
        {children}
        <View style={{ position: 'absolute', zIndex: 9999, bottom: 100, right :0 }}>
          <FontAwesomeIcon icon={faBars} size={30} color={'#757575'} />
        </View>
      </ScrollView>
    </View>
  )
}
