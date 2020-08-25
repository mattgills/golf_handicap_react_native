import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Card from '../components/Card';
import GolfRoundCard from '../components/GolfRoundCard';

const HandicapScreen = props => {
    return (
        <View style={styles.container}>
            <GolfRoundCard style={styles.card}/>
            {/* <View style={styles.buttonContainer}>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View> */}
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    card: {
        width: '80%'
    }
});

export default HandicapScreen;