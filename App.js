import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import {
  CameraIcon,
  InboxIcon,
} from "./assets/icons/icons.js";

import StoryHead from "./src/components/storyhead.comp.js";
import Post from "./src/components/post.comp.js";

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.instaHeader}>
          <View style={styles.instaStoryButton}>
            <CameraIcon />
          </View>

          <View style={styles.instaLogo}>
            <Text style={styles.instaLogoText}>Instagram</Text>
          </View>

          <View style={styles.instaInboxIcon}>
            <InboxIcon />
          </View>
        </View>

        <ScrollView style={styles.postsContainer} 
            showsVerticalScrollIndicator={false}>
          <View style={styles.storyContainer}>
            <View style={styles.storyTextContainer}>
              <View style={styles.storyText}>
                <Text style={styles.boldText}>Stories</Text>
              </View>

              <View style={styles.storyWatchAll}>
                <Text style={styles.boldText}>Watch All</Text>
              </View>
            </View>

            <ScrollView style={styles.storyViews} horizontal={true} showsHorizontalScrollIndicator={false}>
              <StoryHead text="You" />
              <StoryHead text="showcarlosduran" />
              <StoryHead text="sergiocarlos" />
              <StoryHead text="luisf11" />
              <StoryHead text="fredd.in" />
              <StoryHead text="braylersanchez" />
              <StoryHead text="nathaniel" />
              <StoryHead text="nelson.react" />
            </ScrollView>
          </View>

       
          <Post />
          <Post />
          <Post />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#cecece",
    marginTop: 24,
  },
  instaHeader: {
    flexDirection: 'row',
    height: 56,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  instaStoryButton: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  instaLogo: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instaLogoText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  instaInboxIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  storyContainer: {
    flex: 0.25,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  storyTextContainer: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  storyText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  storyWatchAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  storyViews: {
    flex: 1,
    flexDirection: 'row',
  },
  postsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  }
});
