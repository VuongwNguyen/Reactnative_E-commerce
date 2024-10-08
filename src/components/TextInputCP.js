import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useState } from 'react'
import { Eye, EyeSlash } from 'iconsax-react-native';

const TextInputCP = memo(props => {
    const { placeholder, password, fn, value } = props
    const [eye, setEye] = useState(password ? true : false);
    const imageEye = eye ? <EyeSlash color='#8B8B8B' variant='Bold' /> : <Eye color='#8B8B8B' variant='Bold' />;
    function handleEye() {
        setEye(!eye);
    }
    return (
        <View>
            <View style={styles.textInput}>
                <TextInput onChangeText={t => fn(t)} value={value} placeholder={placeholder} secureTextEntry={eye} />
                {password && <TouchableOpacity onPress={handleEye} style={styles.eye}>
                    {/* <Image source={imageEye} /> */}
                    {imageEye}
                </TouchableOpacity>}
            </View>
        </View>

    )
})

export default TextInputCP

const styles = StyleSheet.create({
    eye: {
        position: 'absolute',
        right: 10,
        top: 8,
        padding: 5,
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
})