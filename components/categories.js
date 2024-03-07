import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { ScrollView } from 'react-native';
import { categoriesData } from '../constants';

export default function Categories() {
    return (
        <View className='space-y-5'>
            <View className='mx-5 flex-row items-center justify-between '>
                <Text style={{ fontSize: wp(4) }} className="font-semibold text-neutral-700">Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: wp(4), color: theme.text }} >See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-x-3"
            >
                {
                    categoriesData.map((category, index) => {
                        return (
                            <TouchableOpacity
                             className="flex items-center space-y-2"
                               key={index}>
                                <Image source={category.image} style={{width:wp(20), height:wp(20)}}
                                className="rounded-3xl"
                                />
                                <Text className="font-medium text-neutral-700" style={{fontSize:wp(3)}}>{category.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}