import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/color';
import {TickCircle} from 'iconsax-react-native';
import moment from 'moment';

const TaskCard = () => {
  return (
    <Pressable>
      <View>
        <TickCircle size="32" color={AppColors.CANCEL} />
      </View>
      <View>
        <Text>title</Text>
        <Text>description</Text>
      </View>
      <View>
        <Text>
          {' '}
          {moment('16-03-2025', 'DD-MM-YYYY').format('MMMM D, YYYY')}{' '}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
