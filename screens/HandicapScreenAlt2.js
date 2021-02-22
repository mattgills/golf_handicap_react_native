import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { IconButton, Text, Modal, Portal, Colors } from 'react-native-paper';

import ScoreRoundCard from '../components/ScoreRoundCard';
import golfRounds from '../rounds';

const HandicapScreenAlt2 = props => {
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
            <ScoreRoundCard
                key={round.id}
                style={styles.card}
                round={{...round}}
                onPressHandler={selectCourseHandler}
            />
        );
    });

    return (
        <View style={styles.screen}>
            <View style={{height: '100%'}}>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    card: {
        marginVertical: 10,
        width: '33%',
        alignItems: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    }
});

export default HandicapScreenAlt2;