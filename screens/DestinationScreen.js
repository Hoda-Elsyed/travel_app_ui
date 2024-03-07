import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function DestinationScreen(props) {
    const navigation = useNavigation()
    const [isFavorite, toggleFavorite] = useState(false)
    const item = props.route.params
    return (
        <View className="bg-white flex-1 "  >
            <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
            <LinearGradient

                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={{ width: wp(100), height: hp(55)  }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-50 "
            />
            <StatusBar style='light' />

            {/* backbutton and hearticon */}
            <SafeAreaView
                className="absolute  w-full flex-row justify-between items-center"
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="top-5 left-5 rounded-full p-3"
                    style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                >
                    <ChevronLeftIcon strokeWidth={4} size={wp(7)} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFavorite(!isFavorite)}
                    className="top-5 right-5 rounded-full p-3"
                    style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                >
                    <HeartIcon size={wp(7)} color={isFavorite ? 'red' : 'white'} />

                </TouchableOpacity>
            </SafeAreaView>
            {/* title && description and booking button */}
            <View className="bg-white flex-1 justify-between  p-5 pt-10 -mt-14" style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                <ScrollView showsVerticalScrollIndicator={false} className="space-y-5" >
                    <View className="flex-row justify-between items-center">
                        <Text style={{ fontSize: wp(7) }} className="font-bold text-neutral-700">{item.title}</Text>
                        <Text style={{ fontSize: wp(7), color: theme.text }} className="text-xl font-bold" >$ {item.price}</Text>
                    </View>

                    <Text style={{ fontSize: wp(3.7) }} className="tracking-wide text-neutral-600 mb-2">{item.longDescription}</Text>

                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-start space-x-2">
                            <ClockIcon color='skyblue' size={wp(7)} />
                            <View className="space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{item.duration}</Text>
                                <Text className="text-neutral-600 tracking-wide">Duration</Text>
                            </View>
                        </View>
                        <View className="flex-row items-start space-x-2">
                            <MapPinIcon color='#f87171' size={wp(7)} />
                            <View className="space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{item.distance}</Text>
                                <Text className="text-neutral-600 tracking-wide">Distance</Text>
                            </View>
                        </View>
                        <View className="flex-row items-start space-x-2">
                            <SunIcon color='orange' size={wp(7)} />
                            <View className="space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{item.weather}</Text>
                                <Text className="text-neutral-600 tracking-wide">Weather</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{width:wp(50), height:wp(15), backgroundColor: theme.bg(0.7)}}
                 className="mx-auto mb-6 justify-center items-center rounded-full"
                >
                    <Text style={{fontSize: wp(5.5)}} className="text-white font-bold">Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}