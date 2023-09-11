import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import List from "../components/list";
import SearchBar from "../components/SearchBar";
import fakeEmails from "../components/data";

const MailScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}></Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!clicked ? (
        <List
          searchPhrase={searchPhrase}
          data={fakeEmails}
          setClicked={setClicked}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default MailScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
