import { Tabs } from "expo-router";
import { TabScreenConfig } from "@/types";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

const tabs: TabScreenConfig[] = [
    { name: "index", title: "Home", icon: "home" },
    { name: "plan", title: "Plan", icon: "calendar" },
    { name: "stats", title: "Stats", icon: "bar-chart" },
    { name: "settings", title: "Settings", icon: "settings" },
];

const tabOptions = {
    tabBarStyle: {
        backgroundColor: "#f0f0f0",
    },
    tabBarActiveTintColor: "#007bff",
    tabBarInactiveTintColor: "#8e8e8e",
    tabBarLabelStyle: {
        fontSize: 12,
    },
}

export default function TabsLayout() {
    return (
        <Tabs screenOptions={tabOptions} >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        headerShown: tab.headerShown ?? false,
                        tabBarIcon: ({ color, size }) => (
                                <TabBarIcon
                                    name={tab.icon}
                                    size={size}
                                    color={color}
                                />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
