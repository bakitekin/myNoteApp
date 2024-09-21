import React from 'react';
import {
  TextBold,
  TextalignCenter,
  TextalignJustifyleft,
  TextUnderline,
  TextalignJustifyright,
  TextItalic,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
// Düğmelerin tanımı
export const Buttons = [
  {
    id: 1,
    name: 'bold',
    icon: <TextBold size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('bold', 'title'), // Stil değişimi
  },
  {
    id: 2,
    name: 'italic',
    icon: <TextItalic size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('italic', 'title'), // Stil değişimi
  },
  {
    id: 3,
    name: 'underline',
    icon: <TextUnderline size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('underline', 'title'), // Stil değişimi
  },
  {
    id: 4,
    name: 'align-left',
    icon: <TextalignJustifyleft size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('align-left', 'description'), // Stil değişimi
  },
  {
    id: 5,
    name: 'align-right',
    icon: <TextalignJustifyright size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('align-right', 'description'), // Stil değişimi
  },
  {
    id: 6,
    name: 'align-center',
    icon: <TextalignCenter size="30" color={AppColors.dark} />,
    onPress: () => handleStyleChange('align-center', 'description'), // Stil değişimi
  },
];
