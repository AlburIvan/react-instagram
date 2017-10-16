import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.instaHeader}>
          <View style={styles.instaStoryButton}>
            <Button title="Story Button" />
          </View>

          <View style={styles.instaLogo}>
            <Text>Instagram</Text>
          </View>

          <View style={styles.instaInboxIcon}>
            <Button title="Icon Button"/>
          </View>
        </View>

        <View style={styles.storyContainer}>

          <View style={styles.storyTextContainer}>
            <View style={styles.storyText}>
              <Text>Stories</Text>
            </View>

            <View style={styles.storyText}>
              <Text>Watch All</Text>
            </View>
          </View>

          <ScrollView horizontal={true}>
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
          </ScrollView>
        </View>

        <View style={styles.contentContainer}>
        
          <View style={styles.contentHeader}>
            
            <View style={styles.contentHeaderImage}>
              <Image />
            </View>

            <View style={styles.contentHeaderText}>
              <Text>Username</Text>
            </View>

            <View style={styles.contentHeaderOverflow}>
              <Image />
            </View>
            
          </View>

          <View style={styles.contentImage}>
            <View />
          </View>

          <View style={styles.contentActions}>
            <View /> {/* Like */}
            <View /> {/* Chat */}
            <View /> {/* Send to */}
            <View /> {/* Bookmark */}
          </View>

          <View style={styles.contentInformation}>
            <View style={styles.contentlikes}>
              <Text>253 likes</Text>
            </View>

            <View style={styles.contentText}>
              <Text>Username</Text>
              <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer tristique augue sed varius lacinia. Nam molestie lacinia tincidunt. 
                Ut augue ligula, rhoncus nec augue eget, tincidunt vehicula quam.
              </Text>
            </View>

            <View style={styles.contentExpandText}>
              <Text>View all 8 comments</Text>
            </View>

            <View style={styles.contentDetailContainer}>
              <Text>View all 8 comments</Text> 
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
