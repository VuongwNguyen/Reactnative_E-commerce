import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputCP from '../components/TextInputCP';
import { TickCircle } from 'iconsax-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { APILogin } from '../api/UserAPI';

const Login = props => {
  const { navigation } = props;
  const [password, setPassword] = useState('0986620991');
  const [email, setEmail] = useState('0975091673');
  const [remember, setRemember] = useState(false);
  const imageRemember = remember ? <TickCircle color='#009245' /> : <TickCircle color='#8B8B8B' />;
  const [waiting, setWaiting] = useState(false);
  const buttonColor = waiting ? '#8B8B8B' : '#009245';
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { account, accountStatus } = useSelector(state => state.account);

  function handleRemember() {
    setRemember(!remember);
  }

  function handleLogin() {
    setWaiting(true);
    try {
      if (email == '' || password == '') {
        setMessage('Vui lòng nhập đầy đủ thông tin');
        setWaiting(false);
        return;
      } else {
        const body = {
          username: email,
          password: password
        }
        dispatch(APILogin(body));
      }
    } catch (err) {
      console.log(err);
      setMessage('Đã có lỗi xảy ra');
    }
  }
  useEffect(() => {
    if (accountStatus == 'loading') {
      setWaiting(true);
    }
    if (accountStatus == 'success') {
      if (account) {
        navigation.navigate('HomeTab');
        setMessage('');
        setWaiting(false);
      }
    } else if (accountStatus == 'fail') {
      setMessage('Sai tài khoản hoặc mật khẩu');
      setWaiting(false);
    }
  }, [accountStatus, account]);



  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={require('../../assets/image/mainImage.png')} />
          <View style={styles.view}>
            <View style={styles.title}>
              <Text style={styles.largeTitle}>Chào Mừng Bạn</Text>
              <Text style={styles.body}>Đăng nhập tài khoản</Text>
            </View>
            <TextInputCP placeholder='Email hoặc Số điện thoại' fn={setEmail} value={email} />
            <TextInputCP placeholder='Mật khẩu' password fn={setPassword} value={password} />
            {message != '' && <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>}
            <View style={styles.viewRemember}>
              <TouchableOpacity style={[styles.viewRemember, styles.gap]} onPress={handleRemember}>
                {imageRemember}
                <Text style={styles.labelRemember}>Nhớ tài khoản</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.labelRemember, { color: '#009245' }]}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogin} disabled={waiting} style={{ backgroundColor: buttonColor, padding: 10, borderRadius: 15, alignItems: 'center', marginTop: 20, }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', fontFamily: 'Poppins-Bold' }}>{waiting ? 'Đang xủ lí ...' : 'Đăng nhập'}</Text>
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
                  <Image style={styles.icon} source={require('../../assets/image//logos_facebook.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.labelRemember}>Bạn chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.labelRemember, { color: '#009245' }]}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

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
  labelRemember: {
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  gap: {
    gap: 5,
  },
  viewRemember: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    padding: 10,
  },
  container: {
    flex: 1
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
})

