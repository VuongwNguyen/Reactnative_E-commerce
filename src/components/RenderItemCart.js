import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AddSquare, MinusSquare, Stop, TickSquare } from 'iconsax-react-native'

const RenderItemCart = props => {
    const { item, checkFn, minusFn, plusFn } = props
    const [isCheck, setisCheck] = useState(false)
    const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product_id?.price)
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => setisCheck(!isCheck)}>
                {/* <Image source={require('../../assets/image/unChoose.png')} /> */}
                {isCheck ? <TickSquare color='#7D7B7B' variant='Bold' /> : <Stop color='#7D7B7B' />}
            </TouchableOpacity>
            <Image style={styles.image} resizeMode='contain' source={require('../../assets/image/image.png')} />
            <View style={styles.labelContainer}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.labelName}>{item.product_id?.name} | </Text>
                        <Text style={styles.labelAttribute}>{item.product_id?.category_id?.name}</Text>
                    </View>
                    <Text style={styles.labelPrice}>{formatPrice}</Text>
                </View>
                {/*  */}
                <View style={styles.buttonContainer}>
                    <View style={styles.flexButton}>
                        <TouchableOpacity>
                            {/* <Image style={{ width: 20, height: 20 }} source={require('../../assets/image/minus-square.png')} /> */}
                            <MinusSquare color='#7D7B7B' />
                        </TouchableOpacity>
                        <Text style={styles.quantityLabel}>{item.quantity}</Text>
                        <TouchableOpacity>
                            {/* <Image style={{ width: 20, height: 20 }} source={require('../../assets/image/plus-square.png')} /> */}
                            <AddSquare color='#7D7B7B' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.buttonLabel}>Xoá</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RenderItemCart

const styles = StyleSheet.create({
    buttonLabel: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
        color: '#221F1F'
    },
    quantityLabel: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22,
        color: '#7D7B7B',
        marginHorizontal: 10
    },
    flexButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    labelPrice: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        color: '#007537'
    },
    labelAttribute: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20
    },
    labelName: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22
    },
    labelContainer: {
        justifyContent: 'space-between',
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        flex: 1
    },
    image: {
        width: 77,
        height: 77,
    }
})