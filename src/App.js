import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import CustomerReview from './components/CustomerReview/CustomerReview';
import AreaManegerRegistration from './components/AreaManegerRegistration/AreaManegerRegistration';
import AreaManegerList from './components/AreaManegerList/AreaManegerList';
import MobileViewSideBar from './components/Sidebar/MobileViewSideBar';
import TotalParking from './components/TotalParking/TotalParking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AreaManegerProfile from './components/AreaManegerProfile/AreaManegerProfile';
import Demo from './components/LabourCompanyList/LabourCompanyList';
import LaC_profile from './components/LabourCompanyProfile/LabourCompanyProfile';
import LC_Guard_List from './components/LabourCompanyGuardList/LabourCompanyGuardList';
import LC_registration from './components/LabourCompanyRegistration/LabourCompanyRegistration';
import LC_Payment_History from './components/PaymentClosingHistory/PaymentClosingHistory';
import Dashboard from './components/Dashboard/Dashboard';
import Advertise from './components/Advertise/Advertise';
import TotalRevenue from './components/TotalRevenue/TotalRevenue';
import UserManagement from './components/UserManagement/UserManagement'
import UserTotalBooking from './components/UserTotalBooking/UserTotalBooking';
import UserTotalPayment from './components/UserTotalPayment/UserTotalPayment';
import SiteRegisteration from './components/SiteRegisteration/SiteRegisteration';
import MallOwnerLists from './components/MallOwner/MallOwnerLists/MallOwnerLists';
import MallOwnerProfile from './components/MallOwner/MallOwnerProfile/MallOwnerProfile';
import MallOwnerRegistration from './components/MallOwner/MallOwnerRegistration/MallOwnerRegistration';
import UserProfile from './components/UserProfile/UserProfile';
import TotalSite from './components/TotalSites/TotalSites';

function App() {

  const appDivOnClick = () => {
    document.getElementById("mobile-view-sidebar-12").classList.add("d-none")
  }

  return (
    <>
      <BrowserRouter>
        <div className="grid-1-3">
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='navbar-12'>
            <Navbar />
            {/* <Mbvt /> */}

            <div className='mx-auto main12' onClick={appDivOnClick} style={{ backgroundColor: "white", marginTop: "5px", width: "100%", height: "93vh", overflowY: 'scroll' }}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                {/* <TotalParking /> */}
                <Route path='/TotalParking' element={<TotalParking />} />
                <Route path='/TotalRevenue' element={<TotalRevenue />} />
                <Route path='/TotalSite' element={<TotalSite />} />
                {/* <TotalRevenue /> */}
                <Route path='/customerReview' element={<CustomerReview />} />
                <Route path='/SiteRegisteration' element={<SiteRegisteration />} />

                <Route path='/LabourCompanyList' element={<Demo />} />
                <Route path='/LabourCompanyProfile' element={<LaC_profile />} />
                <Route path='/LabourCompanyGuardList' element={<LC_Guard_List />} />
                <Route path='/LabourCompanyRegistration' element={<LC_registration />} />
                <Route path='/PaymentClosingHistory' element={<LC_Payment_History />} />
                {/* <LaC_profile/> */}
                {/* <LC_Guard_List/> */}
                {/* <LC_registration /> */}
                {/* <LC_Payment_History /> */}
                <Route path='/areaManegerRegistration' element={<AreaManegerRegistration />} />
                <Route path='/areaManegerList' element={<AreaManegerList />} />
                <Route path='/AreaManegerProfile' element={<AreaManegerProfile />} />

                <Route path='/MallOwnerLists' element={<MallOwnerLists/>} />
                <Route path='/MallOwnerProfile' element={<MallOwnerProfile />} />
                <Route path='/MallOwnerRegistration' element={<MallOwnerRegistration />} />

                <Route path='/UserManagement' element={<UserManagement />} />
                <Route path='/UserProfile' element={<UserProfile />} />

                <Route path='/userTotalBooking' element={<UserTotalBooking />} />
                <Route path='/userTotalPayment' element={<UserTotalPayment />} />
                <Route path='/Advertise' element={<Advertise />} />
                {/* <Advertise /> */}

                {/* <UserManagement /> */}
                {/* <UserTotalBooking /> */}
                {/* <UserTotalPayment /> */}

                {/* <CustomerReview /> */}
                {/* <AreaManegerList /> */}
                {/* <AreaManegerProfile /> */}
                {/* <AreaManegerRegistration /> */}

                {/* <LC_Guard_List /> */}
                {/* <TotalParking /> */}
                {/* <Demo /> */}
                {/* <UserManagement /> */}
                {/* <Demo /> */}


              </Routes>
            </div>
            <MobileViewSideBar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
