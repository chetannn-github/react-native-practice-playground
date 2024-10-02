import { Image, ImageBackground, RefreshControl, SafeAreaView, ScrollView, TextInput, View } from "react-native"
import React, { useState } from "react"
import { Text } from "react-native"
import bgImage from"../public/assets/bg.jpg"
import logo from "../public/assets/logo.png"
import { Button } from "react-native"
import { StatusBar } from "react-native"

const index = () => {
    let [isLoginForm,setIsLoginForm] = useState(true);
    let [isRefresh , setIsRefresh] = useState(false);
    let handleToggleForm = ()=>{
        setIsLoginForm(!isLoginForm)
    }
    let handleRefresh = ()=>{
        setIsRefresh(true);
        setTimeout(()=>{setIsRefresh(false)},2000);
    }

    return (
   
    <SafeAreaView className="relative flex flex-col   bg-blue-800 " style={{flex:1}}>
         
         <StatusBar  backgroundColor="black" barStyle="dark-content"  />
      
                <ImageBackground 
                resizeMode="cover"
                className="h-full w-full absolute opacity-50"
                source={bgImage}>
                </ImageBackground> 
                <View id="header" className="h-[12vh] w-full  relative bg-opacity-5">
                    <Image source={logo} className="relative h-full w-1/2"></Image>
                </View>
                
                <ScrollView 
                    
                    // HeaderComponent={<Text className="text-white">hii</Text>}
                    refreshControl={<RefreshControl refreshing={isRefresh} 
                    onRefresh={handleRefresh}/>}
                    className="  relative  flex flex-col"
                    style={{flex:1}}
                >
                    <View className="h-[60vh] flex justify-center items-center">
                        <View className="w-[90%]  relative min-h-fit p-3  bg-[#0000004e]">
                            <Text className="text-white text-4xl mb-5">{`${isLoginForm? "Login":"Signup"}`}</Text>

                            <TextInput 
                            placeholder="Email"
                            placeholderTextColor="#888" 
                            className="h-[7vh] w-full bg-black px-2 text-white mb-4">
                            </TextInput>

                            {!isLoginForm&&<TextInput 
                            placeholder="username"
                            placeholderTextColor="#888" 
                            className="h-[7vh] w-full bg-black px-2 text-white mb-4">
                            </TextInput>}

                            <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#888" 
                            className="h-[7vh] w-full bg-black px-2 text-white mb-4">
                            </TextInput>
                            
                            {!isLoginForm&&<TextInput 
                            placeholder="confirm Password"
                            placeholderTextColor="#888" 
                            className="h-[7vh] w-full bg-black px-2 text-white mb-4">
                            </TextInput>}
                        
                            <Button title={`${isLoginForm? "Login":"Signup"}`} color={"#e50914"}></Button>

                            <Text onPress={handleToggleForm} className="mt-2 text-white">{`${!isLoginForm? "Already user?  Sign in now":"New user?  Sign up now"}`}</Text>
                    </View>

                    </View> 
                    
                  
                </ScrollView>
        
    
    </SafeAreaView>
    
        
        
        
       

    );
}


export default index;