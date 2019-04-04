import React, {Component} from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet} from 'react-native';



export class LearnScreen extends React.Component {
    constructor(props) {
      super(props)
// This section is to generate initial variable and assign them to FlatList buttons
      var arrayButtons = [];
      for(var j = 2; j<10; j++) {
          var object = {'key': j}; 
        arrayButtons.push(object);
        
      }
//This section is to generate the variabe for the multiplication table, stating with Table 2. 
      this.state  = {
        number: 2,      
        arrayButtons: arrayButtons,       
      }
          
    }
    render() {
      
// This section is to generate the variable that change from 1 to 10 in a multiplication table    
// For example, (2 x 1 = 2; 2 x 2 = 4... etc. In which, " i= 2" for Table 2 )
     var arrResult =  [];
      for(var i  = 1; i<=10; i++) {
        var tableArray = <Text style={{fontSize: 30,  fontWeight:'bold',  color: 'black'}}>
        {this.state.number} x {i} = {i* this.state.number}</Text>
        arrResult.push(tableArray);
      }
      return (
         
         <View style = {{flex:1, justifyContent: 'center' }}>

          <View style = {{flexDirection: 'column'}}>
              <View style = {{alignItems:'center', backgroundColor: ''}}>
                  {arrResult}
                  
          </View> 
          
        </View>

          <FlatList
             data = {this.state.arrayButtons}
             renderItem = {({item}) => {
               return <TouchableOpacity style={styles.buttonView} 
               onPress={() => this.setState({ number: item.key })} >
                 <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', padding: 20 }}>{item.key}</Text>
                </TouchableOpacity>;
                }}
                
                keyExtractor ={item =>item.key} /// Fuck, đéo được là sao nhỉ :D ?
              
             numColumns = {4}
             
             >
             </FlatList> 


       </View>

       
      );
    }
  }
  
  // This is layout formart
const styles = StyleSheet.create({
 
  mainView: {
   marginTop: 30,
   alignItems: 'center',
   alignItems: 'center'
  },
  buttonView: {
    flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
   margin: 10,
   backgroundColor: '#247ba0'
  },
  
  textButton:{
   fontSize : 50,
   fontWeight: 'bold',
   textAlign: 'center',
   color:'white'
  },
  styleButton:{
   width: 80,
   alignItems: 'center',
   margin: 5, 
   backgroundColor: '#045a2f', 
  },
  answerTextView:{
   fontSize:40,
   alignItems: 'center',
   color: 'red',
   fontWeight:'bold',
   marginTop: 100
  },
  pointTextView:{
   fontSize:40,
   alignItems: 'center',
   color: 'green',
   fontWeight:'bold',
   marginTop: 10
  },
  testAnswerView:{
   fontSize:40,
   alignItems: 'center',
   color: 'green',
   fontWeight:'bold',
   marginTop: 10
  },
  timerTextView:{
   fontSize:40,
   alignItems: 'flex-end',
   color: 'red',
   fontWeight:'bold',
   marginTop: 10
  }
 });