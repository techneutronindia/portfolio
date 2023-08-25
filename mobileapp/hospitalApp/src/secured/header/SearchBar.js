import * as React from "react";
import { SearchBar} from "@rneui/base";
// import {Icon} from '@rneui/themed'
import { Icon } from "@rneui/base";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="android"
      containerStyle={{paddingTop:0,height:35,borderRadius:50,width:300,alignSelf:'center'}}
      inputContainerStyle={{height:35,borderRadius:50}}
      inputStyle={{fontSize:15,textAlignVertical:'center'}}
      leftIcon={()=> (<Icon
        color="#0CC"
        containerStyle={{}}
        disabledStyle={{}}
        name="search"
        size={40}
        type="material"
      />)}
      leftIconContainerStyle={{}}
      rightIcon={()=><Icon name="cancel" type="feather" size={20} color="#888"/>}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Search by Products & more..."
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
}


export const SearchIcon = () => {
  return (
    <Icon
      color="#0CC"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="search"
      size={40}
      type="material"
    />
  );
}