import React, {Component} from 'react';
import { Text, TouchableOpacity, View, FlatList} from 'react-native';



// function  GenerateTable (number) {
//   return <SecondTable number = {number}/>;
// }

export class AnswerScreen extends React.Component {
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
        var view = <Text style={{fontSize: 30,  fontWeight:'bold',  color: 'black'}}>
        {this.state.number} x {i} = {i* this.state.number}</Text>
        arrResult.push(view);
      }
      return (
         
         <View style = {{flex:1, justifyContent: 'center' }}>

          <View style = {{flexDirection: 'column'}}>
              <View style = {{alignItems:'center', backgroundColor: ''}}>
                  {arrResult}
                  {/* <Text style={{fontSize: 25, fontWeight:'bold', color: 'black'}}>Select a table you want to learn</Text> */}
          </View> 
          <Text style ={{fontSize: 30, justifyContent:'center', color: 'red'}}> Bảng cửu chương của Kent </Text>      
        </View>

          <FlatList
             data = {this.state.arrayButtons}
             renderItem = {({item, key}) => 
               <TouchableOpacity style = {{flex: 1, alignItems: 'center', margin: 10, backgroundColor:'grey'}} 
                  onPress = {() => this.setState({number: item.key})}>
                 <Text key={key} style = {{fontSize: 30, fontWeight:'bold',  color: '#fff', padding: 20}}>{item.key}</Text>
               </TouchableOpacity>
             }
             numColumns = {4}
            ></FlatList>     
       </View>

       
      );
    }
  }
  