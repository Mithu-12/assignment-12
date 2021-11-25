import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Orderlist from '../Orderlist/Orderlist';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import useFirebase from '../../Hook/useFirebase';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import ManageProduct from '../ManageProduct/ManageProduct';
import UpdateProduct from '../UpdataProduct/UpdateProduct';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useFirebase();
  console.log(admin);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { user, handleLogout } = useFirebase();
  

  const drawer = (
    <div className="sideBar">
      <Toolbar />
  
      {/* <Link className="itemsall" to='/home'>Home</Link> */}
      {admin && <Box>
        <Link className="itemsall" to={`${url}/addProduct`}>Add Product</Link>
      <Link className="itemsall" to={`${url}/manageOrder`}>Manage Orders</Link>
        <Link className="itemsall" to={`${url}/manageProduct`}>Manage Product</Link>
        <Link className="itemsall" to={`${url}/makeAdmin`}>Make Admin</Link>
      </Box>}
      {!admin &&<Box><Link className="itemsall" to={`${url}/pay`}>Pay</Link>
      <Link className="itemsall" to={`${url}/orderlist`}>My Orders</Link>
      <Link className="itemsall" to={`${url}/review`}>Review</Link></Box>}
      
      <Link className="itemsall" to='/login'><button className='items btn-danger' onClick={handleLogout}><li>Log Out</li></button></Link>
          
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="sideBar" sx={{ display: 'flex', marginBottom: 50 }}>
      <CssBaseline />
      <AppBar className='navBar' style={{marginTop: 70}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          // className="disStyle"
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch style={{marginTop: 50}}>
        <Route exact path={path}>
          {!admin ? <Orderlist></Orderlist> : <ManageProduct></ManageProduct>}
        </Route>
        <Route path={`${path}/addProduct`}>
          < AddProduct/>
        </Route>
        <Route path={`${path}/orderlist`}>
          < Orderlist/>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin/>
          </Route>
          <Route path={`${path}/manageProduct`}>
          <ManageProduct/>
          </Route>
        <Route path={`${path}/manageOrder`}>
          <ManageAllOrder/>
        </Route>
        <Route path={`${path}/review`}>
          <Review/>
        </Route>
        <Route path={`${path}/pay`}>
          <Payment/>
        </Route>
        <Route path={`${path}/updateProduct:id`}>
          <UpdateProduct/>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}
export default Dashboard;
