import {BleError,BleManager,Characteristic,Device} from 'react-native-ble-plx';
import {PermissionsAndroid, Platform } from 'react-native';
import { useState } from 'react';

const bleManager = new BleManager();

const AuthBLE = () => {
  const [allDevices, setAllDevices] = useState([]);

  const requestPermissions = async () => {
    if  (Platform.OS === 'android'){
      const grantedStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy Needs Location Permission",
          buttonNegative: "Cancel",
          buttonPositive:"Ok",
          buttonNeutral: 'Maybe Later',
        }
      );
      return grantedStatus === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      return true;
    }
  };
  
  const isDuplicatedevice = (devices, nextDevice) =>
    devices.findIndex(device => nextDevice.id === device.id) > -1

  const scanForDevices = () => {
    bleManager.startDeviceScan(null,null,(error, device) => {
        if (error) {
            console.log(error)
        }
        if (device && device.name?.includes('CorSense')){
            //aadd device
            setAllDevices((prevState)=> {
                if(!isDuplicatedevice(prevState,device)) {
                    return [...prevState,device];
                }
                return prevState;
            })
        }
    })
  }

  return {
    requestPermissions,
    scanForDevices,
    allDevices

  };
}

export default AuthBLE;