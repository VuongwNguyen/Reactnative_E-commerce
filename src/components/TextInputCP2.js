import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputCP2 = props => {
    const { placeholder } = props
    return (
        <View>
            <TextInput  style={styles.textInput} placeholder={placeholder} />
        </View>
    )
}

export default TextInputCP2

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10
    }
})