import { Block } from 'galio-framework'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Dimensions, StyleSheet, Text } from 'react-native'
import KudosButton from './KudosButton'

const { width, height } = Dimensions.get('screen')
export default function Kudos({ labelName, rest }) {
  return (
    <Block>
      <Text>Give some Kudos.</Text>
      <TextInput
        label={labelName}
        style={styles.input}
        numberOfLines={3}
        {...rest}
      />
      <KudosButton />
    </Block>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    marginBottom: 10,
    width: width * 0.8,
    height: 55,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'grey',
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15,
  },
})
