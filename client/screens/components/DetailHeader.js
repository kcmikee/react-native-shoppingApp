import React from 'react'
import { View, Text, TouchableOpacity,StatusBar } from 'react-native'
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DetailHeader = ({onClick}) => {
    return (
        <View style={{flex: 1,flexDirection: 'row',paddingHorizontal:20,alignItems: 'center',marginTop: StatusBar.currentHeight}}>
            {/* headerleft */}
            <TouchableOpacity style={{flex:1,}} onPress={onClick}>
                <Icon name='chevron-left' size={25} color={COLORS.black}/>
            </TouchableOpacity>
            {/* header title */}
            <View style={{flex: 2,alignItems:'center',flexDirection: 'row',justifyContent: 'center',}}>
                <View style={{height:5, width:20, borderRadius: 5,backgroundColor: COLORS.black,marginLeft: 2,}}/>
                <View style={{height:5, width:5, borderRadius: 5,backgroundColor: COLORS.black,marginLeft: 2,}}/>
                <View style={{height:5, width:5, borderRadius: 5,backgroundColor: COLORS.black,marginLeft: 2,}}/>
            </View>
            {/* headeright */}
            <TouchableOpacity style={{flex:1, alignItems: 'flex-end',}}>
                <Icon name='heart-outline' size={25} color={COLORS.black}/>
            </TouchableOpacity>
        </View>
    )
}

export default DetailHeader
