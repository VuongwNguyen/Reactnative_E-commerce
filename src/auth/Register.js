import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInputCP from '../components/TextInputCP';
import { useDispatch } from 'react-redux';
import { APIRegister } from '../api/UserAPI';

const Register = props => {
    const { navigation } = props;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');


    async function handleRegister() {
        try {
            if (name == '' || email == '' || phone == '' || password == '') {
                setMessage('Vui lòng nhập đầy đủ thông tin');
                return;
            } else {
                setMessage('');
                const body = {
                    username: name,
                    email: email,
                    phone: phone,
                    password: password
                }
                console.log(body);
                const res = await dispatch(APIRegister(body));
                console.log(res.payload);
                if (res.payload.status == true) {
                    // navigation.navigate('Login');
                    setMessage('Đăng Ký Thành Công');
                    navigation.goBack();
                } else {
                    setMessage('Email hoặc số điện thoại đã tồn tại');
                    return;
                }
            }
        } catch (err) {
            console.log(err);
            alert('Đã có lỗi xảy ra');
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../../assets/image/mainRegister.png')} />
                    <View style={styles.view}>
                        <View style={styles.title}>
                            <Text style={styles.largeTitle}>Đăng Ký</Text>
                            <Text style={styles.body}>Tạo tài khoản</Text>
                        </View>
                        <TextInputCP placeholder='Họ và tên' fn={setName} value={name} />
                        <TextInputCP placeholder='Email' fn={setEmail} value={email} />
                        <TextInputCP placeholder='Số điện thoại' fn={setPhone} value={phone} />
                        <TextInputCP placeholder='Mật khẩu' password fn={setPassword} value={password} />
                        {message != '' && <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>}
                        <Text style={styles.labelTerm}>Để đăng ký tài khoản, bạn đồng ý <Text style={styles.colorLabel}>Term & Conditions</Text> and <Text style={styles.colorLabel}>Privacy Policy</Text></Text>
                        <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#009245', padding: 10, borderRadius: 15, alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Đăng ký</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={styles.hightLightView}>
                                <View style={styles.hightLight} />
                                <Text style={styles.hightLightLabel}>Hoặc</Text>
                                <View style={styles.hightLight} />
                            </View>
                            <View style={styles.moreView}>
                                <TouchableOpacity>
                                    <Image style={styles.icon} source={require('../../assets/image/icons_google.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.icon} source={require('../../assets/image/logos_facebook.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 7, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.labelRemember}>Bạn đã có tài khoản?  </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[styles.labelRemember, { color: '#009245' }]}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    moreView: {
        gap: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    hightLightView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    hightLightLabel: {
        marginHorizontal: 9,
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    hightLight: {
        backgroundColor: '#4CAF50',
        height: 1,
        flex: 1,
    },
    colorLabel: {
        textDecorationLine: 'underline',
        color: '#009245',
    },
    labelTerm: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 10,
    },
    textInput: {
        marginVertical: 5,
        paddingHorizontal: 14,
        borderWidth: 0.3,
        borderRadius: 10,
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    eye: {
        position: 'absolute',
        right: 10,
        top: 13,
    },
    container: {
        flex: 1,
    },
    largeTitle: {
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    body: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    title: {
        alignItems: 'center'
    },
    view: {
        paddingHorizontal: 10,
    },
})