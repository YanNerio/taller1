import React from "react";
import { View, Text,  StyleSheet } from "react-native"

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.cityName}</Text>
    </View>
);

const styles =StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: "#f1f1f1",
        padding: 15
    }
})
export default listItem;