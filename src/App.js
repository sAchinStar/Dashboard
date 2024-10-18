// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import Header from './components/Header';
import Dashboard from './components/Dashboard'
import AllBooking from './components/Allbooking';
import AddBooking from "./components/AddBooking"
import AllRooms from './components/AllRooms';
import Customers from "./components/Customers"
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [customers, setCustomers] = useState([]); // State to hold customer data

 // Function to handle new customer addition
 const handleAddCustomer = (newCustomer) => {
  setCustomers([...customers, newCustomer]); // Add the new customer to the state
};
  // Handle sidebar item click and page switching
  const handleSidebarClick = (page) => {
    setActivePage(page);
  };

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} onSidebarClick={handleSidebarClick} onToggle={toggleSidebar} />
        {/* <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}> */}
          {/* Header */}
          {/* <Header /> */}
          {/* Content */}
          <div className="content">
            {/* content */}
            {activePage === 'dashboard' && <Dashboard />}
            {activePage === 'allBookings' && <AllBooking customers={customers} />}
            {activePage === 'addBooking' && <AddBooking onAddCustomer={handleAddCustomer} />}
            {activePage === 'allRooms' && <AllRooms />}
            {activePage === 'customers' && <Customers customers={customers} onCustomerUpdate={setCustomers} />}
            {/* {activePage === 'settings' && <Settings />} */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
