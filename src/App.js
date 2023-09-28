import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Test1, Test2, Test3 } from './Test';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Test1 />
        {/*<Test2 source={{uri: 'http://www5d.biglobe.ne.jp/~satis/flutter_test.jpg'}} />*/}
        {/*<Test2 source={require('./img/test.jpg')} />*/}
        {/*<Test3 uri={'http://www5d.biglobe.ne.jp/~satis/flutter_test.jpg'} useImageBackground={false} />*/}
        {/*<Test3 uri={Image.resolveAssetSource(require('./img/test.jpg')).uri} useImageBackground={false} />*/}
        {/*<Test3 uri={'http://www5d.biglobe.ne.jp/~satis/flutter_test.jpg'} useImageBackground={true} />*/}
        {/*<Test3 uri={Image.resolveAssetSource(require('./img/test.jpg')).uri} useImageBackground={true} />*/}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
