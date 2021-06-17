import React, { useEffect,useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { DataBlock, Error, Image } from '../components/default'
import plantDataApi from '../api/plantData'
import useApi from '../hooks/useApi'
import { Text } from '../components/custom-item-lib'
import colors from '../config/colors'
import io from 'socket.io-client/dist/socket.io';
import authStorage from '../auth/storage'

const plantData = 
    {
        id: 1,
        userId: "1",
        plant: "Strawberry",
        envData:
        {
            humidity: "62",
            temperature: "16",
            light: "100",
        },
        images: [
            {
                id: "1", 
                uri: "https://picsum.photos/id/1080/500",
            },
            {
                id: "2",
                uri: "https://picsum.photos/id/189/200",
            }
        ],
        date: "06.06.06",
    };

let socket;

export default function PlantScreen({ navigation }) {
    const {data: plant, error, loading, request: loadPlantData} = useApi(plantDataApi.getPlantData);

    const [plantData,setPlantData] = useState({});

    useEffect(()=> {
        socket = io('http://192.168.1.4:3001',{
            cors:{
                origin: '*'
            }
        })

        socket.on('deviceData',data => {
            //const data = JSON.parse(payload);
            console.log('payload',data,data.humidity);
            setPlantData(data);
        });
        socket.on('auth', ({init,ok})=> {
            if(init == true ){
                return authStorage
                        .getToken()
                        .then(token => socket.emit('auth',{token}));
            }
            if(!ok) {
                console.log('Authentication can not be established');
                return
            }

            
        })
    });

    useEffect(() => {
        loadPlantData();
    }, []);

    /*error !== null && <Error onPress={loadPlantData} /> */
    /*plant !== null &&
            <>
            <ActivityIndicator animating={loading} size="large" />
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
                    value={plant.light}
                    style={styles.light}
                />
            </View> </>*/

    return (
        <View style={styles.container}>
            <Image source="https://picsum.photos/id/1080/500" style={styles.image} />
            <View style={styles.cardContainer} >
                <Text text={plantData.plant} style={styles.title} />
                <View style={styles.dataContainer}>
                    <DataBlock 
                        text="Temperature"
                        value={plantData?.temperature ?? ''}
                        style={styles.temperature}
                    />
                    <DataBlock 
                        text="Humidity"
                        value={plantData?.humidity ?? ''}
                        style={styles.humidity}
                    />
                </View>
                <View style={styles.dataContainer} >
                    <DataBlock 
                        text="Light"
                        value={plantData?.light ?? '' }
                        style={styles.light}
                    />
                    <DataBlock 
                        text="Moisture"
                        value={plantData?.moisture ?? '' }
                        style={styles.moisture}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
    },
    cardContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        marginTop: "40%",
        paddingTop: 25,
        padding: 15,
    },
    dataContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 15,
    },
    title: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    temperature: {
        color: "red",
        width: "100%",
    },
    humidity: {
        color: "blue",
    },
    light: {
        color: "green",
    },
    image: {
        position: "absolute",
    },
    moisture: {
        color: "brown",
    },
})