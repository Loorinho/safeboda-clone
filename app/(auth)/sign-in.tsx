import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View, Text, Image} from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import {icons, images} from "@/constants";
import {useState} from "react";
import {Link} from "expo-router";

export default function SignInPage(){

    const [form, setForm] = useState({
        email: "",
        password: "",
    })


    function onSignInPress() {
        console.log(form)
    }
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Welcome back 👋
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        icon={icons.email}
                        textContentType="emailAddress"
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />

                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        textContentType="password"
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />

                    <CustomButton
                        title="Sign In"
                         onPress={onSignInPress}
                        className="mt-6"
                    />

                    {/*<OAuth />*/}

                    <Link
                        href="/sign-up"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Don't have an account?{" "}
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>

                    <Link
                        href="(root)/home"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                       Go To Home Page

                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}