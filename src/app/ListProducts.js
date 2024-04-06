import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import { ArrowLeft2, ShoppingCart } from 'iconsax-react-native';
import { APIGetCategories } from '../api/CategoriesAPI';
import { APIGetProductByCategory, APIGetProducts } from '../api/ProductsAPI';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/CategorySlice';

const ListProducts = props => {
    const { navigation } = props;
    const dispatch = useDispatch();
    const { categories, category } = useSelector(state => state.category);
    const { product, products } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(APIGetCategories())
        category ? dispatch(APIGetProductByCategory(category?._id)): dispatch(APIGetProducts())
    }, [category])


    function renderItemCate(item) {
        const backgroundColor = item._id === category._id ? '#009245' : 'white';
        const color = item._id === category._id ? 'white' : 'black';
        function handlePress() {
            dispatch(setCategory(item))
        }
        return (
            <View>
                <TouchableOpacity onPress={handlePress} style={[styles.categoryContainer, { backgroundColor: backgroundColor }]}>
                    <Text style={[styles.categoryLabel, { color: color }]}>{item.name}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    function renderItemProduct(item) {
        const handlePress = () => {
            navigation.navigate('Details', { item });
        }
        // get name category
        // fomat price vietnamese
        const price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);
        return (
            <TouchableOpacity onPress={handlePress} style={styles.productContainer}>
                <Image resizeMode='contain' source={require('../../assets/image/image.png')} style={styles.productImage} />
                <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCate}>{item.category_id?.name}</Text>
                <Text style={styles.productPrice}>{price}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Toolbar
                left={<ArrowLeft2 color='#000' />}
                title='Danh sách sản phẩm'
                fnLeft={() => navigation.goBack()}
                right={<ShoppingCart color='#000' />} />
            <View>
                <FlatList
                    style={styles.flatList}
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => renderItemCate(item)} />
            </View>

            <FlatList
                data={products}
                keyExtractor={item => item._id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => renderItemProduct(item)} />

        </View>
    )
}

export default ListProducts

const styles = StyleSheet.create({
    flatList: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    productPrice: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        color: '#007537'
    },
    productCate: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20
    },
    productName: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        width: '100%',
    },
    productImage: {
        width: '100%',
        height: 134,
        borderRadius: 8,
        backgroundColor: '#f6f6f6'
    },
    productContainer: {
        flex: 1,
        margin: 15,
        backgroundColor: 'white',
        paddingBottom: 15
    },
    categoryLabel: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        marginHorizontal: 8,
        marginVertical: 4
    },
    categoryContainer: {
        justifyContent: 'space-between',
        marginRight: 20,
        borderRadius: 4
    },
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white'
    }
})

