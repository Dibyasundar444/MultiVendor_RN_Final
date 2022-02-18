import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';
import {API_VENDOR} from '../../../../../config';

export default function VendorsNearby({vendorProfile,login}) {
  const [vendors, setVendors] = useState([]);
  const [indicator, setIndicator] = useState(true);

  console.log(vendors);

  useEffect(() => {
    getVendors();
  }, []);

  const getVendors = () => {
    axios
      .get(`${API_VENDOR}/allvendors`)
      .then(resp => {
        setVendors(resp.data);
        setIndicator(false);
      })
      .catch(err => {
        console.log('Server error: ', err);
      });
  };
  return (
    <>
      <View style={{marginTop: 10, marginLeft: 20}}>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          marginRight:20
          }}
        >
          <Text style={styles.heading}>Top Vendors Near you</Text>
          <TouchableOpacity 
            style={styles.vendor}
            onPress={login}
          >
              <Text style={{fontWeight:"500",color:"#fff"}}>Sell</Text>
          </TouchableOpacity>
        </View>
        {indicator ? (
          <ActivityIndicator style={{left: -10, marginTop: 20}} size={30} />
        ) : (
          <FlatList
            horizontal={true}
            data={vendors}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View key={index} style={{alignItems: 'center', marginRight: 10}}>
                <TouchableOpacity
                  onPress={() => vendorProfile(item)}
                  style={styles.circle}
                  activeOpacity={0.6}>
                  {item.profileImg ? (
                    <Image
                      style={styles.circle}
                      source={{uri: item.profileImg}}
                    />
                  ) : (
                    <Image
                      style={styles.circle}
                      source={require('../../../../assets/profile.png')}
                    />
                  )}
                </TouchableOpacity>
                {
                  item.name ? <Text style={styles.name}>{item.name}</Text>
                  :
                  <Text style={styles.name}>Vendor{item._id.split("",2)}**</Text>
                }
              </View>
            )}
          />
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  name: {
    color: '#000',
    fontSize: 10,
    marginTop: 5,
    textTransform: 'capitalize',
  },
  heading: {
    fontWeight: 'bold',
    color: '#000',
    // marginLeft:20,
    fontSize: 16,
    // marginBottom: 10,
  },
  vendor: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ff1493",
    marginVertical:10,
    paddingVertical:2,
    paddingHorizontal:8,
    borderRadius:4
}
});
