import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ScrollView, Pressable,Image } from 'react-native'
import { Card } from '@rneui/themed';

import { auth } from '../firebase'

const HomeScreen = () => {

  return (
    <ScrollView>
      <Text>Welcome {auth.currentUser?.email}.Have a look at the experiences of people</Text>
        <Card>
        <Card.Image style={styles.image} source={require('../images/image1.jpeg')} />
        <Text style={{marginBottom: 10}}>
                        Exercise has been proved to elevate your mood and lessen stress, anxiety, and depressive symptoms. The areas of the brain that control stress and anxiety undergo alterations as a result. Additionally, it can improve the brain's receptivity to the neurotransmitters serotonin and norepinephrine, which lessen depressive symptoms.
                        Exercise can also boost endorphin production, which is known to assist create happy sensations and lessen the sense of pain.
                        It's interesting that it doesn't matter how hard you work out. It appears that physical activity, regardless of how strenuous, might improve your mood.
         </Text>
        </Card>
        <Card>
         <Card.Image style={styles.image} source={require('../images/image2.jpeg')} />
         <Text style={{marginBottom: 10}}>
        It's critical to comprehend the connection between exercise and energy expenditure in order to comprehend how exercise affects weight loss.
                        Your metabolic rate will decrease when on a diet, which may momentarily prevent weight loss. On the other hand, consistent exercise has been demonstrated to raise metabolic rate, which can help you burn more calories and lose weight. Additionally, studies have demonstrated that combining resistance training with aerobic exercise can increase fat reduction and muscle preservation, which is crucial for sustaining weight loss and lean muscle mass
        </Text>
        </Card>
        <Card>
        <Card.Image style={styles.image} source={require('../images/image3.jpeg')} />
        <Text style={{marginBottom: 10}}>
        For many people, especially those with various medical issues, exercise may be a great energy enhancer. In an earlier study, 36 participants who had previously experienced chronic fatigue reported feeling less tired after 6 weeks of consistent exercise. Not to mention the great advantages of exercise for the heart and lungs. Exercise that is aerobic strengthens the heart and lungs, which has a substantial positive impact on energy levels.
        Your heart pumps more blood when you move more, giving your working muscles more oxygen. Regular exercise increases the speed and efficiency with which your heart transports oxygen to your blood, enhancing the effectiveness of your muscles.
        </Text>
        </Card>
        <Card>
         <Card.Image style={styles.image} source={require('../images/image4.jpeg')} />
        <Text style={{marginBottom: 10}}>
        Exercise helps protect memory and cognitive abilities while enhancing brain function.It does this in many ways. First, it speeds up your heartbeat, which encourages the flow of blood and oxygen to your brain. Additionally, it has the ability to increase hormone synthesis, which promotes the proliferation of brain cells. Additionally, since these illnesses may impact how well your brain functions, the capacity of exercise to avoid chronic disease may also have positive effects on your mental health. Regular exercise is crucial for older persons because oxidative stress, inflammation, and aging all contribute to changes in brain structure and function.
        </Text>
        </Card>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {
    resizeMode: "stretch",
    height: 200,
    width: '100%'
  },
})