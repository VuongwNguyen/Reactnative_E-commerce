import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'
import TextInputCP2 from '../components/TextInputCP2'

const EditAccount = () => {
    return (
        <View style={styles.container}>
            <View>
                <Toolbar title='Chỉnh sửa thông tin' />
                <View style={styles.marginLayout}>
                    <Image source={require('../../assets/image/avt.png')} style={styles.avatar} />
                    <Text style={styles.labelMassage}>Thông tin sẽ được lưu cho lần mua kế tiếp.
                        Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
                    <TextInputCP2 placeholder='John Doe' />
                    <TextInputCP2 placeholder='exmpale@example.com' />
                    <TextInputCP2 placeholder='74m/1 HT Quận 12' />
                    <TextInputCP2 placeholder='0123456789' />
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLable}>Lưu thông tin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditAccount

const styles = StyleSheet.create({
    marginLayout: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    buttonLable: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        textTransform: 'uppercase',
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        backgroundColor: '#7D7B7B',
        borderRadius: 8,
        padding: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20
    },

    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },
    labelMassage: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        lineHeight: 20,
    }
})