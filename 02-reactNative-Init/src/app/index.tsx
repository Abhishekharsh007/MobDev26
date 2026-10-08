import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function HomeScreen() { 
  const [name, setName] = useState('');

  return (
    <View>
      <Text numberOfLines={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
        temporibus, unde, quaerat odio ex, illum corporis atque voluptatibus
        dolore quis magnam eveniet quos laudantium maxime eligendi dicta!
        Doloremque dolorum, accusamus asperiores nobis corrupti cumque.
        Molestias, eos. Aliquid voluptatibus, quam natus, labore cumque
        similique veniam doloremque doloribus, consequuntur magni porro
        inventore?
      </Text>

      {/* Remote Image from internet */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1791313779146-f1b991068700?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        height={200}
        width={400}
      />

      {/* Local Image from folder */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 100,
          width: 100
        }}
        blurRadius={2}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"red"}
        style={{
          borderWidth: 1,
          borderColor: "#3307e2d8",
        }}
      />

      {/* <Pressable onPress={(e) => alert('Warning! Link Pressed')}>
        <Text>
          Click Me
        </Text>
      </Pressable> */}

      /* Explore onLongPress, onPressIn and onPressOut */
      <Pressable
        onPress={() => alert('Text Pressed!')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6C63FF"
        })}
        hitSlop={{
          top: 25,
          bottom: 25,
          left: 25,
          right: 25
        }}
      >
        {({ pressed }) => 
          pressed ? <Text>Pressing...</Text> : <Text>Press me</Text>
        }
      </Pressable>
    </View>
  );
}
