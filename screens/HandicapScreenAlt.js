import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Divider, Text, IconButton, Colors } from 'react-native-paper';

const HandicapScreenAlt = props => {
    return (
        <View style={styles.screen}>
            <View style={{height: '90%'}}>
                <ScrollView>
                    <Divider/>
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <Divider/>
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
                    <List.Item
                        title={"Golf Course Name"}
                        description={props => <Text>White Tees{'\n'}Date</Text>}
                        right={props => <List.Subheader style={{fontSize: 18}}>Score: 88</List.Subheader>}
                    />
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

export default HandicapScreenAlt;