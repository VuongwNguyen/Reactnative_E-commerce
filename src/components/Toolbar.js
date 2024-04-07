import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'

const Toolbar = memo(props => {
    const { left, title, right, fnLeft, fnRight } = props
    return (
        <View style={styles.container}>
            {left ? <TouchableOpacity onPress={fnLeft}>
                {/* <Image source={left} style={styles.icon} /> */}
                {left}
            </TouchableOpacity> : <View style={styles.icon} />}
            {title ? <Text style={styles.title}>{title}</Text> : <View style={styles.icon} />}
            {right ? <TouchableOpacity onPress={fnRight}>
                {/* <Image source={right} style={styles.icon} /> */}
                {right}
            </TouchableOpacity> : <View style={styles.icon} />}
        </View>
    )
})

export default Toolbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10
    },
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