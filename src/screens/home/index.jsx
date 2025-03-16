import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/home/headerComponent';
import FloatActionButton from '../../components/uı/floatActionButton';
import {SCREENS} from '../../utils/routes';
import TaskCard from '../../components/home/taskCard';

const {ADDTASKS, TASKDETAIL, TASKS} = SCREENS;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
      <TaskCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
