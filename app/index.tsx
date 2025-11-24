import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import styles from "../styles/homeStyles";

export default function Index() {
  const [limit, setLimit] = useState(1000);
  const [left, setLeft] = useState(1000);
  const [spendingFieldValue, setSpendingFieldValue] = useState("");

  const reportSpending = () => {
    const amount = Number(spendingFieldValue);

    if (isNaN(amount) || amount <= 0) return;

    setLeft((prev) => prev - amount);
    setSpendingFieldValue("");
  }

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >Spendly</Text>

      <View
        style={styles.box}
      >
        <View
          style={styles.info}
        >
          <Text
            style={styles.left}
          >{left}</Text>

          <Text
            style={styles.label}
          >Weekly limit: {limit}</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter spending..."
          value={spendingFieldValue}
          onChangeText={setSpendingFieldValue}
          keyboardType="numeric"
        />

        <Pressable
          style={styles.button}
          onPress={reportSpending}
        >
          <Text
            style={styles.buttonText}
          >
            Report Spending
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
