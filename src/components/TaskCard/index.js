import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

//ICONES
import iconDefault from "../../assets/default.png";


export default function TaskCard({ done }) {
    return (
        <TouchableOpacity style={[styles.card, done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive} />
                <Text style={styles.cardTitle}>Fazer Relatório</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>22/02/2022</Text>
                <Text style={styles.cardTime}>10:00</Text>

            </View>
        </TouchableOpacity>
    )
}