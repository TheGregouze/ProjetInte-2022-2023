import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {COLORS} from '../../constants'
import AuthBLE from '../auth/AuthBLE';

const Settings = () => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
    disconnectFromDevice,
  } = AuthBLE();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scanForDevices = () => {
    requestPermissions(isGranted => {
      if (isGranted) {
        scanForPeripherals();
      }
    });
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Wrapper}>
        {connectedDevice ? (
          <>
           {/* devicePulse */}
            <Text style={styles.Text}>Your Heart Rate Is:</Text>
            {/* <Text style={styles.heartRateText}>{heartRate} bpm</Text> */}
          </>
        ) : (
          <Text style={styles.Text}>
            Connectez votre montre !
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openModal}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {connectedDevice ? 'Disconnect' : 'Connect'}
        </Text>
      </TouchableOpacity>
    {/* deviceModal */}
    </SafeAreaView>
  );
};


export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 40,
    // marginBottom: '80%',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  Wrapper: {
    flex: 0, // 1
    marginTop: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'black',
    // marginBottom: -400,
  },
});
