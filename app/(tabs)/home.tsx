import { View, Text, Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const home = () => {
  let stories: JSX.Element[] = [];
  let posts: JSX.Element[][] = [[], []];

  const storyColors: string[] = [
    "pink",
    "gold",
    "dodgerblue",
    "olivedrab",
    "burntsienna",
    "violet",
    "crimson",
    "lime",
    "cyan",
    "red",
    "beige",
  ];
  const postHeight: number[] = [170, 220, 250];

  // Generate stories and posts
  for (let i = 0; i < 20; i++) {
    // Pick random color for story, height for post
    const colorIndex: number = Math.floor(Math.random() * storyColors.length);
    const postHeightIndex: number = Math.floor(
      Math.random() * postHeight.length
    );

    // Generate components, store em in an array that gets read upon export
    stories[i] = (
      <MaterialCommunityIcons
        color={storyColors[colorIndex]}
        name="circle-slice-8"
        size={80}
        key={i}
        style={styles.story}
      />
    );

    const j = i % 2 === 0 ? 0 : 1; // Alternate between 2 columns
    posts[j][i] = (
      <View
        style={{
          // TO-DO: get device width and divide in half to get consistent 2 columns filling up the whole screen. I guess this is relevant in a lot of things, adjusting for device width. media query ahh
          width: 170,
          height: postHeight[postHeightIndex],
          borderRadius: 10,
          borderColor: "#ddd",
          borderWidth: 2,
          backgroundColor: storyColors[colorIndex],
          margin: 4,
          marginBottom: 6,
        }}
        key={i}
      ></View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }} // I don't think this does the thing it's supposed to but ok
        showsVerticalScrollIndicator={false}
      >
        {/* STORIES */}
        <ScrollView
          horizontal={true}
          style={styles.storiesContainer}
          contentContainerStyle={{ alignItems: "flex-end" }}
          showsHorizontalScrollIndicator={false}
        >
          {stories}
        </ScrollView>
        {/* POSTS */}
        <View style={styles.postsContainer}>
          <View>{posts[0]}</View>
          <View>{posts[1]}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444",
  },
  aboveStories: {
    backgroundColor: "#333",
  },
  storiesContainer: {
    flex: 1,
    padding: 6,
    backgroundColor: "#333",
    height: 96,
  },
  story: {},
  postsContainer: {
    backgroundColor: "#444",
    paddingTop: 4,
    gap: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
