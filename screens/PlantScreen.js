import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { DataBlock } from '../components/default'
import { Button, Text } from '../components/custom-item-lib'
import plantDataApi from '../api/plantData'
import useApi from '../hooks/useApi'

export default function PlantScreen({ navigation }) {
    const {data: plant, error, loading, request: loadPlantData} = useApi(plantDataApi.getPlantData);

    useEffect(() => {
        loadPlantData();
    }, []);

    return (
        <View style={styles.container}>
            {error && <>
                <Text text="Oops, something went wrong..." />
                <Button text="Retry" onPress={loadPlantData} />
            </>}
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
        justifyContent: "flex-start",
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