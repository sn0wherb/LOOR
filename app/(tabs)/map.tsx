import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const map = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40, padding: 50 }}>map</Text>
      </View>
    </SafeAreaView>
  );
};

export default map;
