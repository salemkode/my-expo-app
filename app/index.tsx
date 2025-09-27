import { StyleSheet, Text, View as RNView } from 'react-native';
import { styled } from 'react-native-css';
import '../global.css';
import { View as ExpoView } from 'react-native-css/components';

const View = styled(RNView, {
  className: { target: 'style' },
});

export default function Page() {
  return (
    <ExpoView style={styles.container} className="bg-red-200">
      <View style={styles.main} className="bg-red-300">
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </ExpoView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
