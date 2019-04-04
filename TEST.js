import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
 
export default class App extends Component{
  
  
 
 render() {
 
var array = [1,2,3,4,5,6,7,8,9,10];
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function randomList() { 
  var result = [];
  var nums = array;
  for(var i = 0; i< 10; i++) {
    var random = getRandomInt(10 - i);
    result.push(nums[random]);
    nums.splice(random, 1); 
  }
  return result;
}

var demo = randomList();

  
 
   return (
     <View style={styles.MainContainer}>
         {demo.map((item, key)=>
           <TouchableOpacity
           style = {{flexrDirection: 'column', width: 100, alignItems: 'center', margin: 1, backgroundColor:'grey'}}
           > 
              <Text key={key} style={styles.TextStyle}> { item } </Text>
         </TouchableOpacity>)
         }
                   
        



     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   margin: 10  
 },
 TextStyle:{
   fontSize : 30,
    textAlign: 'center'
 }
 
});