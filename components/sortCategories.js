import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { sortCategoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
// import { ScrollView } from 'react-native';
// import { categoriesData } from '../constants';

export default function SortCategories() {
const [activeSort, setActiveSort] = useState('Popular')
    return (
        <View className="mx-4 flex-row items-center justify-around flex-1 bg-neutral-100  rounded-full p-2 px-4">
            {
                sortCategoryData.map((sort, index) =>{
                    let isActive = sort == activeSort
                    let activeClass = isActive ? 'bg-white shadow' : ''
                    return(
                        <TouchableOpacity onPress={()=>setActiveSort(sort)}  key={index} className={`p-3 px-4 rounded-full ${activeClass}`}>
                            <Text className="font-semibold" style={{fontSize:wp(4),color:isActive?theme.text:'rgba(0,0,0,0.6)'}}>{sort}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}