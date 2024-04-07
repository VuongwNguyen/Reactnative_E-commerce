import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Toolbar from '../components/Toolbar'
import { ArrowLeft2, Trash } from 'iconsax-react-native'
import RenderItemCart from '../components/RenderItemCart'
import { useSelector } from 'react-redux'

const Cart = props => {
    const { navigation } = props
    const { account } = useSelector(state => state.account)
    useEffect(() => {
    }, [])
    const total = account?.cart?.reduce((total, item) => total + (item.product_id.price * item.quantity), 0)
    const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    return (
        <View style={styles.container}>
            <Toolbar
                title="Giỏ hàng"
                left={<ArrowLeft2 color='#000' />}
                fnLeft={() => navigation.goBack()}
                right={<Trash color='#000' />} />

            <View style={{ flex: 1 }}>
                {account?.cart.length === 0 && <Text style={styles.lableNone}>Không có sản phẩm nào trong giỏ hàng</Text>}
                <FlatList
                    data={account?.cart}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.product_id?._id}
                    renderItem={({ item }) => <RenderItemCart item={item} />} />
            </View>
            <View>
                <View style={styles.lableContainer}>
                    <Text style={styles.lableNameValue}>Tạm tính: </Text>
                    <Text style={styles.lableValue}>{formatPrice}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
                    <Text style={styles.buttonLable}>Tiến hành thanh toán</Text>
                    <Image source={require('../../assets/image/chevron-right.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007537',
        borderRadius: 8,
        padding: 15,
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 20
    },
    buttonLable: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        color: 'white'
    },
    lableValue: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
    },
    lableNameValue: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
    },
    lableContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    container: {
        flex: 1,
    },
    lableNone: {
        textAlign: 'center',
        marginTop: 20
    }

})


