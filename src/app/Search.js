import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'
import { Clock, SearchNormal1 } from 'iconsax-react-native'

const Search = () => {
    return (
        <View style={styles.container}>
            <Toolbar title="Tìm kiếm" />
            {/* text input để tìm kiếm */}
            <View style>
                <TextInput placeholder="Tìm kiếm" style={styles.input} />
                <TouchableOpacity style={styles.icon}>
                    {/* <Image source={require('../../assets/image/search.png')} /> */}
                    <SearchNormal1 color='#000' />
                </TouchableOpacity>
            </View>
            {/* tìm kiếm gần đây */}
            <View style={styles.sectionRecent}>
                <Text style={styles.labelSearchTitle}>Tìm kiếm gần đây</Text>
                <View >
                    {dataSearch.map((item, index) => {
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

const dataSearch = [
    { id: 1, name: 'Áo sơ mi' },
    { id: 2, name: 'Quần jean' },
    { id: 3, name: 'Áo khoác' },
    { id: 4, name: 'Áo thun' },]