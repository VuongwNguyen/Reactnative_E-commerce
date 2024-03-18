import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'

const Cart = props => {
    const { navigation } = props
    return (
        <View style={{ flex: 1 }}>
            <Toolbar
                title="Giỏ hàng"
                left={require('../../assets/image/chevron-left.png')}
                fnLeft={() => navigation.goBack()}
                right={require('../../assets/image/trash-can.png')} />

            <View style={{ flex: 1 }}>
                {data.length === 0 && <Text style={{ textAlign: 'center', marginTop: 20 }}>Không có sản phẩm nào trong giỏ hàng</Text>}
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, flex: 1 }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/unChoose.png')} />
                            </TouchableOpacity>
                            <Image style={{ width: 77, height: 77, }} resizeMode='contain' source={require('../../assets/image/image.png')} />
                            <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 22 }}>{item.name} | </Text>
                                        <Text style={{ fontSize: 14, fontStyle: 'normal', fontWeight: '400', lineHeight: 20 }}>{item.attributes}</Text>
                                    </View>
                                    <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 22, color: '#007537' }}>250.000đ</Text>
                                </View>
                                {/*  */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/image/minus-square.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '400', lineHeight: 22, marginHorizontal: 10 }}>{item.quantity}</Text>
                                        <TouchableOpacity>
                                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/image/plus-square.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 20, textDecorationLine: 'underline' }}>Xoá</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )} />
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                    <Text style={{ fontSize: 14, fontStyle: 'normal', fontWeight: '400', lineHeight: 20 }}>Tạm tính: </Text>
                    <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 22, }}>222.333đ</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#007537', borderRadius: 8, padding: 15, flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 20, justifyContent: "space-between", marginHorizontal: 20, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontStyle: 'normal', fontWeight: '500', lineHeight: 22, color: 'white' }}>Tiến hành thanh toán</Text>
                    <Image source={require('../../assets/image/chevron-right.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})



const data = [
    { id: 1, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 2, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 3, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 4, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 5, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 6, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 7, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' },
    { id: 8, name: 'Spider Plant', quantity: 1, attributes: 'Ưa bóng' }
]