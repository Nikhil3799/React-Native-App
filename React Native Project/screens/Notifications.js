import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '@rneui/themed';
export default function NotificationsScreen(){
    return(
        <View>
            <Card>
                <Text style={styles.large}>Userunknown has posted something</Text>
                <Text style={styles.small}>1 hour ago</Text>
            </Card>
            <Card>
                <Text style={styles.large}>It has been a while you have posted something</Text>
                <Text style={styles.small}>4 hours ago</Text>
            </Card>
            <Card>
                <Text style={styles.large}>You have been invited to this event. Click for more details</Text>
                <Text style={styles.small}>1 day ago</Text>
                <Text></Text>
            </Card>
            <Card>
                <Text style={styles.large}>Welcome to the Smart Watch Community</Text>
                <Text style={styles.small}>3 days ago</Text>
            </Card>
            <Card>
                <Text style={styles.large}>Welcome to the app</Text>
                <Text style={styles.small}>3 days ago</Text>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    large:{
        fontWeight: 'bold',
        
    },
    small: {
        fontWeight: '100',
    },
})