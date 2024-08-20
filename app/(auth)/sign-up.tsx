import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

export default function SignUpPage(){
    return (
        <SafeAreaView className={"flex-1 bg-[#d71a21] px-5 "} >
            <Text className={"text-white"}>Sign up</Text>
        </SafeAreaView>
    )
}