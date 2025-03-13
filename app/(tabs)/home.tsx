import { View, Text, Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const home = () => {
  let stories: JSX.Element[] = [];
  let posts: JSX.Element[] = [];

  const storyColors: string[] = [
    "pink",
    "gold",
    "dodgerblue",
    "olivedrab",
    "burntsienna",
    "violet",
  ];
  const postHeight: number[] = [170, 220, 250];

  // Generate stories and posts
  for (let i = 0; i < 20; i++) {
    // Pick random color for story, ratio for post
    const colorIndex: number = Math.floor(Math.random() * storyColors.length);
    const postHeightIndex: number = Math.floor(
      Math.random() * postHeight.length
    );
    console.log(postHeightIndex);

    // Generate components
    stories[i] = (
      <MaterialCommunityIcons
        color={storyColors[colorIndex]}
        name="circle-slice-8"
        size={60}
        key={i}
      />
    );
    posts[i] = (
      <View
        style={{
          // TO-DO: get device width and divide in half
          width: 170,
          height: postHeight[postHeightIndex],
          borderRadius: 10,
          borderColor: "violet",
          borderWidth: 2,
          backgroundColor: "purple",
          margin: 4,
        }}
      ></View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={true}
        style={styles.storiesContainer}
        showsHorizontalScrollIndicator={false}
      >
        {stories}
      </ScrollView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.postsContainer}>{posts}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444",
  },
  storiesContainer: {
    padding: 6,
    backgroundColor: "#333",
    height: 80,
  },
  story: {},
  postsContainer: {
    backgroundColor: "#444",
    paddingTop: 4,
    gap: 4,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
