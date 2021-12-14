import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import tw from 'tailwind-rn'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars,faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  return (
    <View style={tw("h-16 border-solid border-b border-gray-300  flex-row items-center px-3 justify-between")}>
        <FontAwesomeIcon icon={ faBars } size={30} color={"#757575"}/>
        <Image source={require('../image/logo.png')} style={tw("h-8 w-28 "  )} />
        <FontAwesomeIcon icon={faUser } size={30} color={"#757575"}/>
    </View>
  );
}

