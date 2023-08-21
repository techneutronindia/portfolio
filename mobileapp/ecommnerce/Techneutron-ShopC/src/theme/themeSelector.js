import React, { useState } from 'react';
import { useThemeMode } from '@rneui/themed';
import { Switch } from '@rneui/themed';

export default function ThemeSelector() {

    const { mode, setMode } = useThemeMode();
    const [ open, setOpen ] = useState(false);


  const changeTheme = ()=>{
    mode == 'dark' ? setMode('light') : setMode('dark')
    setOpen(!open)
  }

  return <Switch value={open} onValueChange={changeTheme} title={mode} />;
}