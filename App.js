import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";

//apis
import youtube from "./src/apis/youtube";

//components
import ListItem from "./src/components/ListItem";

const App = () => {
  // const name = 1;
  const [value, setValue] = useState("");
  const [videos, setVideos] = useState([]);

  async function fetchData() {
    const response = await youtube.get("search", {
      params: {
        q: value,
      },
    });
    setVideos(response.data.items);
  }
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter the name of video to search"
        onChangeText={(newVal) => {
          setValue(newVal);
        }}
      />
      <Button
        title="Search"
        color={"red"}
        style={styles.textStyle}
        onPress={() => {
          fetchData();
        }}
      />
      <View style={styles.textStyle}>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return <ListItem video={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "black",
    height: 50,
    fontSize: 20,
    color: "white",
    // margin: 8,
    // padding: 8,
  },
  textStyle: {
    backgroundColor: "black",
  },
});

export default App;

// first curly braces is for selecting variables in react
// second curly braces is for properties

//  array destructing - a new and and important concept used for larger projects

//  arr = [1,2,3,4]

//  const [p,,q] = arr
