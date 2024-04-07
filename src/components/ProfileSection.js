import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'

const ProfileSection = memo(props => {
    const { arr, title, fn } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.hightLight} />
            {arr.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => fn(item)}>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
})

export default ProfileSection

const styles = StyleSheet.create({
    hightLight: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: 10
    },
    container: {
        marginVertical: 10,
    },
    title: {
        color: '#7F7F7F',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
    },
    name: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        marginVertical: 10,
        fontFamily: 'Lato-Regular'
    },
})