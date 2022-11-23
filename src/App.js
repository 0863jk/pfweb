import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Main from "./Container/Main/Main";
import Profile from "./Container/Profile/Profile";
import SortByGrade from "./Container/SortBy/SortByGrade";
import CreateLecture from "./Container/Lecture/CreateLecture";
import ModifyLecture from "./Container/Lecture/ModifyLecture";
import ManageLecture from "./Container/Lecture/ManageLecture";
import Search from "./Container/Search/Search";
import PortfolioList from "./Container/Portfolio/PortfolioList";
import PortfolioView from "./Container/Portfolio/PortfolioView copy";
import WritePortfolio from "./Container/Portfolio/WritePortfolio";
import ManagePortfolio from "./Container/Portfolio/ManagePortfolio";
import ModifyPortfolio from "./Container/Portfolio/ModifyPortfolio";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='Header'>
          <Header></Header>
        </div>
        <div className="wrap clearfix">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/grade/:pGrade" element={<SortByGrade />}></Route>
            <Route path="/grade/:pGrade/:pSemester" element={<SortByGrade />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/lecture/create" element={<CreateLecture />}></Route>
            <Route path="/lecture/modify/:pLectureId" element={<ModifyLecture />}></Route>
            <Route path="/lecture/manage" element={<ManageLecture />}></Route>
            <Route path="/search/" element={<Search />}></Route>
            <Route path="/search/?query=keyword" element={<Search />}></Route>

            <Route path="/lecture/:pLectureId" element={<PortfolioList />}></Route>
            <Route path="/portfolio/:pfid" element={<PortfolioView />}></Route>
            <Route path="/portfolio/write" element={<WritePortfolio />}></Route>
            <Route path="/portfolio/manage" element={<ManagePortfolio />}></Route>
            <Route path="/portfolio/modify/:pfid" element={<ModifyPortfolio />}></Route>
            {/*


        <Route path="/Wanted/" element={<WantedDev/>}></Route>
        <Route path="/Wanted/dev" element={<WantedDev/>}></Route>
        <Route path="/Wanted/job" element={<WantedJob/>}></Route>
        <Route path="/Wanted/job/Write" element={<WriteWantedJob/>}></Route>
        <Route path="/Wanted/job/view" element={<ViewWantedJob/>}></Route>

        
        <Route path="/Message" element={<Message/>}></Route>
        <Route path="/TestView" element={<TestVeiw/>}></Route>

  <Route path="*" element={<NotFound></NotFound>}></Route>*/}
          </Routes>
        </div>
      </BrowserRouter>

      <div className='wrap'>
        <Footer />
      </div>
    </>
  );
}

export default App;
