import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import TextInputCP2 from '../components/TextInputCP2'
import { ArrowLeft2 } from 'iconsax-react-native'

const Payment = props => {
    const { navigation } = props;
    const [isCheckShipping, setisCheckShipping] = useState(0);
    const [isCheckPayment, setisCheckPayment] = useState(0);

    return (
        <View style={styles.container}>
            <Toolbar title='Payment' left={<ArrowLeft2 color='black'/> } fnLeft={()=>navigation.goBack()} />
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Thông tin khách hàng</Text>
                    <TextInputCP2 placeholder='Nguyen Van A' />
                    <TextInputCP2 placeholder='example@example.com' />
                    <TextInputCP2 placeholder='Địa chỉ' />
                    <TextInputCP2 placeholder='Số điện thoại' />
                    <Text style={styles.title}>Phương thức vận chuyển</Text>
                    {
                        shipping.map((item, index) => (
                            <TouchableOpacity onPress={() => setisCheckShipping(index)} style={styles.containerShipping} key={index}>
                                <View>
                                    <Text style={[styles.shippingLargeLabel, { color: isCheckShipping == index ? '#007537' : '#221F1F' }]}>{item.name} - {item.price}đ</Text>
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
                    <Text style={styles.numberTotal}>100,000đ</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={styles.labelTotal}>Phí vận chuyển</Text>
                    <Text style={styles.numberTotal}>10,000đ</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={styles.labelTotal}>Tổng cộng</Text>
                    <Text style={styles.numberTotal}>110,000đ</Text>
                </View>
                <TouchableOpacity style={styles.button}>
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
        name: 'Thanh toán khi nhận hàng'
    },
    {
        id: 2,
        name: 'Thanh toán qua thẻ'
    }
]