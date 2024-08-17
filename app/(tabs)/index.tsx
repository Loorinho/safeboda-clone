import {Image, StyleSheet, Platform, View, Text, StatusBar, SafeAreaViewComponent} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
      <SafeAreaView className=" flex-1 items-center justify-center">
          <Text className="text-red-600">Open up App.js to start working on your app now!</Text>
          <StatusBar barStyle="light-content" />
      </SafeAreaView>
  );
}
