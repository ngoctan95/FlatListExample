import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableHighlight,
    FlatList,List,Image,Alert
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModel from './AddModel'
class FlatListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            activeRowKey:null
        };
    }
    render(){
        const swipeSettings={
            autoClose:true,
            onClose: (secId,rowId,direction)=>{
                
            },
            onOpen:(secId,rowId,direction)=>{

            },
            right:[
                    {
                        onPress:()=>{
                            const deletingRow=this.state.activeRowKey;
                            Alert.alert('Annoucement','Wanna delete',
                        [
                            {text:'No',onPress:()=>{console.log('Canceled')},style:'cancel'},
                            {text:'OK',onPress:()=>{
                                flatListData.splice(this.props.index,1);
                                this.props.parentFlatList.refreshFlatList(deletingRow)}}
                        ],
                        {cancelable:true}
                            )
                        },
                        text: 'Delete',type:'delete'
                    }
            ],
            rowId:this.props.index,
            sectionId:1
        }
        return(
            <Swipeout {...swipeSettings}>
            <View style={{
            
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:this.props.index%2==0?'mediumseagreen':'tomato'}}>
                <Image source={{uri:this.props.item.link}}
                    style={{width:100,height:100}}>
                 </Image>
                 <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.des}</Text>
                </View>
            </View>
            </Swipeout>
        );
    }
}
export default class BasicFlatList extends Component{
    constructor(props){
        super(props);
        this.state=({
            deletedRowKey:null,
        });
        this._onPress=this._onPress.bind(this);
    }
    refreshFlatList=(deleteKey)=>{
        this.setState((prevState)=>{
            return{
                deletedRowKey:deleteKey
            };
        })
    };
    _onPress(){
        // Alert.alert("You added new item")
        this.refs.addModel.showAddModal();
    }
    render(){
        return(
            <View style={{marginTop: Platform.OS==='ios'?20:0}}>
                <View style={{backgroundColor:'tomato',height:64,
                            flexDirection:'row', justifyContent:'flex-end',
                            alignContent:'center', alignItems:'center'}}>
                    <TouchableHighlight
                        style={{marginRight:10}}
                        onPress={this._onPress}>
                        <Image style={{width:35,height:35}} 
                        source={require('../icons/add.png')}/>
                    </TouchableHighlight>
                </View>
                <FlatList 
               
                data ={flatListData}
                renderItem={({item,index})=>{
                    console.log(`item=${JSON.stringify(item)}, index=${index}`)
                return (
                    <FlatListItem item={item} 
                        index={index}  parentFlatList={this}>
                        </FlatListItem>
                );
                }}>
                </FlatList>
            
                <AddModel ref={'addModel'} parentFlatList={this}>

                </AddModel>
            </View>
        );
    }
}