import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Headline, Title, Subheading, Text, Colors } from 'react-native-paper';

import RoundCard from '../components/RoundCard';

const ScoreRoundCard = props => {
    const { round } = props;
    const difference = parseInt(round.score) - parseInt(round.par);

    return (
        <TouchableOpacity
            style={{...props.style}}
            onPress={() => props.onPressHandler(props.round)}
        >
            <RoundCard style={{...styles.cardContainer, backgroundColor: getBackgroundColor(round)}}>
                <View style={styles.cardHeader}>
                    <Text style={{fontSize: 16, color: getFontColor(round)}}>{round.date}</Text>
                    <Headline style={{fontWeight: 'bold', color: getFontColor(round)}}>{round.score}
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: getFontColor(round)}}> ({ difference > 0 ? '+' : ''}{difference})</Text>
                    </Headline>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, flex: 0.75, flexWrap: 'wrap', textAlign: 'center', color: getFontColor(round)}}>{round.name}</Text>
                    </View>
                </View>
            </RoundCard>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: 10,
    },
    cardHeader: {
        width: 120,
        height: 120,
        borderRadius: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: 'white'
    }
});

const getBackgroundColor = (round) => {
    if (round.id === '2') {
        return Colors.green600;
    }
    return 'white';
}

const getFontColor = (round) => {
    if (round.id === '2') {
        return 'white';
    }
    return 'black';
}

export default ScoreRoundCard;