import { StyleSheet, Text, 
  View,StatusBar,TextInput ,
  TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { Separator,ToggleButton } from '../components'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { Colors, Fonts ,Images} from '../contants'
import { Display } from '../utils'
const SigninScreen = (props) => {

const[isPasswordShow,setPasswordShow]=useState(false);

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <Separator height={StatusBar.currentHeight}/>
      <View style={styles.headerContainer}>
        <Feather name="chevron-left" size={30} color='#000' onPress={()=>props.navigation.goBack() }/>
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>Enter your username and password, and enjoy ordering food </Text>
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
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton 
          size={0.6}
          />
           <Text style={styles.rememberMeText}>Remember me</Text> 
        </View>
        <Text 
        onPress={()=>props.navigation.navigate('ForgotPassword')}
        style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity      
      >
      <View 
       onPress={()=>props.navigation.goBack()}
      style={styles.signupContainer}>
        <Text style={styles.accounttext}>Don't have an account?</Text>
        <Text 
        onPress={()=>props.navigation.navigate('Signup')}
        style={styles.signupText}>Sign Up</Text>
      </View>
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

export default SigninScreen

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
      fontSize:20,
      color:Colors.DEFAULT_BLACK,
      marginTop:10,
      marginBottom:20,
      marginHorizontal:20,
      fontWeight:'300',
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
    forgotPasswordContainer:{
      marginHorizontal:20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'

    },
    rememberMeText:{
      marginLeft:10,
      fontSize:14,
      lineHeight:12*1.4,
      color:Colors.DEFAULT_GREY,
      fontWeight:'600',

    },
    forgotPasswordText:{
      fontSize:14,
      lineHeight:12*1.4,
      color:Colors.DEFAULT_GREEN  ,
      fontWeight:'500',
    },
    signinButton:{
      backgroundColor:Colors.DEFAULT_GREEN, 
      borderRadius:8,
      marginHorizontal:20,
      height:Display.setHeight(6),
      justifyContent:'center', 
      alignItems:'center',
      marginTop:20,
    },
    signinButtonText:{
      fontSize:18 ,
      lineHeight:12*1.6,
      color:Colors.DEFAULT_WHITE,
      fontWeight:'600',
      

    },
    signupContainer:{
      marginHorizontal:20,
      justifyContent:'center',
      paddingVertical:20,
      flexDirection:'row',
      alignItems:'center'

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
    toggleContainer:{
      flexDirection:'row',
      alignItems:'center'
    }
})
