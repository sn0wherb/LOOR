import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40, padding: 50 }}>profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
