import React from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { Block, Text, theme } from 'galio-framework'

const { width } = Dimensions.get('screen')
const image = { uri: 'https://chatapps3.s3.amazonaws.com/Headshot.jpg' }
export default function ProfileScreen({ navigation }) {
  return (
    <Block flex style={styles.profile}>
      <ImageBackground
        source={image}
        style={styles.container}
        imageStyle={styles.profileImage}
      >
        <Block flex style={styles.profileDetails}>
          <Block style={styles.profileTexts}>
            <Text color='#fff' size={28} style={styles.profileName}>
              Brian Musial
            </Text>
            <Block middle style={styles.years}>
              <Text size={12} color='black'>
                1st Year Member
              </Text>
            </Block>
            <Block>
              <Text color={theme.COLORS.MUTED} size={16}>
                {/* <Icon
                  name='map-marker'
                  family='font-awesome'
                  color={theme.COLORS.MUTED}
                  size={16}
                /> */}
                {`  `} Chicago, IL.
              </Text>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
      <Block flex={0.7}>
        <Block style={styles.options}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <Block row space='between' style={{ padding: 8 }}>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 8 }}>
                  36
                </Text>
                <Text muted size={12}>
                  Orders
                </Text>
              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: width,
    height: 'auto',
    flex: 1,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileDetails: {
    paddingTop: 64,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileName: {
    marginBottom: 8,
  },

  years: {
    backgroundColor: '#fbc02d',
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 35,
    width: 90,
    marginBottom: 10,
  },
  options: {
    position: 'relative',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 8,
    marginTop: -8,
    marginBottom: 0,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
})
