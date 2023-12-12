import { View, Text } from '@tarojs/components';
import { AtSwipeAction } from 'taro-ui';
import './index.less'

export default function AiChat() {
  const list = [
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
    '我是标题',
  ]

  return (
    <View className='scroll'>
      {
        list.map((item: any, index: number) => (
          <AtSwipeAction
            key={index}
            autoClose
            options={[
              {
                text: '删除',
                style: {
                  backgroundColor: '#4C4C4C'
                },
              }
            ]}
          >
            <View
              className='item'
              key={index}
            >
              <Text className='word'>{item.slice(0, 1)}</Text>
              <View className='wrapper'>
                <View className='title'>{item}</View>
              </View>
            </View>
          </AtSwipeAction>
        ))
      }
    </View>
  )
}
