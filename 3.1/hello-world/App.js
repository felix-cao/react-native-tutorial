// 第一步， 导入依赖
import React, {Component} from 'react';
import { View, Text } from 'react-native';

// 第二步，定义Component

class HelloWorld extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Hello World!
        </Text>
      </View>
    )
  }
}

// 第三步, 导出Component

export default HelloWorld;