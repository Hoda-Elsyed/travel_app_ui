import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import { TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


export default function Destinations() {
    const navigation = useNavigation()
    return (
        <View className="flex-row justify-between flex-wrap mx-4  mb-10">
            {
                destinationData.map((des, index) => {
                    const navigation = useNavigation()

                    const [isFavorite, toggleFavorite] = useState(false)
                    let favorite = isFavorite ? 'red' : 'white'
                    console.log(des.image)
                    return (

                        <TouchableOpacity
                            onPress={() => navigation.push('Destination', { ...des })}
                            style={{ width: wp(44), height: wp(65) }}
                            className="justify-end relative p-4 py-6 space-y-2 mb-5"
                            key={index}>
                            <Image source={des.image}
                                className="absolute"
                                style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
                            />
                            <LinearGradient

                                colors={['transparent', 'rgba(0,0,0,0.8)']}
                                style={{ width: wp(44), height: hp(15), borderRadius: 35 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "
                            />
                            <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)} style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="absolute top-1 right-3 p-3 rounded-full" >
                                <HeartIcon size={wp(5)} color={favorite} />
                            </TouchableOpacity>
                            <Text className="font-semibold text-white" style={{ fontSize: wp(4) }}>{des.title}</Text>
                            <Text className="text-white" style={{ fontSize: wp(2.2) }}>{des.shortDescription}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}