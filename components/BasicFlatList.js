import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    FlatList,List
} from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component{
    render(){
        return(
            <View style={{backgroundColor:this.props.index%2==0?'mediumseagreen':'tomato'}}>
                <Text style={{backgroundColor:this.props.item.index%2==0?'tomato':'mediumseagreeen'}}>{this.props.item.name}</Text>
                <Text>{this.props.item.des}</Text>
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