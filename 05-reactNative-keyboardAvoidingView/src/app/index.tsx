import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const keyboardavoidingview = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
            Login
          </Text>

          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 2,
              borderColor: "#ff0000",
              borderRadius: 10,
              padding: 14,
              fontSize: 16,
              marginBottom: 25,
            }}
          />

          <TextInput
            placeholder="Password"
            style={{
              borderWidth: 2,
              borderColor: "#ff0000",
              borderRadius: 10,
              padding: 14,
              fontSize: 16,
              marginBottom: 25,
            }}
          />

          <Pressable
            style={{
              backgroundColor: "#6C63FF",
              padding: 16,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default keyboardavoidingview

const styles = StyleSheet.create({})