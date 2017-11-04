import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";

import Animation from 'lottie-react-native';

import reactStringReplace from 'react-string-replace';
import {
    OverflowIcon,
    CameraIcon,
    InboxIcon,
    LikeIcon,
    ChatIcon,
    SendIcon,
    BookmarkIcon,
} from "../../assets/icons/icons";

import ProfileHead from "./profilehead.comp.js";

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            bookmarked: false,
            seen: false,
            totalLikes: 63,
            isLoading: true,
            imageUrl: 'http://lorempixel.com/400/250/',
            // fadeAnim: new Animated.Value(0),
        }
    }

    /**
     * Handles the like count state of the post
     */
    _likePost = () => {
        this.setState({
            liked: !this.state.liked,
            totalLikes: !this.state.liked ? this.state.totalLikes + 1:  this.state.totalLikes - 1,
        });
    }

    /**
     * Double Press recognition
     */
    _handleImagePress = () => {

        const DOUBLE_PRESS_DELAY = 300;
        const now = new Date().getTime();

        if (this.lastImagePress && (now - this.lastImagePress) < DOUBLE_PRESS_DELAY) {
            delete this.lastImagePress;
            this._likePost();
        }
        else {
            this.lastImagePress = now;
        }
    }

    /**
     * Saves this post to be viewed at a later time
     */
    _bookmarkPost = () => {
        this.setState({ bookmarked: !this.state.bookmarked});
    }

    _styleText = (text) => {
        // Match @-mentions
        let styledText = reactStringReplace(text, /[@](\w+)/g, (match, i) => (
            <Text key={match + i} style={styles.mentionText}>
                @{match}
            </Text>
        ));

        let finalText = reactStringReplace(styledText, /[#](\w+)/g, (match, i) => (
            <Text key={match + i} style={styles.mentionText}>
                #{match}
            </Text>
        ));

        return finalText;
    }

    componentDidMount = () => {
        this.setState({isLoading: false});
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                    <View style={styles.contentHeaderImage}>
                        <ProfileHead height={30} width={30} color="#cecece" />
                    </View>

                    <View style={styles.contentHeaderText}>
                        <Text style={styles.boldText}>fredd.in</Text>
                    </View>

                    <View style={styles.contentHeaderOverflow}>
                        <OverflowIcon />
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => this._handleImagePress()} underlayColor="white">
                    <View style={styles.contentImage}>
                        {this.renderImageLoadingComponent()}
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.contentActions}>
                    <View style={styles.mainActions}>
                        <View style={styles.actionLike}>
                            <TouchableHighlight onPress={() => this._likePost()} underlayColor="white">
                                <View>
                                    <LikeIcon liked={this.state.liked}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.actionChat}>
                            <TouchableHighlight onPress={() => alert(this.state.totalLikes)} underlayColor="white">
                                <View>
                                    <ChatIcon />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.actionSend}>
                            <TouchableHighlight onPress={null} underlayColor="white">
                                <View>
                                    <SendIcon />
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.actionBookmark}>
                        <TouchableHighlight onPress={() => this._bookmarkPost()} underlayColor="white">
                            <View>
                                <BookmarkIcon isBookmarked={this.state.bookmarked} />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.contentInformation}>
                    <View style={styles.contentlikes}>
                        <Text style={styles.boldText}>{this.state.totalLikes} likes</Text>
                    </View>

                    <View style={styles.contentText}>
                        <Text>
                            <Text style={styles.boldText}>fredd.in </Text>
                            {this._styleText("is that you?! Tag someone who burps all the time. Thanks to @burpingthings for this funny #9GAGFunOff video! Join the contest, check link in the bio.")}
                        </Text>
                    </View>

                    <View style={styles.contentExpandText}>
                        <Text style={{ color: '#999a9b', fontSize: 12 }}>View all 257 comments</Text>
                    </View>

                    <View style={styles.contentDetailContainer}>
                        <Text style={{ color: '#999a9b', fontSize: 10 }}>{'10 Minutes ago'.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderImageLoadingComponent = () => {

        if(this.state.isLoading)
            return  <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'}}
                        style={{width: 400, height: 200}}
                    />
        else
            return <Image source={{uri: this.state.imageUrl}}
                        style={{width: 400, height: 250}}
                    />

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "white",
        marginTop: 24,
    },
    contentContainer: {
        flex: 4,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    contentHeader: {
        height: 56,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
    contentHeaderImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentHeaderText: {
        flex: 7,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    contentHeaderOverflow: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentImage: {
        flex: 1,
        height: 250,
        // backgroundColor: 'black',
    },
    contentActions: {
        height: 45,
        flexDirection: 'row',
        padding: 8,
        backgroundColor: 'white',
    },
    mainActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionLike: {
        padding: 5,
    },
    actionChat: {
        padding: 5,
    },
    actionSend: {
        padding: 5,
    },
    actionBookmark: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    contentInformation: {
        padding: 8,
    },
    contentlikes: {

    },
    contentText: {
        marginTop: 2,
    },
    contentExpandText: {
        marginTop: 3,
    },
    contentDetailContainer: {
        marginTop: 3,
    },
    mentionText: {
        color: '#003569',
    },
    boldText: {
        fontWeight: 'bold',
    }
});
