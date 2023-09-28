import ImageSize from 'react-native-image-size';

class MyImageUtil {
  getImageStyle = async (uri, x100, y100, width, height) => {
    var size = await ImageSize.getSize(uri);
    var imageWidth  = size.width;
    var imageHeight = size.height;
    var offsetX = 0;
    var offsetY = 0;
    var cropWidth  = imageWidth;
    var cropHeight = imageHeight;
    var scale = 1.0;
    if (imageWidth / width > imageHeight / height) {
      scale = imageHeight / height;
      cropWidth = width * scale;
      offsetX = (imageWidth - cropWidth) * (x100 / 100);
    } else {
      scale = imageWidth / width;
      cropHeight = height * scale;
      offsetY = (imageHeight - cropHeight) * (y100 / 100);
    }
    var imageStyle = {
      left: -offsetX / scale,
      top: -offsetY / scale,
      width: imageWidth / scale,
      height: imageHeight / scale
    };
    return imageStyle;
  };
}

export default MyImageUtil;
