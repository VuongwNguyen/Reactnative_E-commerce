import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'

const ListProducts = props => {
   const { navigation } = props;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [dataProduct, setDataProduct] = useState(dataProductList);
    function renderItemCate(item) {
        const backgroundColor = item.id === selectedCategory ? '#009245' : 'white';
        const color = item.id === selectedCategory ? 'white' : 'black';
        function handlePress() {
            setSelectedCategory(item.id);
            setDataProduct(dataProductList.filter(product => product.cate_id === item.id));
        }
        return (
            <View>
                <TouchableOpacity onPress={handlePress} style={{ justifyContent: 'space-between', marginRight: 20, backgroundColor: backgroundColor, borderRadius: 4 }}>
                    <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '400', lineHeight: 20, color: color, marginHorizontal: 8, marginVertical: 4 }}>{item.name}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    function renderItemProduct(item) {
        const handlePress = () => {
            navigation.navigate('Details', { item });
        }
        // get name category
        const cate = dataCatee.find(cate => cate.id === item.cate_id).name
        // fomat price vietnamese
        const price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);
        return (
            <TouchableOpacity onPress={handlePress} style={{ flex: 1, margin: 15, backgroundColor: 'white', paddingBottom: 15 }}>
                <Image resizeMode='contain' source={require('../../assets/image/image.png')} style={{ width: '100%', height: 134, borderRadius: 8, backgroundColor: '#f6f6f6' }} />
                <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 22 }}>{item.name}</Text>
                <Text style={{ fontSize: 14, fontStyle: 'normal', fontWeight: '400', lineHeight: 20 }}>{cate}</Text>
                <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 22, color: '#007537' }}>{price}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Toolbar
                left={require('../../assets/image/chevron-left.png')}
                title='Danh sách sản phẩm'
                fnLeft={() => navigation.goBack()}
                right={require('../../assets/image/shopping-cart.png')} />
            <View>
                <FlatList
                    style={{ marginVertical: 15, marginHorizontal: 20 }}
                    data={dataCatee}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => renderItemCate(item)} />
            </View>

            <FlatList
                data={dataProduct}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => renderItemProduct(item)} />

        </View>
    )
}

export default ListProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
})

const dataCatee = [
    {
        id: 1,
        name: 'Cà phê'
    },
    {
        id: 2,
        name: 'Trà sữa'
    },
    {
        id: 3,
        name: 'Nước ép'
    },
    {
        id: 4,
        name: 'Sinh tố'
    },
    {
        id: 5,
        name: 'Nước ngọt'
    },
    {
        id: 6,
        name: 'Nước lọc'
    },
]

const dataProductList = [
    { id: 1, cate_id: 1, name: 'Cà phê sữa', price: 20000, },
    { id: 2, cate_id: 1, name: 'Cà phê đen', price: 15000, },
    { id: 3, cate_id: 1, name: 'Cà phê phin', price: 25000, },
    { id: 4, cate_id: 2, name: 'Trà sữa thái', price: 30000 },
    { id: 5, cate_id: 2, name: 'Trà sữa trân châu', price: 35000 },
    { id: 6, cate_id: 2, name: 'Trà sữa thái xanh', price: 40000 },
    { id: 7, cate_id: 3, name: 'Nước ép cam', price: 25000 },
    { id: 8, cate_id: 3, name: 'Nước ép dưa hấu', price: 30000 },
    { id: 9, cate_id: 3, name: 'Nước ép táo', price: 35000 },
    { id: 10, cate_id: 4, name: 'Sinh tố dâu', price: 30000 },
    { id: 11, cate_id: 4, name: 'Sinh tố bơ', price: 35000 },
    { id: 12, cate_id: 4, name: 'Sinh tố chuối', price: 40000 },
    { id: 13, cate_id: 5, name: 'Nước ngọt coca', price: 10000 },
    { id: 14, cate_id: 5, name: 'Nước ngọt pepsi', price: 10000 },
    { id: 15, cate_id: 5, name: 'Nước ngọt 7up', price: 10000 },
    { id: 16, cate_id: 6, name: 'Nước lọc lavie', price: 5000 },
    { id: 17, cate_id: 6, name: 'Nước lọc aquafina', price: 5000 },
    { id: 18, cate_id: 6, name: 'Nước lọc vinh hao', price: 5000 },

]