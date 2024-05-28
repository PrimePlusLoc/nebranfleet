import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import logo from '../../assets/NebranFleet - LOGO.png';
import './Header.css';

const Header: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <AppBar position="static" sx={{ backgroundColor: 'black' }}> 
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <img src={logo} alt="Logo" className="logo" />
          </Grid>
          <Grid item>
            <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="inherit">
              <Tab label="Botão 1" />
              <Tab label="Botão 2" />
              <Tab label="Botão 3" />
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
