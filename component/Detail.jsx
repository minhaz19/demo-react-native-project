import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const [userDetails, setUserDetails] = useState({});
  const { id } = route.params;
  async function getData() {
    const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": "62a7615b6559d72899f80e39",
      },
    });
    if (response.status === 200) {
      setUserDetails(response.data);
    }
  }
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: userDetails.picture }}
          style={styles.imageContainer}
        />
      </View>

      <Text style={styles.textContainer}>
        Name: {userDetails.title} {userDetails.firstName} {userDetails.lastName}
      </Text>
      <Text style={styles.subTextContainer}>Gender: {userDetails.gender}</Text>
      <Text style={styles.subTextContainer}>Email: {userDetails.email}</Text>
      {/* <Text style={styles.subTextContainer}>Location: {userDetails.location.city}, {userDetails.location.country}</Text> */}
      <Text style={styles.subTextContainer}>
        Date of Birth: {userDetails.dateOfBirth}
      </Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    width: 100,
    height: 100,
  },
  textContainer: {
    padding: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTextContainer: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "normal",
  },
});
