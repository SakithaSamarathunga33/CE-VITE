import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Jewellery from './Components/Home/Jewellery';
import Gems from './Components/Home/Gems';
import AboutUs from './Components/Home/AboutUs';
import Contact from './Components/Home/ContactUs';
import Register from './Components/Login/Register';
import UserProfile from './Components/pages/UserProfile';

import AdminDashboard from './Components/Admin/AdminDashboard';
import UserDetails from './Components/Admin/Users/UserDetails';
import AddUser from './Components/Admin/Users/AddUser';
import UpdateUser from './Components/Admin/Users/UpdateUser';

import JewelleryDetails from './Components/Admin/Jewellery/JewelleryDetails';
import AddJewellery from './Components/Admin/Jewellery/AddJewellery';
import UpdateJewellery from './Components/Admin/Jewellery/UpdateJewellery';
import JewelleryProfile from './Components/Home/JewelleryProfile';

import InventoryDetails from './Components/Admin/Inventory/InventoryDetails';
import AddInventory from './Components/Admin/Inventory/AddInventory';
import UpdateInventory from './Components/Admin/Inventory/UpdateInventory';
import Inventory from './Components/Admin/Inventory/Inventory';

import EmployeeDetails from './Components/Admin/Employees/EmployeeDetails';
import AddEmployee from './Components/Admin/Employees/AddEmployee';
import UpdateEmployee from './Components/Admin/Employees/UpdateEmployee';
import Employee from './Components/Admin/Employees/Employee';

import SupplierDetails from './Components/Admin/Suppliers/SupplierDetails';
import AddSupplier from './Components/Admin/Suppliers/AddSupplier';
import UpdateSupplier from './Components/Admin/Suppliers/UpdateSupplier';
import Supplier from './Components/Admin/Suppliers/Supplier';

import FeedbackDetails from './Components/Admin/Feedback/FeedbackDetails';
import AddFeedback from './Components/Admin/Feedback/AddFeedback';
import UpdateFeedback from './Components/Admin/Feedback/UpdateFeedback';
import Feedback from './Components/Admin/Feedback/Feedback';

import SupportDetails from './Components/Admin/Support/SupportDetails';

import OrderDetails from './Components/Admin/Order/OrderDetails';

import AppointmentDetails from './Components/Admin/Appointment/AppointmentDetails';

import { AuthProvider } from './Components/Auth/AuthContext';  // Import AuthProvider

function App() {
  return (
    <AuthProvider>  {/* Wrap the entire app with AuthProvider */}
      <Router>
        <Routes>
          {/* Home Page as the default route */}
          <Route path="/" element={<Home />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/gems' element={<Gems />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/userprofile' element={<UserProfile />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/Gems' element={<Gems />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/signup' element={<Register />} />
          <Route path="/jewellery/:id" element={<JewelleryProfile />} />

          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="user-management" element={<UserDetails />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="update-user/:id" element={<UpdateUser />} />

            <Route path="jewellery-management" element={<JewelleryDetails />} />
            <Route path="jewellery/:JID" element={<Jewellery />} />
            <Route path="add-jewellery" element={<AddJewellery />} />
            <Route path="update-jewellery/:JID" element={<UpdateJewellery />} />

            <Route path="inventory-management" element={<InventoryDetails />} />
            <Route path="inventory/:id" element={<Inventory />} />
            <Route path="add-inventory" element={<AddInventory />} />
            <Route path="update-inventory/:id" element={<UpdateInventory />} />

            <Route path="employee-management" element={<EmployeeDetails />} />
            <Route path="employee/:id" element={<Employee />} />
            <Route path="add-employee" element={<AddEmployee />} />
            <Route path="update-employee/:id" element={<UpdateEmployee />} />


            <Route path="inventory-management" element={<InventoryDetails />} />
            <Route path="inventory/:id" element={<Inventory />} />
            <Route path="add-inventory" element={<AddInventory />} />
            <Route path="update-inventory/:id" element={<UpdateInventory />} />
            <Route path="supplier-management" element={<SupplierDetails />} />
            <Route path="supplier/:id" element={<Supplier />} />
            <Route path="add-supplier" element={<AddSupplier />} />
            <Route path="update-supplier/:id" element={<UpdateSupplier />} />

            <Route path="feedback-management" element={<FeedbackDetails />} />
            <Route path="feedback/:id" element={<Feedback />} />
            <Route path="add-feedback" element={<AddFeedback />} />
            <Route path="update-feedback/:id" element={<UpdateFeedback />} />

            <Route path="support-management" element={<SupportDetails />} />

            <Route path="order-management" element={<OrderDetails />} />

            <Route path="appointment-management" element={<AppointmentDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;
