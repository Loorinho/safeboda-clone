import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Home(){
    return (
        <SafeAreaView className={"flex-1 bg-[#d71a21] px-5 "} >
            <Text className={"text-white"}>Hello Home</Text>
        </SafeAreaView>
    )
}