import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

// Modules

// Assets

// Functions

// Components

export function ButtonBase({label, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{backgroundColor: '#FF8C4B', height: 50, width: '80%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 2}}
        >
            <ResponsiveText h4 style={{color: '#FFF'}}>
                {label}
            </ResponsiveText>
        </TouchableOpacity>
    )
}
