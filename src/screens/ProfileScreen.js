import React, { useState } from 'react'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { Block, Text, theme, Icon } from 'galio-framework'

const { width } = Dimensions.get('screen')
const image = { uri: 'https://chatapps3.s3.amazonaws.com/Headshot.jpg' }
export default function ProfileScreen({ navigation }) {
  const [kudos, setKudos] = useState(7)

  return (
    <Block flex style={styles.profile}>
      <ImageBackground
        source={image}
        style={styles.container}
        imageStyle={styles.profileImage}
      >
        <Block flex style={styles.profileDetails}>
          <Block style={styles.profileTexts}>
            <Text color='white' size={28} style={styles.profileName}>
              Brian Musial
            </Text>

            <Block row space='between'>
              <Block>
                <Text color={theme.COLORS.MUTED} size={16}>
                  {` `}
                  {` `}
                  <Icon
                    name='map-marker'
                    family='font-awesome'
                    color={'#ffc107'}
                    size={16}
                  />
                  {`  `}Chicago, IL.
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
      <Block flex={1}>
        <Block style={styles.options}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <Block row space='between' style={{ padding: 8 }}>
              <Block middle>
                <Icon
                  name='handshake-o'
                  family='font-awesome'
                  color={'#ffc107'}
                  size={32}
                />

                {kudos == 0 ? null : <Text>{kudos}</Text>}
              </Block>
              <Block row space='between'>
                <Block row>
                  <Block middle>
                    <Text
                      size={16}
                      color={'black'}
                      style={{ textAlign: 'center' }}
                    >
                      Web Development
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block middle style={styles.years}>
                <Text size={13} color='black'>
                  1st Year Member
                </Text>
              </Block>
            </Block>
            <Block>
              <Block
                style={{
                  paddingTop: 20,
                  paddingLeft: 15,
                }}
              >
                <Text h4 color={'rgba(0, 0, 0, 0.35)'}>
                  About:
                </Text>
              </Block>
            </Block>
            <Block
              style={{
                paddingTop: 20,
                paddingLeft: 30,
              }}
            >
              <Text>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam'
                'contemni non poteris. Aliter autem vobis placet. Quod non'
                faceret, si in voluptate summum bonum poneret. Duo Reges:
              </Text>
            </Block>

            <Block
              style={{
                paddingTop: 20,
                paddingLeft: 15,
              }}
            >
              <Text h4 color={'rgba(0, 0, 0, 0.35)'}>
                Links:
              </Text>
            </Block>

            <Block
              row
              space='between'
              style={{
                paddingTop: 20,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <Text>Website</Text>
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>LinkedIn</Text>
            </Block>
            <Block
              style={{
                paddingTop: 20,
                paddingLeft: 15,
              }}
            >
              <Text h4 color={'rgba(0, 0, 0, 0.35)'}>
                Kudos:
              </Text>
              <Icon
                name='handshake-o'
                family='font-awesome'
                color={'#ffc107'}
                size={32}
              />
              <Text muted size={13}>
                +1
              </Text>
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  profileName: {
    marginBottom: 8,
  },

  years: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 35,
    width: 90,
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
