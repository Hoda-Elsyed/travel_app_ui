import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white flex-1 space-y-6 pt-10">
      {/* avatar */}
      <View className="mx-5 flex-1 flex-row items-center justify-between mt-5 mb-10">
        <Text style={{ fontSize: wp(7) }} className="text-neutral-700 font-bold">Let's Discover</Text>
        <TouchableOpacity>
          <Image source={require('../assets/images/avatar.png')}
            style={{ width: wp(12), height: wp(12) }} />
        </TouchableOpacity>
      </View>

      {/* search View */}
      <View className="mx-5 flex-row items-center flex-1 bg-neutral-100 space-x-2 rounded-full p-4 mb-4">
        <MagnifyingGlassIcon size={20} strokeWidth={3} color={'gray'} />
        <TextInput
          placeholder='Search destination'
          placeholderTextColor={'gray'}
          className='pl-2 flex-1 text-base tracking-wider'
        />
      </View>

      {/* categories */}
      <View className='mb-4'>
        <Categories />
      </View>

      {/* Sort categories */}
      <View className='mb-4'>
        <SortCategories />
      </View>

      {/* Destinations */}
      <View>
        <Destinations />
      </View>

    </ScrollView>
  )
}