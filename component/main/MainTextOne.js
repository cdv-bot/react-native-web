import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native'

export function MainTextOne (props) {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('headerText')
  }
  return (
    <View
      style={[
        tw('flex-col items-center mt-6 p-10 '),
        { backgroundColor: '#F4F7FC' }
      ]}
    >
      <Text
        style={[
          tw('font-bold text-2xl w-60 text-center'),
          { color: '#F4D1A5' }
        ]}
      >
        BẠN GẶP KHÓ KHĂN KHI ĐẦU TƯ BẤT ĐỘNG SẢN?
      </Text>
      <Text style={[tw('text-lg font-bold mt-6')]}>
        Dhomes đã sản sàng hỗ trợ bạn!
      </Text>
      <Text style={[tw(' text-center mt-2')]}>
        Tư vấn về định giá, pháp lý, kinh nghiệm đầu tư, giải pháp về tài chính
      </Text>
      <Text style={[tw(' text-center mt-2')]}>
        Giúp bạn tìm được bất động sản ưng ý!
      </Text>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          {
            backgroundColor: '#F39203',
            padding: 6,
            borderRadius: 6,
            marginTop: 10
          }
        ]}
      >
        <Text style={[tw('text-lg'), { color: '#F3DBBB' }]}>Liên hệ ngay</Text>
      </TouchableOpacity>
      <Image source={require('../image/home.one.png')} />
    </View>
  )
}
