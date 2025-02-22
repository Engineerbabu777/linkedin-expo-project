import { Image, StyleSheet, Text, View,SafeAreaView } from "react-native";
import React from "react";

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
      }}
    >
      {/* IMAGE OF LINKEDIN! */}
      <View>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
