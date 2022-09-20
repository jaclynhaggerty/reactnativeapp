import React, { useRef } from "react";
import { Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Button } from "react-native";

export default function App() {
  const randomNum = useRef(Math.random()).current;
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
          Hello React Native
        </Text>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
        <Button
          onPress={() => Alert.alert("Learning RN is so easy")}
          title="Learn More"
          color="#c1262c"
        />
       
          {[0, 1, 2, 3, 4].map(i => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => Alert.alert(`You pressed image #${i + 1}`)}
                >
                <Image
                source={{
                  uri: `https://picsum.photos/500/300?random=${randomNum + i}`
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
              </TouchableOpacity>
            );
          })}
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30

          }}
        >
          <Text> Hello again! </Text>
        </View>
      </View>
    </ScrollView>
  );
}

