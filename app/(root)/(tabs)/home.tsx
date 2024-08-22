import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {useAuth, useUser} from "@clerk/clerk-expo";
import {router} from "expo-router";

export default function HomePage(){
    const { user } = useUser();
    const { signOut } = useAuth();

    // const { setUserLocation, setDestinationLocation } = useLocationStore();

    const handleSignOut = () => {
        signOut();
        router.replace("/(auth)/sign-in");
    };
    return (
        <SafeAreaView className={"flex-1 bg-[#d71a21] px-5 "} >
            <Text className={"text-white"}>Hello Home</Text>
        </SafeAreaView>
    )
}
