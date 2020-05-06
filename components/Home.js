import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('../assets/backgr2.png')} style={styles.image}>
				<View style={styles.vwTexto}>
					<Text style={styles.text1}>Clinic Health PSL</Text>
					<Text style={styles.text2}>Salud a tu alcance</Text>
				</View>
				<View style={styles.vwBtns}>
					<View style={styles.vbtn}>
            <Icon.Button name="whatsapp" onPress={() => {
                  Linking.openURL('https://wa.me/573124796067');
                }} solid>
                Contactanos 
            </Icon.Button>  
					</View>
					<View style={styles.vbtn}>
            <Icon.Button name="cc-mastercard" onPress={() => {
								Linking.openURL('https://wa.me/573124796067');
							}} solid>
              Pagos en linea 
            </Icon.Button>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end'
	},
	vwBtns: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'relative',
		bottom: 270,
		//borderWidth: 1,
		//borderColor: 'yellow'
	},
	vbtn: {
		marginRight: 10,
		//borderWidth: 1,
		//borderColor: 'red'
  },
  vwTexto: {
    position: 'absolute',
    top: 110,
    marginLeft: '5%',
    width: '95%',
    //borderWidth: 1,
		//borderColor: 'yellow'
  },
	text1: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize:80,
    color: '#fff',
    fontFamily: ''
	},
	text2: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    fontSize:30
	}
});
