import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1 justify-end">
      {/* background image  */}

      <Image source={require('../assets/images/welcome.png')}
        className="w-full h-full absolute"
      />

      {/* content and gradient */}

      <View className='p-5 pb-10 space-y-8'>
        
      <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(3,105,161,0.8)']}
          style={{ width: wp(100), height: hp(60) }}
          start={{x:0.5, y:0}}
          end={{x:0.5, y:1}}
          className="absolute bottom-0"
        />
        <View className="">
          <Text style={{ fontSize: wp(10) }} className='text-white font-bold'>Traveling made easy!</Text>
          <Text style={{ fontSize: wp(4) }} className='text-neutral-200 font-medium'>Experience the world's best adventure around the world with us</Text>
        </View>

        {/* button View */}

        <TouchableOpacity
         onPress={()=>navigation.navigate('Home')}
        className='bg-orange-500 rounded-full mx-auto px-12 py-3'>
          <Text style={{ fontSize: wp(5.5) }} className="text-white font-bold">Let's go!</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}