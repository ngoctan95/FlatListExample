import React, {Component} from 'react';
import {
    AppRegistry,FlatList,Button,StyleSheet,Text,Image,Alert,Platform,TouchableHighLight,Dimensions,TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import flatListData from '../data/flatListData';
export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newFoodName:'',
            newFoodDes:''
        }
    }
    showAddModal=()=>{
        this.refs.myModal.open(); 
    }
    
    render(){
        const dim=Dimensions.get('window');
        _onPress=()=>{
            
            // this.props.pa
        };
        return(
            <Modal 
            ref={'myModal'}
            style={{
                justifyContent:'center',
                borderRadius:Platform.OS==='ios'?10:0,
                width:dim.width-100,
                height:300
            }}
            position='center'
            backdrop={true}
                // onClosed={()=>{
                //     alert('Down');
                // }
                // }
                >
                <TextInput value={this.state.newFoodName}
                placeholder="Enter new food name"
                onChangeText={(text)=>{
                    this.setState(
                        {
                            newFoodName:text
                        }
                    )
                }}/>
                <TextInput value={this.state.newFoodDes}
                placeholder="Enter new food des"
                onChangeText={(text)=>{
                    this.setState(
                        {
                            newFoodDes:text
                        }
                    )
                }}/>
                <Button style={{color:'red'}} title='Save'
                onPress={()=>{
                    const newFood={
                        key:'1',
                        name:this.state.newFoodName,
                        link:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/FIRST_Logo.svg/1180px-FIRST_Logo.svg.png',
                        des:this.state.newFoodDes
                    }
                    flatListData.push(newFood);
                    this.props.parentFlatList.refreshFlatList(3);
                    this.refs.myModal.close();
                }}></Button>
            </Modal>
        );
    }
}