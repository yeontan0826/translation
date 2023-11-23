import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';

const LoadingView = () => {
  const ref = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LottieView
        ref={ref}
        autoPlay
        style={{
          width: 150,
        }}
        source={require('../assets/loading.json')}
      />
    </View>
  );
};

export default LoadingView;
