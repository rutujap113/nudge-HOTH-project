// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import { View } from "react-native";
import StyledButton from "_atoms/StyledButton";
import NavLayout from "_utils/navLayout";

//Icons
import NavBar from "../../components/molecules/navBar";

const ProfileScreen = ({ navigation }) => {
  return (
    <NavLayout navigation={navigation}>
      {/* navigate to other pages*/}
      <StyledButton
        title="My Nudges"
        onPress={() => navigation.navigate("Nudge")}
      />
      <StyledButton
        title="My Habits"
        onPress={() => navigation.navigate("Habits")}
      />
      <StyledButton
        title="Find Friends"
        onPress={() => navigation.navigate("Friends")}
      />
      <NavBar/>
    </View>
  );
};

export default ProfileScreen;
