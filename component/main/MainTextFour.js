import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-rn'
export function MainTextFour (props) {
  return (
    <View
      style={[
        tw('flex-col items-center mt-6 p-10 '),
        { backgroundColor: '#F4F7FC' }
      ]}
    >
      <Image source={require('../image/home.four.png')} />
      <Text style={[tw('text-lg font-bold mt-6')]}>Kiến thức đầu tư</Text>
      <Text style={[tw(' text-center mt-2')]}>
       Cung cấp kiến thức đầu tư nhà đất chuyên nghiệp hiệu quả cao
      </Text>
    </View>
  )
}
