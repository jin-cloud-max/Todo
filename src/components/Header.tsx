import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps {
  theme: string;
}

export function Header({ theme }: HeaderProps) {
  return (
    <View style={[theme === 'light' ? styles.header : styles.darkHeader]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  darkHeader: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
