import React, { useRef } from "react";
import { Text, View, ActivityIndicator, Image, TouchableOpacity, FlatList, TextInput, StyleSheet, onChangeText } from "react-native";
import { Alert } from "react-native";
import { Button } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function MyHeader() {
  const [myText, setMyText] = React.useState("");
  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      {/* <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      /> */}
      <Button
        onPress={() => Alert.alert(myText)}
        title="Show Input"
        color="#c1262c"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMyText}
        value={myText}
      />
    </View>
  )
}
function MyFooter() {
  return (
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
  )
}

export default function App() {
  const randomNum = useRef(Math.random()).current;
  return (
    <FlatList
      ListHeaderComponent={MyHeader}
      data={[0, 1, 2, 3, 4]}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
          >
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + item}`
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => String(item)}
      ListFooterComponent={MyFooter}
    />
  );
}

