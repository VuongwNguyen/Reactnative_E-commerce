import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Toolbar from '../components/Toolbar';
import { ArrowDown2, ArrowLeft2, ArrowUp2 } from 'iconsax-react-native';

const Question = props => {
    const { navigation } = props
    return (
        <View style={styles.container}>

            <Toolbar title='Q&A' left={<ArrowLeft2 color='black' />} fnLeft={() => navigation.goBack()} />

            <View style={styles.section}>
                <TouchableOpacity style={styles.listItem}>
                    <Text style={styles.text}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
                    <ArrowDown2 color='black' size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Text style={styles.text}>Tôi cần phải làm gì khi tôi quên uống viên?</Text>
                    <ArrowDown2 color='black' size={25} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.listItem}>
                        <Text style={styles.text}>Tôi có thể uống nhiều viên hơn không?</Text>
                        <ArrowUp2 color='black' size={25} />
                    </View>

                    <View >
                        <Text style={{ color: 'gray', fontSize: 15, }}>Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    section: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    text: {
        maxWidth: '90%',
        color: 'black',
        fontSize: 17,
    },

});