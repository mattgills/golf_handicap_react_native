import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const RoundCard = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 120,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 8,
        borderRadius: 60,
    }
});

export default RoundCard;