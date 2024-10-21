import { Stack } from 'expo-router';
import {
  PaperProvider,
  MD3DarkTheme
} from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{
                headerShown: true,
            }}
        />
      </Stack>
    </PaperProvider>
  )
}
