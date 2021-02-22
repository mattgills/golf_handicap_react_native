import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { IconButton, Text, Modal, Portal, Colors } from 'react-native-paper';

import GolfRoundCard from '../components/GolfRoundCard';
import golfRounds from '../rounds';

const HandicapScreen = props => {
    const [rounds, setRounds] = useState(golfRounds);
    const [selectedRound, setSelectedRound] = useState(null);
    const [visible, setVisible] = useState(false);

    console.log('re render', visible, selectedRound)

    const selectCourseHandler = (course) => {
        setSelectedRound(course);
        setVisible(true);
    };

    const hideModalHandler = () => {
        setVisible(false);
        setSelectedRound(null);
    };

    const golfRoundCardArr = rounds.map(round => {
        return (
            <GolfRoundCard
                key={round.id}
                style={styles.card}
                round={{...round}}
                onPressHandler={selectCourseHandler}
            />
        );
    });

    return (
        <View style={styles.screen}>
            <View style={{height: '90%'}}>
                <ScrollView contentContainerStyle={styles.cardContainer}>
                    {golfRoundCardArr}
                </ScrollView>
            </View>

            <Portal style={styles.cardContainer}>
                <Modal visible={visible} onDismiss={hideModalHandler}>
                    <Text>Example Modal</Text>
                </Modal>
            </Portal>
            
            <View style={styles.buttonContainer}>
                <IconButton
                    color={Colors.green600}
                    icon="plus"
                    size={40}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    cardContainer: {
        alignItems: 'center'
    },
    card: {
        marginVertical: 10,
        width: '80%'
    },
    buttonContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    }
});

export default HandicapScreen;