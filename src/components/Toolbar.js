import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Toolbar = props => {
    const { left, title, right, fnLeft, fnRight } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10, padding: 10 }}>
            {left ? <TouchableOpacity onPress={fnLeft}>
                <Image source={left} style={styles.icon} />
            </TouchableOpacity> : <View style={styles.icon} />}
            {title ? <Text style={styles.title}>{title}</Text> : <View style={styles.icon} />}
            {right ? <TouchableOpacity onPress={fnRight}>
                <Image source={right} style={styles.icon} />
            </TouchableOpacity> : <View style={styles.icon} />}
        </View>
    )
}

export default Toolbar

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 25
    },
    icon: {
        width: 24,
        height: 24
    }
})