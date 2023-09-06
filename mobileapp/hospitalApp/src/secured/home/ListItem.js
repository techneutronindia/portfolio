import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ThemeConsumer, ListItem, Avatar } from '@rneui/themed';

const Product = ({ prod }) => {

    return (
        <ThemeConsumer>
            {({ theme }) => (

                <ScrollView style={{ marginTop: 350, padding: 10, borderRadius: 40 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', margin: 10 }}>Past Consultation</Text>

                    <ListItem containerStyle={{ marginBottom: 10, marginHorizontal: 10, borderRadius: 20, backgroundColor: 'white', elevation: 5 }}>
                        <Avatar
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                        />
                        <ListItem.Content style={{}}>
                            <ListItem.Title style={{ fontWeight: 'bold', fontSize: 16 }}>Dr. Radhakrishnan Roy</ListItem.Title>
                            <ListItem.Subtitle>Cold and Fever</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content right>
                            <ListItem.Title right style={{fontSize:14}}>
                                23 Dec 2020
                            </ListItem.Title>
                            <ListItem.Subtitle right style={{ color: 'blue', fontSize:12 }}>Consult Again</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={{ marginBottom: 10, marginHorizontal: 10, borderRadius: 20, backgroundColor: 'white', elevation: 5 }}>
                        <Avatar
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                        />
                        <ListItem.Content style={{}}>
                            <ListItem.Title style={{ fontWeight: 'bold', fontSize: 16 }}>Dr. Radhakrishnan Roy</ListItem.Title>
                            <ListItem.Subtitle >Cold and Fever</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content right>
                            <ListItem.Title right style={{fontSize:14}}>
                                23 Dec 2020
                            </ListItem.Title>
                            <ListItem.Subtitle right style={{ color: 'blue', fontSize:12 }}>Consult Again</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={{ marginBottom: 10, marginHorizontal: 10, borderRadius: 20, backgroundColor: 'white', elevation: 5 }}>
                        <Avatar
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                        />
                        <ListItem.Content style={{}}>
                            <ListItem.Title style={{ fontWeight: 'bold', fontSize: 16 }}>Dr. Radhakrishnan Roy</ListItem.Title>
                            <ListItem.Subtitle>Cold and Fever</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </ScrollView>
            )}
        </ThemeConsumer>
    );
}



export default Product;