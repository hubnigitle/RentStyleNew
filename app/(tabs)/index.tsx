// {[import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1BDFCE" }}>
      <StatusBar  style="light" />
      {/* <Image
        source={{
          uri: 'https://c.pxhere.com/photos/33/f9/dresses_apparel_clothing_clothes_clothes_hangers_wooden_hangers_retail_shop_closet-1149845.jpg!d'
        }}
        style={{
          height: 150,
          width: 150,
          marginTop: 50,
        }}
      /> */}

      <View style={{ marginHorizontal: 30, marginTop: 200 }}>
        <Text style={{ fontSize: 50, fontWeight: '900', alignSelf: 'center' }}>
          <Text style={{ color: 'red' }}>Rent</Text>
          <Text style={{ color: 'blue' }}>Style</Text>
        </Text>
        <Text style={{ textAlign: "justify", marginTop: 20 }}>
          Aplikasi sewa fashion terbaik dengan harga terjangkau. Kualitas terbaik
          dengan berbagai kategori fashion dan aksesoris yang trendy. Jangkauan pengiriman
          seluruh Indonesia.
        </Text>
      </View>

      <TouchableOpacity>
      <View style={{
        marginTop: 200,
        flexDirection: 'row',
        height: 50
      }}>
        <View style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          borderRadius: 25,
          elevation: 10
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
        </View>
        <View style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          borderRadius: 25,
          elevation: 10
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}