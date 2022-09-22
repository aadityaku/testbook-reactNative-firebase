import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StudentDetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('drawercontrol')}>StudentDetailsScreen</Text>
    </View>
  )
}

export default StudentDetailsScreen

const styles = StyleSheet.create({})