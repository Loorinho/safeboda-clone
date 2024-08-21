import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, TextInput, View} from "react-native";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";

export default function SignUpPage(){

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px] ">
                    <View className="text-3xl inset-0 w-full h-full absolute bg-black opacity-40">
                        <Image source={images.cocis} className="z-0 w-full h-[250px] " />

                    </View>

                </View>
                <Text className="text-3xl font-JakartaSemiBold  bottom-5 left-12 text-blue-500 ">
                    Create Your Account
                </Text>
                <View className="p-3">
                    <InputField
                        label="Name"
                        placeholder="Enter name"
                        icon={icons.person}
                        // value={form.name}
                        // onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        icon={icons.email}
                        textContentType="emailAddress"
                        // value={form.email}
                        // onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        textContentType="password"
                        // value={form.password}
                        // onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                    <CustomButton
                        title="Sign Up"
                        // onPress={onSignUpPress}
                        className="mt-6"
                    />
                    {/*<OAuth />*/}
                    <Link
                        href="/sign-in"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Already have an account?{" "}
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>
                {/*<ReactNativeModal*/}
                {/*    isVisible={verification.state === "pending"}*/}
                {/*    // onBackdropPress={() =>*/}
                {/*    //   setVerification({ ...verification, state: "default" })*/}
                {/*    // }*/}
                {/*    onModalHide={() => {*/}
                {/*        if (verification.state === "success") {*/}
                {/*            setShowSuccessModal(true);*/}
                {/*        }*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">*/}
                {/*        <Text className="font-JakartaExtraBold text-2xl mb-2">*/}
                {/*            Verification*/}
                {/*        </Text>*/}
                {/*        <Text className="font-Jakarta mb-5">*/}
                {/*            We've sent a verification code to {form.email}.*/}
                {/*        </Text>*/}
                {/*        <InputField*/}
                {/*            label={"Code"}*/}
                {/*            icon={icons.lock}*/}
                {/*            placeholder={"12345"}*/}
                {/*            value={verification.code}*/}
                {/*            keyboardType="numeric"*/}
                {/*            onChangeText={(code) =>*/}
                {/*                setVerification({ ...verification, code })*/}
                {/*            }*/}
                {/*        />*/}
                {/*        {verification.error && (*/}
                {/*            <Text className="text-red-500 text-sm mt-1">*/}
                {/*                {verification.error}*/}
                {/*            </Text>*/}
                {/*        )}*/}
                {/*        <CustomButton*/}
                {/*            title="Verify Email"*/}
                {/*            onPress={onPressVerify}*/}
                {/*            className="mt-5 bg-success-500"*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*</ReactNativeModal>*/}
                {/*<ReactNativeModal isVisible={showSuccessModal}>*/}
                {/*    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">*/}
                {/*        <Image*/}
                {/*            source={images.check}*/}
                {/*            className="w-[110px] h-[110px] mx-auto my-5"*/}
                {/*        />*/}
                {/*        <Text className="text-3xl font-JakartaBold text-center">*/}
                {/*            Verified*/}
                {/*        </Text>*/}
                {/*        <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">*/}
                {/*            You have successfully verified your account.*/}
                {/*        </Text>*/}
                {/*        <CustomButton*/}
                {/*            title="Browse Home"*/}
                {/*            onPress={() => router.push(`/(root)/(tabs)/home`)}*/}
                {/*            className="mt-5"*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*</ReactNativeModal>*/}
            </View>
        </ScrollView>
    );
}