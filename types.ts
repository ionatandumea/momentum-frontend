import { Ionicons } from "@expo/vector-icons";

export type TabScreenConfig = {
  name: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  headerShown?: boolean;
  size?: number;
  color?: string;
};
