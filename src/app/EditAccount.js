import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import TextInputCP2 from '../components/TextInputCP2'
import { useDispatch, useSelector } from 'react-redux';
import { APIUpdateUser } from '../api/UserAPI';

const EditAccount = () => {
    const { account } = useSelector(state => state.account);
    const dispatch = useDispatch();
    const [name, setName] = useState(account?.username);
    const [email, setEmail] = useState(account?.email);
    const [address, setAddress] = useState(account?.address);
    const [phone, setPhone] = useState(account?.phone);


    function handleSave() {
        if (!name || !email || !address || !phone) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        const body = {
            id: account._id,
            data: {
                username: name,
                email: email,
                address: address,
                phone: phone
            }
        };
        dispatch(APIUpdateUser(body));
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Toolbar title='Chỉnh sửa thông tin' />
                    <View style={styles.marginLayout}>
                        <Image source={require('../../assets/image/avt.png')} style={styles.avatar} />
                        <Text style={styles.labelMassage}>Thông tin sẽ được lưu cho lần mua kế tiếp.
                            Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
                        <TextInputCP2 placeholder='Họ và tên' value={name} fnOnChange={setName} />
                        <TextInputCP2 placeholder='Email' value={email} fnOnChange={setEmail} />
                        <TextInputCP2 placeholder='Địa chỉ' value={address} fnOnChange={setAddress} />
                        <TextInputCP2 placeholder='Số điện thoại' value={phone} fnOnChange={setPhone} />
                    </View>
                </View>

                <TouchableOpacity onPress={handleSave} style={styles.button}>
                    <Text style={styles.buttonLable}>Lưu thông tin</Text>
                </TouchableOpacity>
            </ScrollView>

        </KeyboardAvoidingView>
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
        backgroundColor: '#007537',
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