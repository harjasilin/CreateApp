import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20
    },
    scorestyleWrap: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    scorestyle: {
        fontSize: 18,
        color: 'black'
    },
    currentScore: {
        fontSize: 80,
        color: 'black',
        fontWeight: 'bold'
    },
    mainwrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    touchStyle: {
        height: 45,
        width: 200,
        backgroundColor: 'red',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 15,
        alignSelf: 'center'
    },
    bowl: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    playerBox: {
        height: 300,
        width: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    }


});