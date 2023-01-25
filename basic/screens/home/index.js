import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import  User  from './User'


const renderUser = ({item})=> <User item={item} />



 class Home extends Component {

    componentDidMount(){
        const { fetchDataAll } = this.props;
        fetchDataAll()
    }

  render() {
    const { data } = this.props
    if(data){
        console.log(data)
    }
    return (
      <SafeAreaView>
        <View style={styles.container} >
            <Text style={{fontSize:25}}>User Details</Text>

        </View>
        <FlatList data={data} renderItem={renderUser} />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  const mapStateToProps =state=> {
    return{
        data :state.app.data
    }
  }

  const mapDispatchToProps={
    fetchDataAll
  }



export default connect(mapStateToProps,mapDispatchToProps )(Home)