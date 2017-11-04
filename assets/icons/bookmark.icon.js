import React, { Component } from "react";
import Svg, { Path, G, Polygon } from "react-native-svg";

export default class BookmarkIcon extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Svg width="25" height="25" viewBox="0 0 333.086 333.087">
        <G>
          <G>
            {this._renderComponent()}
          </G>
        </G>
      </Svg>
    );
  }


  _renderComponent = () => {
    
    // this.state.liked ? '#D75A4A' : '' 
    let isBookmarked = this.props.isBookmarked;

    if (!isBookmarked)
      return  <Path d="M284.662,333.087c-3.614,0-7.136-1.57-9.559-4.441l-108.56-128.714L57.983,328.646c-3.384,4.014-8.916,5.481-13.845,3.683
      c-4.93-1.802-8.21-6.492-8.21-11.741V12.5c0-6.903,5.597-12.5,12.5-12.5h236.23c6.902,0,12.5,5.597,12.5,12.5v308.086
      c0,5.249-3.28,9.939-8.21,11.741C287.546,332.839,286.096,333.087,284.662,333.087z M166.543,168.043
      c3.684,0,7.18,1.625,9.555,4.441l96.061,113.893V25H60.928v261.377l96.06-113.893
      C159.363,169.668,162.859,168.043,166.543,168.043z"/>
    else
      return <Polygon points="61.129,0 61.129,321.188 160.585,250.657 260.059,321.188 260.059,0 "/>
  }
}
