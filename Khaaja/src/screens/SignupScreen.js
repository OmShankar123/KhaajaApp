import { StyleSheet, Text, 
  View,StatusBar,TextInput ,
  TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { Separator,ToggleButton } from '../components'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { Colors, Fonts ,Images} from '../contants'
import { Display } from '../utils'
const SignupScreen = (props) => {

const[isPasswordShow,setPasswordShow]=useState(false);

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <Separator height={StatusBar.currentHeight}/>
      <View style={styles.headerContainer}>
        <Feather name="chevron-left" size={30} color='#000'
         onPress={()=>props.navigation.goBack() }/>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.content}>Enter your Email,Choose Username and Password for sign up.
      <Text style={{color:Colors.DEFAULT_GREEN,}}
      onPress={()=>props.navigation.navigate('Signin')}
      >Already have account?</Text>
       </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
            <Feather name="user"
             size={22} color={Colors.DEFAULT_GREY}
            style={{marginRight:10}}
            />
            <TextInput placeholder='Username'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            />
        </View>
      </View>
      <Separator height={15}/>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
            <Feather name="mail"
             size={22} color={Colors.DEFAULT_GREY}
            style={{marginRight:10}}
            />
            <TextInput placeholder='Email'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            />
        </View>
      </View>
      <Separator height={15}/>

      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
            <Feather name='lock'
             size={22} color={Colors.DEFAULT_GREY}
             style={{marginRight:10}}
            />
            <TextInput 
            secureTextEntry={isPasswordShow?false:true}
            placeholder='Password'
             placeholderTextColor={Colors.DEFAULT_GREY}
             selectionColor={Colors.DEFAULT_GREY}
             style={styles.inputText}
            />
            <Feather name={isPasswordShow?'eye':'eye-off'}
            size={22} color={Colors.DEFAULT_GREY}
            style={{marginRight:10}}
            onPress={()=> setPasswordShow(!isPasswordShow)}
            />
        </View>
      </View>
      <Text></Text>
      
      <TouchableOpacity 
      onPress={()=>props.navigation.navigate('RegisterPhone')}
      style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Create Account</Text>
      </TouchableOpacity      
      >
      
      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonContainer}>
            <View style={styles.signinButtonLogoContainer}>
                <Image source={Images.FACEBOOK}
                style={styles.signinButtonLogo}
                />

            </View>
            <Text style={styles.socialSigninButtonText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonContainer}>
            <View  style={styles.signinButtonLogoContainer}>
                <Image source={Images.GOOGLE}
                style={styles.signinButtonLogo}
                />

            </View>
            <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:Colors.DEFAULT_WHITE
        //  backgroundColor:'#000'
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        
    },
    headerTitle:{
      color:Colors.DEFAULT_BLACK,
      fontSize:20,
      // fontFamily:'Roboto'
      fontWeight:'700',
      lineHeight:20*1.4,
      
      width:Display.setWidth(80),
       textAlign:'center'
      

    },
    title:{
      color:Colors.DEFAULT_BLACK,
      fontSize:25,
      lineHeight:20*1.4,
      marginTop:50,
      marginBottom:10,
      marginHorizontal:20,
      fontWeight:'700',

    },
    content:{
      fontSize:18,
      color:Colors.DEFAULT_BLACK,
      marginTop:10,
      marginBottom:20,
      marginHorizontal:20,
      fontWeight:'400',
    },
    inputContainer:{
      backgroundColor:Colors.LIGHT_GREY,
      paddingHorizontal:10,
      marginHorizontal:20,
      borderRadius:8,
      borderWidth:0.5,
      borderColor:Colors.LIGHT_GREY2,
      justifyContent:'center'
    },
    inputSubContainer:{
      flexDirection:'row',
      alignItems:'center'
    },
    inputText:{
      fontSize:18,
      color:Colors.DEFAULT_BLACK,
      textAlignVertical:'center',
      padding:0,
      height:Display.setHeight(6),
      flex:1
    },
   
   
   
    signinButton:{
      backgroundColor:Colors.DEFAULT_GREEN, 
      borderRadius:8,
      marginHorizontal:20,
      height:Display.setHeight(6),
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
      
    },
    signinButtonText:{
      fontSize:18 ,
      lineHeight:12*1.6,
      color:Colors.DEFAULT_WHITE,
      fontWeight:'600',
      

    },
   

    accounttext:{
      fontSize:14 ,
      lineHeight:13*1.4,
      color:Colors.DEFAULT_BLACK,
      fontWeight:'500',


    },
    signupText:{
      fontSize:14 ,
      lineHeight:13*1.4,
      color:Colors.DEFAULT_GREEN,
      marginLeft:5,
      fontWeight:'500',

    },
    orText:{
      fontSize:15 ,
      lineHeight:13*1.4,
      color:Colors.DEFAULT_BLACK,
      //marginLeft:5,
      alignSelf:'center',
      fontWeight:'500',
      marginTop:20

    },
    facebookButton:{
      backgroundColor:Colors.FABEBOOK_BLUE,
      paddingVertical:15,
      marginHorizontal:20,
      borderRadius:8,
      marginVertical:20,
      justifyContent:'center',
      alignItems:'center'

    },
    googleButton:{
      backgroundColor:Colors.GOOGLE_BLUE,
      paddingVertical:15,
      marginHorizontal:20,
      borderRadius:8,
      marginVertical:20,
      justifyContent:'center',
      alignItems:'center'

    },
    signinButtonLogo:{
      height:18,
      width:18
    },
    signinButtonLogoContainer:{
      backgroundColor:Colors.DEFAULT_WHITE,
      padding:2,
      borderRadius:3,
      position:'absolute',
      left:25

    },
    socialButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      width:'100%'
    },
    socialSigninButtonText:{
      color:Colors.DEFAULT_WHITE,
      fontSize:14,
      lineHeight:13*1.4,
      fontWeight:'600',

    },
   
})
