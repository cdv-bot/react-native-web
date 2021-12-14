import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import tw from 'tailwind-rn'
export default function Main (props) {
  const [isSelect, setIsSelect] = useState(1)
  return (
    <View style={tw('pl-10')}>
      <Text numberOfLines={4} style={tw(' py-12 text-lg w-52 font-bold')}>
        Mục đích đến với DHomes của bạn là
      </Text>
      <View style={tw('flex-row')}>
        <Text
          onPress={() => setIsSelect(1)}
          style={[
            tw('text-base'),
            styles.text,
            isSelect === 1 ? styles.bgSelect : null
          ]}
        >
          Định giá
        </Text>
        <Text
          onPress={() => setIsSelect(2)}
          style={[
            tw('text-base'),
            styles.text,
            isSelect === 2 ? styles.bgSelect : null
          ]}
        >
          Mua
        </Text>
        <Text
          onPress={() => setIsSelect(3)}
          style={[
            tw('text-base'),
            styles.text,
            isSelect === 3 ? styles.bgSelect : null
          ]}
        >
          Thuê
        </Text>
      </View>
      <View style={[styles.container]}>
        <TextInput style={[styles.search]} placeholder='Khu vực/tên dự án' />
        <View style={styles.btnSearch}>
          <Text  style={{color: "#FFFFFF"}} >Tìm kiếm</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#000",
    flexDirection: 'row',
    height: 45,
    marginTop: 20
  },
  text: {
    backgroundColor: '#BAD7E8',
    color: '#000',
    padding: 18,
    marginRight: 8,
    borderRadius: 19,
    borderStyle: 'solid',
    borderColor: '#000'
  },
  bgSelect: {
    backgroundColor: '#FF9500',
    color: 'white'
  },
  search: {
    backgroundColor: '#eee',
    width: 260,
    borderWidth: 1,
    borderRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10
  },
  btnSearch: {
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#44444F",
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth : 0
  }
})
