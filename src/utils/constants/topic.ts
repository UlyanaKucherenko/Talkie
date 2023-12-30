import { Topic } from '../enums/topic.enum';

type TopicsType = Record<Topic, string>;

export const Topics: TopicsType = {
  HEALTHY_HABITS: 'Healthy habits',
  EXERCISES: 'Exercises',
  MENTAL_HEALTH: 'Mental Health',
  NUTRITION: 'Nutrition',
  PREVENTION: 'Prevention',
};
