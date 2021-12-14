import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-rn'
export function MainTextThree (props) {
  return (
    <View
      style={[
        tw('flex-col items-center mt-6 p-10 '),
        { backgroundColor: '#F4F7FC' }
      ]}
    >
      <Image source={require('../image/home.three.png')} />
      <Text style={[tw('text-lg font-bold mt-6')]}>Tìm hiểu dự án</Text>
      <Text style={[tw(' text-center mt-2')]}>
        Giúp bạn tìm được dự án phù hợp với nhu cầu
      </Text>
    </View>
  )
}
