import { StyleSheet, TextInput, View } from 'react-native'
import React, { memo } from 'react'

const TextInputCP2 = memo(props => {
    const { placeholder, value, fnOnChange } = props
    return (
        <View>
            <TextInput onChangeText={(t)=>fnOnChange(t)} value={value} style={styles.textInput} placeholder={placeholder} />
        </View>
    )
})

export default TextInputCP2

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10
    }
})