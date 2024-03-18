import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemSection = props => {
    const { data, fn, cateLabel, fnMore } = props;
    function RenderItems({ item, index }) {
        return (
            <TouchableOpacity key={index} onPress={fn} style={{ padding: 5, marginHorizontal: 10 }}>
                <Image style={{ width: '100%', height: 150, backgroundColor: '#f6f6f6', alignSelf: 'center', borderRadius: 10 }} source={require('../../assets/image/image.png')} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '500', fontStyle: 'normal' }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#9E9E9E', fontStyle: 'normal' }}>{item.attribute}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#009245', fontStyle: 'normal' }}>{item.price}đ</Text>
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
                        <View key={item.id} style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <RenderItems item={item} index={index} />
                            </View>
                            {data[index + 1] && (
                                <View style={{ flex: 1 }}>
                                    <RenderItems item={data[index + 1]} index={index + 1} />
                                </View>
                            )}
                        </View>
                    );
                }
            })}
            <TouchableOpacity onPress={fnMore} style={{ alignSelf: 'flex-end', marginHorizontal: 20, marginVertical: 15 }} >
                <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '500', lineHeight: 20, color: '#221F1F', textDecorationLine: 'underline' }}>Xem thêm {cateLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemSection

const styles = StyleSheet.create({
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