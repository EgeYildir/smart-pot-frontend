import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DataBlock } from '../components/default'

const plant = {
    humidity: "62",
    temperature: "16",
    light: "100",
};

export default function PlantScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <DataBlock 
                text="Temperature"
                    value={plant.temperature}
                    style={styles.temperature}
                />
                <DataBlock 
                    text="Humidity"
                    value={plant.humidity}
                    style={styles.humidity}
                />
            </View>
            <View style={styles.dataContainer} >
                <DataBlock 
                    text="Light"
                    value={plant.light}
                    style={styles.light}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "start",
        alignItems: "center",
    },
    dataContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        alignSelf: "stretch",
    },
    temperature: {
        color: "red",
    },
    humidity: {
        color: "blue",
    },
    light: {
        color: "green",
    },
})