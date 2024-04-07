import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'
import ProfileSection from '../components/ProfileSection'
import { useSelector } from 'react-redux';


const Account = props => {
  const { navigation } = props;
  const { account } = useSelector(state => state.account);
  function handleItemEx(item) {
    if (item.navigate == 'EditAccount') {
      navigation.navigate(item.navigate)
    } else if (item.navigate == 'History') {
      navigation.navigate(item.navigate)
    } else if (item.navigate == 'Question') {
      navigation.navigate(item.navigate)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Toolbar title='Thông Tin' />
        <View style={styles.section}>
          <View style={styles.sectionInfomation}>
            <Image source={require('../../assets/image/avt.png')} style={styles.avatar} />
            <View style={styles.infoLabel}>
              <Text style={styles.infoName}>{account.username}</Text>
              <Text style={styles.infoEmail}>{account.email}</Text>
            </View>
          </View>
          <ProfileSection
            arr={settings}
            title='Chung'
            fn={handleItemEx} />
          <ProfileSection
            arr={privacy}
            fn={() => { }}
            title='Bảo mật và Điều khoản' />
          <TouchableOpacity>
            <Text style={[styles.infoName, { color: 'red' }]}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({

  infoEmail: {
    fontWeight: '400',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 19
  },
  infoName: {
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 22
  },
  infoLabel: {
    marginLeft: 20,
  },
  sectionInfomation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  section: {
    marginHorizontal: 20,
  },
  avatar: {
    width: 39,
    height: 39,
    borderRadius: 100,
  },
  container: {
    flex: 1,
  },
})

const settings = [
  { name: 'Chỉnh sửa thông tin', navigate: 'EditAccount' },
  { name: 'Cẩm nang ' },
  { name: 'Lịch sử giao dịch', navigate: 'History' },
  { name: 'Q & A', navigate: 'Question' },
]
const privacy = [
  { name: 'Điều khoản và điều kiện' },
  { name: 'Chính sách quyền riêng tư' },
]
