import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface HeaderProps {
  userPress: () => void;
  theme: string
}

function FlatListHeaderComponent({ userPress, theme }: HeaderProps) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Text style={[theme === 'light' ? styles.header : styles.darkHeader]}>Minhas tasks</Text>
      <TouchableOpacity
        onPress={userPress}
      >
        <Text style={styles.headerButtonText}>{theme === 'light' ? 'Modo dark' : 'Modo light'}</Text>
      </TouchableOpacity>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  userPress: () => void;
  theme: string;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  userPress,
  theme
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={[
              theme === 'light' && item.done ? styles.taskButtonDone : styles.taskButton,
              theme === 'dark' && item.done ? styles.taskDarkButtonDone : styles.taskButton
            ]}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={[
                theme === 'light' && item.done ? styles.taskMarkerDone : styles.taskMarker,
                theme === 'dark' && item.done ? styles.taskDarkMarkerDone : styles.taskDarkMarker,
              ]}
            />
            {theme === 'light' ? (
              <Text 
                style={[item.done ? styles.taskTextDone : styles.taskText]}>
                {item.title}
              </Text>
            ) : (
              <Text 
                style={[item.done ? styles.taskDarkTextDone : styles.taskDarkText]}>
                {item.title}
              </Text>
            )}
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent userPress={userPress} theme={theme}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  darkHeader: {
    color: '#565BFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },

  headerButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#A09CB1',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskDarkMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565BFF',
    marginRight: 10
  },

  taskText: {
    color: '#3D3D4D',
  },
  taskDarkText: {
    color: '#E1E1E6',
  },

  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskDarkButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(33,33,54,0.3)',
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskDarkMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#565BFF',
    marginRight: 10
  },

  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskDarkTextDone: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through'
  }
})
