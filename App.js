import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4"
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-php",
  "react",
];

const projects = [
  {
    name: "Webinar on Health Information",
    icon: "needle",
    link: "https://hartmannlink.fr"
  },
  {
    name: "Informative website about asthma",
    icon: "bandage",
    link: "https://www.asthme-symptomes.fr"
  },
  {
    name: "CRUD PHP wine cellar website",
    icon: "glass-wine",
    link: "https://test-anneclaire-c.000webhostapp.com"
  },
];

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" backgroundColor={Colors.theme} />
      <View style={{ backgroundColor: Colors.theme, paddingBottom: Layout.height * 0.2, borderBottomLeftRadius: Layout.width * 0.1, borderBottomRightRadius: Layout.width * 0.1 }}>
        <View style={{ alignItems: "flex-end", paddingHorizontal: 32, marginVertical: 20 }}>
          <SimpleLineIcons name="equalizer" size={20} style={{ color: Colors.white }} />
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 32, marginVertical: 36, alignItems: "center", justifyContent: "flex-start" }}>
          <Image source={require("./assets/images/user.jpg")} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }} />
          <View>
            <Text style={{ fontSize: 20, color: Colors.white }}>Anne-Claire Coutoux</Text>
            <Text style={{ color: Colors.greyish }}>React Native Dev</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.white, marginHorizontal: 32, padding: 20, borderRadius: 20, elevation: 8, marginBottom: 16, marginTop: -Layout.height * 0.15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
          <Text>Bio</Text>
          <AntDesign name="user" size={20} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: Colors.greyish }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptate deleniti itaque suscipit assumenda nobis explicabo neque ad delectus nisi!</Text>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.white, marginHorizontal: 32, padding: 20, borderRadius: 20, elevation: 8, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
          <Text>Skills</Text>
          <MaterialCommunityIcons name="pen" size={20} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {skillIcons.map(skill => (
            <View style={{ width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: Colors.theme, justifyContent: "center", alignItems: "center", marginHorizontal: 5 }}>
              <MaterialCommunityIcons name={skill} size={30} style={{ color: Colors.theme }} />
            </View>))}
        </ScrollView>
      </View>
      <ScrollView horizontal >
        {projects.map(project => (
          <View key={project.name} style={{
            backgroundColor: Colors.theme, marginHorizontal: 8, padding: 20, borderRadius: 16, marginBottom: 16, alignItems: "center", width: Layout.width * 0.7
          }}>
            < Text style={{ fontSize: 20, color: Colors.white, textAlign: "center" }}>{project.name}</Text>
            <MaterialCommunityIcons name={project.icon} size={150} style={{ color: Colors.white, marginVertical: 40 }} />
            <TouchableOpacity>
              <View style={{ backgroundColor: Colors.white, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text style={{ color: Colors.theme, fontSize: 16, padding: 8 }} onPress={() => Linking.openURL(project.link)}>
                  View Project
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))
        }
      </ScrollView >
      <View style={{ backgroundColor: Colors.white, marginHorizontal: 32, padding: 20, borderRadius: 20, elevation: 8, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
          <Text>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 8, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 50, color: Colors.theme }}>100</Text>
          <Text>CUPS OF COFFEE</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 8, alignItems: "flex-end" }}>
          <Text>PROJECTS DONE</Text>
          <Text style={{ fontSize: 50, color: Colors.theme }}>241</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 8, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 50, color: Colors.theme }}>420</Text>
          <Text>HAPPY CLIENTS</Text>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.white, marginHorizontal: 32, padding: 20, borderRadius: 20, elevation: 8, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
          <Text>Find Me</Text>
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          <MaterialCommunityIcons name="linkedin" size={30} style={{ color: Colors.theme }} />
          <MaterialCommunityIcons name="facebook" size={30} style={{ color: Colors.theme }} />
          <MaterialCommunityIcons name="twitter" size={30} style={{ color: Colors.theme }} />
          <MaterialCommunityIcons name="instagram" size={30} style={{ color: Colors.theme }} />
        </ScrollView>
      </View>
    </ScrollView >

  );
}