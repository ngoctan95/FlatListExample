import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    FlatList,List,Image,Alert
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

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
    }
    refreshFlatList=(deleteKey)=>{
        this.setState((prevState)=>{
            return{
                deletedRowKey:deleteKey
            };
        })
    };
    render(){
        return(
            <View style={{marginTop:20}}>
            
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
            
                <Text>hi</Text>
            </View>
        );
    }
}