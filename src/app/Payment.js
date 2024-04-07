import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import TextInputCP2 from '../components/TextInputCP2'
import { ArrowLeft2 } from 'iconsax-react-native'
import { useDispatch, useSelector } from 'react-redux';
import { APICreateOrder } from '../api/OrderAPI';
import { APIUpdateUser } from '../api/UserAPI'


const Payment = props => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const { account } = useSelector(state => state.account);
    const { orderStatus } = useSelector(state => state.order);
    const [name, setName] = useState(account?.username);
    const [email, setEmail] = useState(account?.email);
    const [address, setAddress] = useState(account?.address);
    const [phone, setPhone] = useState(account?.phone);
    const [isCheckShipping, setisCheckShipping] = useState(0);
    const [isCheckPayment, setisCheckPayment] = useState(0);
    const total = account?.cart?.reduce((total, item) => total + (item.product_id.price * item.quantity), 0)
    const costShipping = shipping[isCheckShipping].price;
    const totalPayment = total + costShipping;

    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }
    // lấy mảng mới từ cart của account lấy 2 thuộc tính là product_id và quantity
    const newCart = account?.cart?.map(item => ({ product_id: item.product_id._id, quantity: item.quantity }));
    async function handlePayment() {
        const body = {
            id: account._id,
            data: {
                payment: payment[isCheckPayment].value,
                address: address,
                products: newCart,
                status: 'pending',
            }
        }
        dispatch(APICreateOrder(body));
        if (await orderStatus === 'success') {
            dispatch(APIUpdateUser({ id: account._id, data: { cart: [] } }));
            Alert.alert('Thông báo', 'Đặt hàng thành công');
        }else{
            Alert.alert('Thông báo', 'Đặt hàng thất bại');
        }
    }
    return (
        <View style={styles.container}>
            <Toolbar title='Payment' left={<ArrowLeft2 color='black' />} fnLeft={() => navigation.goBack()} />
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Thông tin khách hàng</Text>
                    <TextInputCP2 placeholder='Họ và tên' value={name} fnOnChange={setName} />
                    <TextInputCP2 placeholder='Email' value={email} fnOnChange={setEmail} />
                    <TextInputCP2 placeholder='Địa chỉ' value={address} fnOnChange={setAddress} />
                    <TextInputCP2 placeholder='Số điện thoại' value={phone} fnOnChange={setPhone} />
                    <Text style={styles.title}>Phương thức vận chuyển</Text>
                    {
                        shipping.map((item, index) => (
                            <TouchableOpacity onPress={() => setisCheckShipping(index)} style={styles.containerShipping} key={index}>
                                <View>
                                    <Text style={[styles.shippingLargeLabel, { color: isCheckShipping == index ? '#007537' : '#221F1F' }]}>{item.name} - {formatPrice(item.price)}</Text>
                                    <Text style={styles.shippingSmallLabel}>Dự kiến giao hàng {item.foresee}</Text>
                                </View>
                                {isCheckShipping == index && <Image source={require('../../assets/image/check.png')} />}
                            </TouchableOpacity>
                        ))
                    }
                    <Text style={styles.title}>Hình thức thanh toán</Text>
                    <View style={{ marginVertical: 10 }}>
                        {
                            payment.map((item, index) => (
                                <TouchableOpacity onPress={() => setisCheckPayment(index)} style={styles.containerShipping} key={index}>
                                    <View>
                                        <Text style={[styles.shippingLargeLabel, { color: isCheckPayment == index ? '#007537' : '#221F1F', }]}>{item.name}</Text>
                                    </View>
                                    {isCheckPayment == index && <Image source={require('../../assets/image/check.png')} />}
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={styles.section}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={styles.labelTotal}>Tạm tính</Text>
                    <Text style={styles.numberTotal}>{formatPrice(total)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={styles.labelTotal}>Phí vận chuyển</Text>
                    <Text style={styles.numberTotal}>{formatPrice(costShipping)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={styles.labelTotal}>Tổng cộng</Text>
                    <Text style={styles.numberTotal}>{formatPrice(totalPayment)}</Text>
                </View>
                <TouchableOpacity onPress={handlePayment} style={styles.button}>
                    <Text style={styles.textButton}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    labelTotal: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22
    },
    numberTotal: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22
    },
    button: {
        backgroundColor: '#007537',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    section: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    title: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    shippingLargeLabel: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
    },
    shippingSmallLabel: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        color: '#7D7B7B',
    },
    containerShipping: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})

const shipping = [
    {
        id: 1,
        name: 'Giao hàng tiêu chuẩn',
        price: 0,
        foresee: '3-5 ngày'
    },
    {
        id: 2,
        name: 'Giao hàng nhanh',
        price: 10000,
        foresee: '2-3 ngày'
    },
    {
        id: 3,
        name: 'Giao hàng siêu nhanh',
        price: 20000,
        foresee: '1-2 ngày'
    }
];
const payment = [
    {
        id: 1,
        name: 'Thanh toán khi nhận hàng',
        value: 'cash'
    },
    {
        id: 2,
        name: 'Thanh toán qua thẻ',
        value: 'credit_card'
    }
]