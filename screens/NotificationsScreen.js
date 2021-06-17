import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Notification } from '../components/default'

//TODO: Remove this list after backend connection.
const notifs = [
    {
        id: 1,
        pictureSource: "https://picsum.photos/id/1020/200",
        username: "flowerhunter_31",
        text: " liked your guide ",
    },
    {
        id: 2,
        pictureSource: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_PE686835_S5.JPG",
        username: "your_cactus",
        text: " needs some water ",
    },
    {
        id: 3,
        pictureSource: "https://picsum.photos/id/1025/200",
        username: "XxX_wheatgrower_XxX",
        text: " commented your guide ",
    }
];

export default function NotificationsScreen() {
    return (
        <Screen>
            <View style={styles.container} >
                <FlatList 
                    data={notifs}
                    keyExtractor={notif => notif.id.toString()}
                    renderItem={({ item }) => (
                        <Notification
                            pictureSource={item.pictureSource}
                            notifName={item.username}
                            notifText={item.text}
                        />
                    )}
                    refreshing={() => console.log()}
                    onRefresh={() => console.log()}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        height: "100%",
        padding: 5,
    },
})
