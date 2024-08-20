import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

export default function HomePage(){
    return (
        <SafeAreaView className={"flex-1 bg-[#d71a21] px-5 "} >
            <Text className={"text-white"}>Hello Home</Text>
        </SafeAreaView>
    )
}