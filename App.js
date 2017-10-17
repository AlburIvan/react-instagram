import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from "react-native";
import Svg, { Path } from "react-native-svg";

import StoryHead from "./src/components/storyhead.comp.js";
import ProfileHead from "./src/components/profilehead.comp.js";


import OverflowIcon from "./assets/icons/overflow.icon.js";
import CameraIcon from "./assets/icons/camera.icon.js";
import InboxIcon from "./assets/icons/inbox.icon.js";

export default class App extends Component {
  render() {
    return (
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

        <View style={styles.storyContainer}>
          <View style={styles.storyTextContainer}>
            <View style={styles.storyText}>
              <Text style={styles.boldText}>Stories</Text>
            </View>

            <View style={styles.storyWatchAll}>
              <Text style={styles.boldText}>Watch All</Text>
            </View>
          </View>

          <ScrollView  style={styles.storyViews}  
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <StoryHead text="You" />
            <StoryHead text="showcarlosduran"/>
            <StoryHead text="sergiocarlos"/>
            <StoryHead text="luisf11"/>
            <StoryHead text="fredd.in"/>
          </ScrollView>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderImage}>
              <ProfileHead height={30} width={30} />
            </View>

            <View style={styles.contentHeaderText}>
              <Text>Username</Text>
            </View>

            <View style={styles.contentHeaderOverflow}>
              <OverflowIcon />
            </View>
          </View>

          <View style={styles.contentImage}>
            <View />
          </View>

          <View style={styles.contentActions}>
            <Svg width="25" height="25" />
            <Svg width="25" height="25" />
            <Svg width="25" height="25" />
            <Svg width="25" height="25" />
          </View>

          <View style={styles.contentInformation}>
            <View style={styles.contentlikes}>
              <Text>253 likes</Text>
            </View>

            <View style={styles.contentText}>
              <Text>Username</Text>
              <Text>Lorem</Text>
            </View>

            <View style={styles.contentExpandText}>
              <Text>View all 8 comments</Text>
            </View>

            <View style={styles.contentDetailContainer}>
              <Text>10 Minutes ago</Text>
              <Text> * </Text>
              <Text>See translation</Text>
            </View>
          </View>
        </View>
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
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
    backgroundColor: 'yellow',
  },
  contentContainer: {
    flex: 2,
    backgroundColor: 'gray',
  },
  contentHeader: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  contentHeaderImage: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'red',
  },
  contentHeaderText: {
    flex: 7,
    paddingLeft: 8,
    backgroundColor: 'yellow',
  },
  contentHeaderOverflow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'blue',
  },
  contentImage: {
    flex: 5,
    backgroundColor: 'black',
  },
  contentActions: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'cyan',
  },
  boldText: {
    fontWeight: 'bold',
  }
});
