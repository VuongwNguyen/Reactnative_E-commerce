import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import { AddSquare, ArrowLeft2, MinusSquare, ShoppingCart } from 'iconsax-react-native'
import { useSelector, useDispatch } from 'react-redux';
import { APIinsertCart } from '../api/UserAPI';

const Details = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { account } = useSelector(state => state.account);
  const { product } = useSelector(state => state.product);
  const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);
  const [cart, setCar] = useState([])

  useEffect(() => {
    // trả mang mới từ mảng cũ với 2 tham số là product_id và quantity
    setCar(account?.cart?.map(item => ({ product_id: item.product_id._id, quantity: item.quantity })))
  }, [account])


  function addToCart() {
    const updatedCart = cart.map(item => item.product_id === product._id
      ? { ...item, quantity: item.quantity + quantity } : item); // nếu product_id trùng với product_id thì cập nhật quantity

    const productExists = cart.some(item => item.product_id === product._id);// kiểm tra xem product_id đã tồn tại trong cart chưa
    const finalCart = productExists ? updatedCart : [...updatedCart, { product_id: product._id, quantity: quantity }];
    // nếu productExists = true thì trả về updatedCart ngược lại thì trả về updatedCart và newProduct
    // tất cả các code trên b trên 1 dòng
    const body = {
      id: account._id,
      cart: finalCart
    };
    dispatch(APIinsertCart(body));
  }


  return (
    <View style={styles.container}>
      <Toolbar
        left={<ArrowLeft2 color='#000' />}
        title={product.name}
        right={<ShoppingCart color='#000' />}
        fnRight={() => navigation.navigate('Cart')}
        fnLeft={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('../../assets/image/image.png')} resizeMode='contain' style={styles.lagImage} />
        <View>
          <ScrollView style={styles.scrollview} horizontal showsHorizontalScrollIndicator={false}>
            {/* {data.map((item, index) => {
              return (
                <Text key={index} style={styles.labelCategory}>{item.name}</Text>
              )
            })
            } */}
            <Text style={styles.labelCategory}>{product.category_id?.name}</Text>

          </ScrollView>
          <Text style={styles.lablePrice}>{formatPrice}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.detailLabel}>Chi tiết sản phẩm</Text>
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
              <Text style={[styles.label, { color: '#009245' }]}>Còn {product.quantity} sp</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.orderContainer}>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.label}>Đã chọn {quantity} sản phẩm</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                {/* <Image source={require('../../assets/image/minus-square.png')} /> */}
                <MinusSquare color='#000' />
              </TouchableOpacity>
              <Text style={styles.quantityLabel}>{quantity}</Text>
              <TouchableOpacity>
                {/* <Image source={require('../../assets/image/plus-square.png')} /> */}
                <AddSquare color='#000' />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={[styles.label, { textAlign: 'right' }]}>Tạm tính</Text>
            <Text style={styles.totalLabel}>250.000đ</Text>
          </View>
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonLabel}>chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  labelCategory: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    padding: 8,
    backgroundColor: '#009245',
    color: 'white',
    borderRadius: 4,
    marginHorizontal: 5
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  button: {
    backgroundColor: '#009245',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8
  },
  totalLabel: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34
  },
  quantityLabel: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  detailLabel: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500'
  },
  infoContainer: {
    gap: 15,
    marginHorizontal: 20
  },
  orderContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  lablePrice: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#007537',
    marginLeft: 20
  },
  scrollview: {
    flexDirection: 'row',
    marginVertical: 15,
    marginLeft: 20
  },
  lagImage: {
    width: '100%',
    height: 270,
    alignSelf: 'center',
    backgroundColor: '#f6f6f6'
  },
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