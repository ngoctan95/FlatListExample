import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    FlatList,List,Image
} from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component{
    render(){
        return(
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
        );
    }
}
export default class BasicFlatList extends Component{
    render(){
        return(
            <View>
            
                <FlatList 
                data ={flatListData}
                renderItem={({item,index})=>{
                    console.log(`item=${JSON.stringify(item)}, index=${index}`)
                return (
                    <FlatListItem item={item} 
                        index={index}>
                        </FlatListItem>
                );
                }}>
                </FlatList>
            
                <Text>hi</Text>
            </View>
        );
    }
}