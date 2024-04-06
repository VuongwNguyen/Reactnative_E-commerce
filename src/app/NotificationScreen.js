import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'
const Notification = () => {
  return (
    <View style={styles.container}>
      <Toolbar title="Thông Báo" />
      <ScrollView style={styles.section}>
        {notification.map((item, index) => (
          <View key={index}>
            <Text style={styles.notificationdate}>{item.date}</Text>
            <View style={styles.hightLight} />
            <View style={styles.notificationLayout}>
              <Image style={styles.notificationImage} source={require('../../assets/image/image.png')} />
              <View>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <View style={styles.notificationLayout}>
                  <Text style={styles.notificationProuct}>{item.product} | </Text>
                  <Text style={styles.NotificationCategory}>{item.category}</Text>
                </View>
                <Text style={styles.NotificationQuantity}>{item.quantity} Sản Phẩm</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  notificationdate: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    color: '#221F1F',
  },
  notificationImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  notificationLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  hightLight: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    color: '#007537',
  },
  notificationProuct: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
  },
  NotificationCategory: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 20,
  },
  NotificationQuantity: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 20,
  },
})

const notification = [
  {
    title: 'Đặt hàng thành công',
    product: 'Áo thun nam trắng',
    category: 'Thời trang',
    quantity: 1,
    date: 'Thứ Tư, 20/10/2021'
  }
]