import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { setProduct } from '../redux/ProductSlice';
import { useDispatch } from 'react-redux';

const ItemSection = props => {
    const { data = [], fn, cateLabel, fnMore } = props;
    const dispatch = useDispatch();
    function RenderItems({ item, index }) {
        function handlePress() {
            fn();
            dispatch(setProduct(item));
        }
        const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);
        return (
            <TouchableOpacity key={index} onPress={handlePress} style={styles.itemContainer}>
                <Image style={styles.itemImage} source={require('../../assets/image/image.png')} />
                <View>
                    <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.itemAttribute}>Số lượng: {item.quantity}</Text>
                    <Text style={styles.itemPrice}>{formatPrice}</Text>
                </View>
            </TouchableOpacity>
        );

    }

    return (
        <View style={styles.view}>
            <Text style={styles.headerLabel}>{cateLabel}</Text>
            {data.map((item, index) => {
                if (index % 2 === 0) {
                    return (
                        <View key={item._id} style={styles.flexItem}>
                            <View style={styles.flex}>
                                <RenderItems item={item} index={index} />
                            </View>
                            {data[index + 1] && (
                                <View style={styles.flex}>
                                    <RenderItems item={data[index + 1]} index={index + 1} />
                                </View>
                            )}
                        </View>
                    );
                }
            })}
            <TouchableOpacity onPress={fnMore} style={styles.containerLabelMore} >
                <Text style={styles.labelMore}>Xem thêm {cateLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemSection

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    labelMore: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
        color: '#221F1F',
        textDecorationLine: 'underline'
    },
    containerLabelMore: {
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginVertical: 15
    },
    flexItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#009245'
    },
    itemAttribute: {
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#9E9E9E'
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal'
    },
    itemImage: {
        width: '100%',
        height: 150,
        backgroundColor: '#f6f6f6',
        alignSelf: 'center',
        borderRadius: 10
    },
    itemContainer: {
        padding: 5,
        marginHorizontal: 10
    },
    view: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    headerLabel: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500'
    },
})