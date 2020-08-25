import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import GolfRoundCard from '../components/GolfRoundCard';
import golfRounds from '../rounds';

const HandicapScreen = props => {
    const golfRoundCardArr = golfRounds.map(round => {
        return (
            <GolfRoundCard
                key={round.id}
                style={styles.card}
                name={round.name}
                date={round.date}
                tees={round.tees}
                score={round.score}
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