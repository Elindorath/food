/**
 * SearchBar component - Input + Icon (recherche)
 */

import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Input } from '../../atoms/Input/Input';
import { Icon } from '../../atoms/Icon/Icon';
import type { SearchBarProps } from './SearchBar.types';
import { colors } from '../../tokens/colors/colors';
import { styles } from './SearchBar.styles';

export const SearchBar = ({
  onSearch,
  containerStyle,
  placeholder = 'Rechercher...',
  value,
  onChangeText,
  ...props
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState(value ?? '');

  const handleChangeText = (text: string) => {
    setSearchValue(text);
    onChangeText?.(text);
  };

  const handleSearch = () => {
    onSearch?.(searchValue);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Input
        placeholder={placeholder}
        value={searchValue}
        onChangeText={handleChangeText}
        style={styles.input}
        {...props}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
        <Icon name="search" size="medium" color={colors.neutral[600]} />
      </TouchableOpacity>
    </View>
  );
};
