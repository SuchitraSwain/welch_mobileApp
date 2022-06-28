import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
Icon.loadFont();
export const MaterialIcon = ({size, name, color}) => (
  <Icon name={name} size={size} color={color} />
);