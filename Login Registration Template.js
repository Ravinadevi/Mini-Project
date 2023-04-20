
import { useState } from 'react';
import {ImageBackground, StyleSheet, Text, View,Button ,TextInput,Image} from 'react-native';

export default function Logreg() {

const localImage=require("./assets/login.jpg");
const local=require("./assets/signin.jpg");
const[value,setvalue]=useState(0)


  


 if(value===0){
   return<><ImageBackground source={localImage} style={styles.login}>

   
     
     <Text style={styles.text}>Sign in</Text>
    <View style={styles.sectionStyle}>
    <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
            }}
            style={styles.imageStyle}
          />
      <TextInput  placeholder="   UserName" placeholderTextColor={"white"}/></View>

    <View  style={styles.section}>
    <Image
    
            source={{
              uri:
                'https://img.freepik.com/free-icon/password_318-347288.jpg',
            }}
            style={styles.imageStyle}
          /> 
      <TextInput placeholder="   Password" placeholderTextColor={"white"} /></View>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:"8%", fontSize:18}} >
      <Text style={{color:"white"}}>LOGIN</Text>
      </View>
    
    <View style={{justifyContent:"center",alignItems:"center",marginTop:"8%", fontSize:18}} >
   
    <Text style={{color:"white"}}>Forget Password ?</Text>
    <View style={{marginTop:"8 %"}}><Button onPress={()=>setvalue(2)} title="Registration" color={"black"} /></View>
    
    </View>
    <View style={styles.gft}>
    <Image 
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
            }}
            style={styles.imageStyle}
          />
    <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0sWCSGOIzJePB5jw8wx_jpn6XYBrfuc0dQ&usqp=CAU',
            }}
            style={styles.imageStyle}
          />
     <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/124/124021.png',
            }}
            style={styles.imageStyle}
          />
      
      
          </View>
    </ImageBackground>

   
   </>}
   else if(value===2){
    return<ImageBackground source={local} style={styles.register}>
     <Text style={styles.text}>Sign up</Text>
     <Text style={styles.here}>Here</Text>
     <View style={styles.name}>
    <View style={styles.input}><TextInput   placeholder="  FullName" placeholderTextColor={"white"}/></View>
    <TextInput style={styles.input}  placeholder="  Email" placeholderTextColor={"white"} />
    <TextInput  style={styles.input} placeholder="  Password" placeholderTextColor={"white"} />
     <TextInput style={styles.input} placeholder="  Phone" placeholderTextColor={"white"} />
     </View>
    <View  style={styles.regbut}><Button title="R e g i s t e r" color={"darkblue"}/></View>
    <View style={{justifyContent:"center",alignItems:"center",marginTop:"8%", fontSize:18,}} >
   
    <Text style={{color:"darkred",fontWeight:"bold"}} onPress={()=>setvalue(0)}>Already Account? Login Here</Text>
    </View>

    </ImageBackground>  
    
    
   }

 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
 
  },
  but:{
    marginTop:"2%",
    
    
    
  },
  gft:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:"60%",
    padding: 10,
    height: 22,

 
  },
  name:{
    marginTop:"20%"
  },
  here:{
    marginTop:"3%",
    textAlign:"center",
    color:"white",
    fontSize:17,

  },
  text:{
    marginTop:"30%",
    justifyContent:"center",
    textAlign:"center",
    fontSize:30,
    color:"white",
    fontWeight:"bold"
    
    
  },
  login:{
    flex:1,
    
    backgroundColor:"pink",
  
    
  },
  
  log:{
    borderStyle:"solid",
    borderWidth:1,
    borderColor:'black',
    marginLeft:"2%",
    marginRight:"2%",
    height:"6%",
    marginTop:"8%"
  },
  logbut:{
    marginTop:"8%",
    justifyContent:"center",
    alignItems:"center"
    
  },
  register:{
    flex:1,
    backgroundColor:"pink",
  },
  regbut:{
    marginTop:"8%",
    justifyContent:"center",
    alignItems:"center"
    
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 22,
    width: 25,
    resizeMode: 'stretch',
    placeholderTextColor:"white",
    marginLeft:"5%"

   
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems:"center",
    backgroundColor:"rgba(250, 0, 0, 0.1)",
    height: 58,
    margin: 10,
    marginTop:"20%",
    underlineColorAndroid:"transparent",
    
    
  },
  input:{
    flexDirection: 'row',
    alignItems:"center",
    backgroundColor:"rgba(255, 0, 0, 0.1)",
    height: 50,
    marginLeft:"4%",
    marginRight:"4%",
    margin: 10,
  
    
   
    
  },
  section:{
    flexDirection: 'row',
    backgroundColor:"rgba(71, 0, 0, 0.1)",
    alignItems:"center",
    height: 58,
    margin: 10,
    marginTop:"8%",

  }
 

});


