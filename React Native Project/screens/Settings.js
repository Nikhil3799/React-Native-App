import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '@rneui/themed';
export default function SettingsScreen(){
    return(
        <View>
            <Card><Text style={styles.content}>Profile</Text></Card>
            <Card><Text style={styles.content}>Account Privacy</Text></Card>
            <Card><Text style={styles.content}>Display</Text></Card>
            <Card><Text style={styles.content}>Sound</Text></Card>
            <Card><Text style={styles.content}>Software Update</Text></Card>
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        fontWeight:'bold',
    },
})