import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Profile from './container/Profile/Profile';
import Footer from './component/Footer';
import BasicExample from './component/Header';
import Header from './component/Header';
import Main from './container/Main/Main';
import SortByGrade from './container/SortByGrade';
import CreateLecture from './container/Lecture/CreateLecture';
import ManageLecture from './container/Lecture/ManageLecture';
import Search from './container/Search';
import PortfolioView from './container/Portfolio/PortfolioView';
import WritePortfolio from './container/Portfolio/WritePortfollio'
import ManagePortfolio from './container/Portfolio/ManagePortfolio'
import PortfolioList from './container/Lecture/PortfolioList';
import ModifyLecture from './container/Lecture/ModifyLecture';


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
