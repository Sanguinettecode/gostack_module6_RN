import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const trom = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = trom;

  trom.clear();
}
