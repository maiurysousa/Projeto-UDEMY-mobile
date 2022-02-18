import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
                
    },

    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4FBDBA'
    },

    filterTextInative: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#072227',
        opacity: 0.5
    

    }


});

export default styles;