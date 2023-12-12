import {Dimensions} from 'react-native';

export let screenLayout = Dimensions.get('window').width;

export function DimensionUtils(size) {
  if (screenLayout < 600) {
    return (screenLayout / 360) * size;
  } else if (screenLayout >= 600 && screenLayout < 1150) {
    return (screenLayout / 891) * size;
  } else if (screenLayout >= 1150 && screenLayout < 1344) {
    return (screenLayout / 1227) * size;
  } else if (screenLayout >= 1344 && screenLayout < 1670) {
    return (screenLayout / 1487) * size;
  } else {
    return (screenLayout / 360) * size;
  }
}