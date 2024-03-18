import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemSection from '../components/ItemSection';

const Home = props => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>Planta - toả sáng {'\n'}không gian nhà bạn</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}
                        style={{ margin: 10, borderRadius: 50, backgroundColor: 'white', padding: 10 }}>
                        <Image source={require('../../assets/image/shopping-cart.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../../assets/image/removebg-preview.png')} />
                    <TouchableOpacity style={styles.goToNewSetion}>
                        <Text style={styles.labelGoToNewSection}>Xem hàng mới về</Text>
                        <Image source={require('../../assets/image/fi_arrow-right.png')} />
                    </TouchableOpacity>
                </View>
                <ItemSection fnMore={() => navigation.navigate('List')} data={data} fn={() => navigation.navigate('Details')} cateLabel='Cây nội thất' />
                <ItemSection fnMore={()=>navigation.navigate('List')} data={data} fn={() => navigation.navigate('Details')} cateLabel='Cây ngoại thất' />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    labelGoToNewSection: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#009245'
    },
    goToNewSetion: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        gap: 2,
        marginTop: 7,
        paddingHorizontal: 10,
    },
    headerLabel: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500'
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,

        backgroundColor: '#f6f6f6'
    }
})
const data = [
    { id: 1, name: 'Spider Plant', price: 100000, attribute: 'Ưa bóng' },
    { id: 2, name: 'Song of india', price: 100000, attribute: 'Ưa sáng' },
    { id: 3, name: 'Snake Plant', price: 100000, attribute: 'Ưa bóng' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 100000, attribute: 'Ưa bóng' },
    { id: 5, name: 'Peace Lily', price: 100000, attribute: 'Ưa bóng' },
    { id: 6, name: 'Monstera', price: 100000, attribute: 'Ưa bóng' },
]