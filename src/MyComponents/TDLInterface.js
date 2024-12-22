import MainUI from "./MainUI";
import LeftSidebar from "./LeftSidebar";
import ItemList from "./ItemList";
import {Route, Routes, Outlet } from 'react-router-dom';
import Page404 from './Page404'
import './TDLInterface.css'
function TDLInterface() {
  return (
    
    <div className="TDLApp">
        <div className="background"></div>
        <LeftSidebar />
        <Routes>
          <Route exact path='/*' element={<MainUI />}></Route>
          <Route  path='ItemList' element={<ItemList />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
        <Outlet/>
    </div>
  );
}

export default TDLInterface;
