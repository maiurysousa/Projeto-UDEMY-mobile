import React from "react";
import { View, Text } from "react-native";

// COMPONENTES
import Header from "../../components/Header";

import styles from "./styles";

export default function Home() {
    return(
        <View style={styles.container}>
            <Header />
        </View>         
    )
}

