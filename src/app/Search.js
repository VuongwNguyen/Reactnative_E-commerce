import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import { Clock, SearchNormal1 } from 'iconsax-react-native'
import AxiosInstance from '../helper/AxiosInstance'

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [dataSearch, setDataSearch] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await AxiosInstance().get(`/product/getProductByCondition?keyword=${keyword}`)
            if (response.status === true) {
                if (keyword === '') {
                    setDataSearch([])
                    return
                }
                setDataSearch(response.products);

            }
        }
        fetchData()
    }, [keyword])

    function renderItem(item) {
        const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)

        return (<View style={styles.marginV} >
            <View style={styles.notificationLayout}>
                <Image style={styles.notificationImage} source={require('../../assets/image/image.png')} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={styles.notificationTitle}>{item.name}</Text>
                        <Text style={styles.NotificationCategory}>| {item.category_id?.name}</Text>
                    </View>
                    <Text style={styles.NotificationQuantity}>{formatPrice}</Text>
                </View>
            </View>
        </View >)
    };


    return (
        <View style={styles.container}>
            <Toolbar title="Tìm kiếm" />
            {/* text input để tìm kiếm */}
            <View style>
                <TextInput placeholder="Tìm kiếm" style={styles.input} value={keyword} onChangeText={t => setKeyword(t)} />
                <TouchableOpacity style={styles.icon}>
                    {/* <Image source={require('../../assets/image/search.png')} /> */}
                    <SearchNormal1 color='#000' />
                </TouchableOpacity>
            </View>
            {/* tìm kiếm gần đây */}
            <View style={styles.sectionRecent}>
                <Text style={styles.labelSearchTitle}>Tìm kiếm gần đây</Text>
                <View >
                    <FlatList
                        data={dataSearch}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => renderItem(item)} />

                    {dataSearch != '' ? <View /> : dataSearchKey.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.searchContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {/* <Image style={{ marginRight: 10 }} source={require('../../assets/image/clock.png')} /> */}
                                    <Clock color='#000' style={{ marginRight: 15 }} />
                                    <Text style={styles.labelRecent}>{item.name}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/image/close.png')} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    marginV: {
        marginVertical: 10,
    },
    notificationdate: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '500',
        lineHeight: 22,
        color: '#221F1F',
    },
    notificationImage: {
        width: 70,
        height: 70,
        marginRight: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    notificationLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    hightLight: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    notificationTitle: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '500',
        lineHeight: 22,
        width: '50%'

    },
    notificationProuct: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '500',
        lineHeight: 22,
    },
    NotificationCategory: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        lineHeight: 20,
    },
    NotificationQuantity: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        lineHeight: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 9
    },
    labelRecent: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        color: '#221F1F'
    },
    container: {
        flex: 1,
    },
    sectionRecent: {
        marginHorizontal: 48
    },
    labelSearchTitle: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        color: '#221F1F',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#221F1F',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 20
    }

})

const dataSearchKey = [
    { id: 1, name: 'Áo sơ mi' },
    { id: 2, name: 'Quần jean' },
    { id: 3, name: 'Áo khoác' },
    { id: 4, name: 'Áo thun' },
]