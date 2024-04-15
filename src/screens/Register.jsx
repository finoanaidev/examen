import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 24,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "red",
              fontFamily: "poppins-bold",
              marginVertical: 20,
            }}
          >
            Créer un compte
          </Text>
          <Text
            style={{
              fontFamily: "poppins-semiBold",
              fontSize: 15,
              maxWidth: 88,
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View
          style={{
            marginVertical: 7,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            style={{
              fontFamily: "poppins-regular",
              fontSize: 15,
              padding: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginVertical: 11,
            }}
          />
          <TextInput
            placeholder="Pasword"
            placeholderTextColor={"black"}
            secureTextEntry
            style={{
              fontFamily: "poppins-regular",
              fontSize: 15,
              padding: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginVertical: 11,
            }}
          />
                    <TextInput
            placeholder="Confirm Pasword"
            placeholderTextColor={"black"}
            secureTextEntry
            style={{
              fontFamily: "poppins-regular",
              fontSize: 15,
              padding: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginVertical: 11,
            }}
          />
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate("RecipeList")}
          style={{
            padding: 10,
            backgroundColor: "blue",
            marginVertical: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-bold",
              color: "white",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
          style={{
            padding: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-bold",
              color: "blue",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register