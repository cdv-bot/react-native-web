import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-rn'
export function MainTextTwo (props) {
  return (
    <View
      style={[
        tw('flex-col items-center mt-6 p-10 '),
        { backgroundColor: '#F4F7FC' }
      ]}
    >
      <Image  source={require("../image/home.two.png")}/>
      <Text style={[tw('text-lg font-bold mt-6')]}>
       Lên kế hoạch mua nhà
      </Text>
      <Text style={[tw(' text-center mt-2')]}>
       Cách nghiên cứu để mua nhà, hay thậm chí bạn nên mua nhà hay không.
      </Text>
    </View>
    
  )
}
