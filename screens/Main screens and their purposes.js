import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const stories = [
    { id: 1, title: 'The Adventure of Baron', author: 'John Doe' },
    { id: 2, title: 'The Magical Forest', author: 'Jane Smith' },
    { id: 3, title: 'The Brave Knight', author: 'Alice Johnson' },
  ];

  return (
    <View>
      <Text>Welcome to Baron!</Text>
      <Text>Choose a story to read:</Text>
      {stories.map(story => (
        <Button 
          key={story.id} 
          title={story.title} 
          onPress={() => navigation.navigate('Story', { storyId: story.id })} 
        />
      )}
    </View>
  );
};

const StoryScreen = ({ route }) => {
  const { storyId } = route.params;

  // Fetch story content based on storyId
  const storyContent = "Once upon a time...";

  return (
    <View>
      <Text>{storyContent}</Text>
      {/* Add interactive elements here */}
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
      {/* Add settings options here */}
    </View>
  );
};

export { HomeScreen, StoryScreen, SettingsScreen };