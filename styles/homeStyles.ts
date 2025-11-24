import { StyleSheet } from "react-native";
import { border, colors, fontSizes, spacing } from "./theme";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl,
    gap: spacing.m,
    flex: 1
  },
  title: {
    color: colors.accent,
    textAlign: "center",
    fontSize: fontSizes.xl,
    fontWeight: "bold",
    margin: spacing.xl
  },
  box: {
    backgroundColor: colors.primary,
    padding: spacing.l,
    borderRadius: border.radius
  },
  info: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.s,
    marginBottom: spacing.l,
  },
  label: {
    fontSize: fontSizes.s,
    marginTop: spacing.s
  },
  left: {
    backgroundColor: colors.text,
    fontSize: fontSizes.l,
    fontWeight: "bold",
    borderRadius: border.radius,
    padding: spacing.s,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.text,
    padding: spacing.m,
    borderRadius: border.radius,
    marginBottom: spacing.m
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: border.radius,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    alignItems: "center",
    marginTop: spacing.m,
  },
  buttonText: {
    fontSize: fontSizes.m,
    fontWeight: "600",
    color: colors.text
  }
});
