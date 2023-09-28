import { Dimensions, Image, ImageBackground, StatusBar, View } from 'react-native';
import React from 'react';

import MyImageUtil from './service/ImageUtil';

export function Test1() {
  // viewサイズ
  const window = Dimensions.get('window');
  const viewWidth = window.width;
  const viewHeight = window.height - StatusBar.currentHeight;

  return (
    <View>
      <Image
        source={{uri: 'http://www5d.biglobe.ne.jp/~satis/flutter_test.jpg'}}
        style={{
          width: viewWidth * 0.7,
          height: viewWidth * 0.7,
          resizeMode: 'cover',
        }}
      />
      <Image
        source={require('./img/test.jpg')}
        style={{
          width: viewWidth,
          height: viewWidth,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
}

export function Test2({ source }) {
  // viewサイズ
  const window = Dimensions.get('window');
  const viewWidth = window.width;
  const viewHeight = window.height - StatusBar.currentHeight;

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={source}
          style={{
            width: viewWidth / 2,
            height: viewWidth / 5 * 2,
            backgroundColor: "#FFFFFF",
            borderColor: '#0000FF',
            borderWidth: 1,
            overlayColor: "#FFFFFF", // borderを持つ場合、設定必要
            resizeMode: 'cover',
          }}
        />
        <Image
          source={source}
          style={{
            width: viewWidth / 2,
            height: viewWidth / 5 * 2,
            backgroundColor: "#FFFFFF",
            borderColor: '#0000FF',
            borderWidth: 1,
            overlayColor: "#FFFFFF", // borderを持つ場合、設定必要
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={source}
          style={{
            width: viewWidth / 2,
            height: viewWidth / 5 * 2,
            backgroundColor: "#FFFFFF",
            borderColor: '#0000FF',
            borderWidth: 1,
            overlayColor: "#FFFFFF", // borderを持つ場合、設定必要
            resizeMode: 'stretch',
          }}
        />
        <Image
          source={source}
          style={{
            width: viewWidth / 2,
            height: viewWidth / 5 * 2,
            backgroundColor: "#FFFFFF",
            borderColor: '#0000FF',
            borderWidth: 1,
            overlayColor: "#FFFFFF", // borderを持つ場合、設定必要
            resizeMode: 'repeat',
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={source}
          style={{
            width: viewWidth / 2,
            height: viewWidth / 5 * 2,
            backgroundColor: "#FFFFFF",
            borderColor: '#0000FF',
            borderWidth: 1,
            overlayColor: "#FFFFFF", // borderを持つ場合、設定必要
            resizeMode: 'center',
          }}
        />
      </View>
    </View>
  );
}

export class Test3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStyle1: {},
      imageStyle2: {},
      imageStyle3: {},
      imageStyle4: {},
      imageStyle5: {},
      imageStyle6: {},
    };

    // viewサイズ
    const window = Dimensions.get('window');
    this.viewWidth = window.width;
    this.viewHeight = window.height - StatusBar.currentHeight;

    let imageUtil = new MyImageUtil();
    imageUtil.getImageStyle(this.props.uri, 100, 0, this.viewWidth / 3, this.viewWidth / 2).then(imageStyle => {
      this.setState({ imageStyle1: imageStyle });
    });
    imageUtil.getImageStyle(this.props.uri, 50, 0, this.viewWidth / 3, this.viewWidth / 2).then(imageStyle => {
      this.setState({ imageStyle2: imageStyle });
    });
    imageUtil.getImageStyle(this.props.uri, 0, 0, this.viewWidth / 3, this.viewWidth / 2).then(imageStyle => {
      this.setState({ imageStyle3: imageStyle });
    });
    imageUtil.getImageStyle(this.props.uri, 0, 100, this.viewWidth / 2, this.viewWidth / 3).then(imageStyle => {
      this.setState({ imageStyle4: imageStyle });
    });
    imageUtil.getImageStyle(this.props.uri, 0, 50, this.viewWidth / 2, this.viewWidth / 3).then(imageStyle => {
      this.setState({ imageStyle5: imageStyle });
    });
    imageUtil.getImageStyle(this.props.uri, 0, 0, this.viewWidth / 2, this.viewWidth / 3).then(imageStyle => {
      this.setState({ imageStyle6: imageStyle });
    });
  }

  render() {
    const viewStyle1 = {
      width: this.viewWidth / 3,
      height: this.viewWidth / 2,
      overflow: 'hidden'
    };
    const viewStyle2 = {
      width: this.viewWidth / 2,
      height: this.viewWidth / 3,
      overflow: 'hidden'
    };
    const { imageStyle1, imageStyle2, imageStyle3, imageStyle4, imageStyle5, imageStyle6 } = this.state;
    if (this.props.useImageBackground) {
      return (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <ImageBackground
              style={viewStyle1}
              source={{ uri: this.props.uri }}
              imageStyle={imageStyle1}
              fadeDuration={0}
            />
            <ImageBackground
              style={viewStyle1}
              source={{ uri: this.props.uri }}
              imageStyle={imageStyle2}
              fadeDuration={0}
            />
            <ImageBackground
              style={viewStyle1}
              source={{ uri: this.props.uri }}
              imageStyle={imageStyle3}
              fadeDuration={0}
            />
          </View>
          <ImageBackground
            style={viewStyle2}
            source={{ uri: this.props.uri }}
            imageStyle={imageStyle4}
            fadeDuration={0}
          />
          <ImageBackground
            style={viewStyle2}
            source={{ uri: this.props.uri }}
            imageStyle={imageStyle5}
            fadeDuration={0}
          />
          <ImageBackground
            style={viewStyle2}
            source={{ uri: this.props.uri }}
            imageStyle={imageStyle6}
            fadeDuration={0}
          />
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={viewStyle1}>
              <Image
                source={{ uri: this.props.uri }}
                style={imageStyle1}
              />
            </View>
            <View style={viewStyle1}>
              <Image
                source={{ uri: this.props.uri }}
                style={imageStyle2}
              />
            </View>
            <View style={viewStyle1}>
              <Image
                source={{ uri: this.props.uri }}
                style={imageStyle3}
              />
            </View>
          </View>
          <View style={viewStyle2}>
            <Image
              source={{ uri: this.props.uri }}
              style={imageStyle4}
            />
          </View>
          <View style={viewStyle2}>
            <Image
              source={{ uri: this.props.uri }}
              style={imageStyle5}
            />
          </View>
          <View style={viewStyle2}>
            <Image
              source={{ uri: this.props.uri }}
              style={imageStyle6}
            />
          </View>
        </View>
      );
    }
  }
}
