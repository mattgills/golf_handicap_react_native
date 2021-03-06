import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Subheading, Divider } from 'react-native-paper';

import Card from '../components/Card';

const GolfRoundCard = props => (
    <TouchableOpacity
        style={{...props.style}}
        onPress={() => props.onPressHandler(props.round)}
    >
        <Card style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <Subheading>{props.round.name}</Subheading>
                <Subheading>{props.round.date}</Subheading>
            </View>
            <Divider />
            <View style={styles.cardBody}>
                <Subheading>{props.round.tees} Tees</Subheading>
                <Subheading>Score: {props.round.score}</Subheading>
            </View>
            {/* <Divider />
            <View style={styles.cardActions}>
            <Button
            icon="pencil-outline"
            onPress={() => console.log('Launch Edit Modal')}
            compact="false"
            >
            Edit
            </Button>
            <Button
            icon="trash-can-outline"
            onPress={() => console.log('Launch Delete Confirmation')}
            compact="true"
            color="red"
            >
            Remove
            </Button>
        </View> */}
        </Card>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardBody: {
        //marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default GolfRoundCard;