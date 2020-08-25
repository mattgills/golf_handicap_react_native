import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subheading, Headline, Divider, Button } from 'react-native-paper';

import Card from '../components/Card';

const GolfRoundCard = props => (
    <Card style={{...styles.cardContainer, ...props.style}}>
        <View style={styles.cardHeader}>
            <Headline>Golf Course</Headline>
            <Title>Score: 88</Title>
        </View>
        <Divider />
        <View style={styles.cardBody}>
            <Subheading>Date</Subheading>
            <Subheading>White Tees</Subheading>
        </View>
        <Divider />
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
        </View>
    </Card>
);

const styles = StyleSheet.create({
    cardContainer: {
        //marginVertical: 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardBody: {
        marginVertical: 10,
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