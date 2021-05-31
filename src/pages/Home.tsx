import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState('light')

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, data])
    }

  }

  function handleMarkTaskAsDone(id: number) {
    const taskDone = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }

      return task
    })

    setTasks(taskDone)

  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  function handleChangeThemeColor() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <Header theme={theme}/>

      <View style={theme === 'dark' && styles.container}>
        <TodoInput
          addTask={handleAddTask}
          theme={theme}
        />

        <MyTasksList
          theme={theme}
          userPress={handleChangeThemeColor}
          tasks={tasks} 
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask} 
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10101E',
    flex: 1
  }
})
