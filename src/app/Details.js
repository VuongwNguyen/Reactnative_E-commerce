import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'

const Details = props => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Toolbar
        left={require('../../assets/image/chevron-left.png')}
        title='Chi tiết sản phẩm'
        right={require('../../assets/image/shopping-cart.png')}
        fnRight={() => navigation.navigate('Cart')}
        fnLeft={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('../../assets/image/image.png')} resizeMode='contain' style={{ width: '100%', height: 270, alignSelf: 'center', backgroundColor: '#f6f6f6' }} />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 20 }}>
              {data.map((item, index) => {
                return (
                  <Text key={index} style={{ fontSize: 14, fontStyle: 'normal', fontWeight: '400', paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#009245', marginRight: 8, borderRadius: 4, color: 'white' }}>{item.name}</Text>
                )
              })
              }
            </View>
          </ScrollView>
          <Text style={{ fontSize: 24, fontStyle: 'normal', fontWeight: 500, color: '#007537', marginLeft: 20 }}>250.000đ</Text>
          <View style={{ gap: 15, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500' }}>Chi tiết sản phẩm</Text>
            <View style={styles.hightLight} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Kích Cỡ</Text>
              <Text style={styles.label}>Nhỏ</Text>
            </View>
            <View style={styles.hightLight} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Xuất xứ</Text>
              <Text style={styles.label}>Châu Phi</Text>
            </View>
            <View style={styles.hightLight} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Tình Trạng</Text>
              <Text style={[styles.label, { color: '#009245' }]}>Còn 156 sp</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ marginHorizontal: 18, marginVertical: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
          <View>
            <Text style={styles.label}>Đã chọn 0 sản phẩm</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={require('../../assets/image/minus-square.png')} />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '400', lineHeight: 20 }}>0</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/image/plus-square.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={[styles.label, { textAlign: 'right' }]}>Tạm tính</Text>
            <Text style={{ fontSize: 24, fontStyle: 'normal', fontWeight: '500', lineHeight: 34 }}>250.000đ</Text>
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#009245', padding: 15, alignItems: 'center', borderRadius: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, fontStyle: 'normal', fontWeight: '500', textTransform: 'uppercase' }}>chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20
  },
  hightLight: {
    height: 0.5,
    backgroundColor: 'black',
  },

  container: {
    flex: 1,
  }
})
const data = [
  { id: 1, name: 'category 1' },
  { id: 2, name: 'category 2' },
  { id: 3, name: 'category 3' },
  { id: 4, name: 'category 4' },
]