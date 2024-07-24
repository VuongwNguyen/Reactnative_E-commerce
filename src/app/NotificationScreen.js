import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Toolbar from '../components/Toolbar'
import { useDispatch, useSelector } from 'react-redux';
import { APIGetOrder } from '../api/OrderAPI';


const Notification = () => {
  const { orders } = useSelector(state => state.order);
  const { account } = useSelector(state => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(APIGetOrder(account._id));
  }, []);

  function renderItem(item) {
    // format date theo thứ, ngày, tháng, năm
    const formatDate = new Date(item.created_at).toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const title = item.status == 'pending' ? 'Đang xử lý' : item.status == 'completed' ? 'Đặt hàng thành công' : 'Đã huỷ đơn hàng';
    const color = item.status == 'pending' ? '#FFA500' : item.status == 'completed' ? '#007537' : '#FF0000';
    return (
      <View style={styles.marginV}>
        <Text style={styles.notificationdate}>{formatDate}</Text>
        <View style={styles.hightLight} />
        <View style={styles.notificationLayout}>
          <Image style={styles.notificationImage} source={require('../../assets/image/image.png')} />
          <View>
            <Text style={[styles.notificationTitle, { color: color }]}>{title}</Text>
            {item.products.map((product, index) => (
              <View key={index} style={styles.notificationLayout}>
                <Text style={styles.notificationProuct}>{product.product_id?.name} | </Text>
                <Text style={styles.NotificationCategory}>{product.product_id?.category_id?.name}</Text>
              </View>
            ))}
            <Text style={styles.NotificationQuantity}>{item.products?.length} Sản Phẩm</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Toolbar title="Thông Báo" />
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        style={styles.section}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => renderItem(item)} />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  marginV: {
    marginVertical: 10,
  },
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
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,

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
