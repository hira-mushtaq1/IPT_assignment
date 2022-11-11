import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./Screens/Home/Header";
import Course from "./Screens/Home/Course";
import Footer from "./Screens/Home/Footer";
import Instructor from "./Screens/Home/Instructor";
import Login from "./Screens/Home/Login";
import Register from "./Screens/Home/Register";
import Dashboard from "./Screens/Dashboard";
import MyInstructor from "./Screens/myInstructor";
import Classroom from "./Screens/StudentClassroom";
import MyClassroom from "./Screens/Classroom";
import Courses from "./Screens/AllCourses";
import Profile from "./Screens/Profile";
import Notifications from "./Screens/Notifications";
import SideBar from "./Components/Sidebar";
import AllCourses from "./Screens/Admin/Courses";
import Users from "./Screens/Admin/Users";
import Students from "./Screens/Admin/Students";
import Instructors from "./Screens/Admin/Instructors";
import MyStudents from "./Screens/Instructor/MyStudents";
import { useEffect } from "react";
import ProfileDetails from "./Screens/ProfileDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={"/"} component={Home} />
          <Route path={`/courses`} component={Course} />
          <Route path={`/trainer`} component={Instructor} />
          <Route path={"/Home/:user/:role"} component={User} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const User = (props) => {
  const { user } = useParams();
  const { role } = useParams();
  const history = useHistory();
  let { path, url } = useRouteMatch();
  return (
    <div className="Main d-flex">
      <SideBar role={role} user={user} />
      <div className="Screens col">
        {role == 1 ? (
          <Routes>
            <Route exact path={`${path}`} component={Dashboard} />
            <Route
              exact
              path={`${path}/myInstructor`}
              component={MyInstructor}
            />
            <Route exact path={`${path}/Courses`} component={Courses} />
            <Route exact path={`${path}/myProfile`} component={Profile} />
            <Route
              exact
              path={`${path}/Notification`}
              component={Notifications}
            />
            <Route
              exact
              path={`${path}/Classroom/:courseid`}
              component={Classroom}
            />
          </Routes>
        ) : role == 2 ? (
          <Routes>
            <Route exact path={`${path}`} component={Dashboard} />
            <Route exact path={`${path}/myStudents`} component={MyStudents} />
            <Route
              exact
              path={`${path}/Notification`}
              component={Notifications}
            />
            <Route
              exact
              path={`${path}/MyClassroom/:courseid`}
              component={MyClassroom}
            />
            <Route exact path={`${path}/myProfile`} component={Profile} />
            <Route
              exact
              path={`${path}/StudentDetails`}
              component={ProfileDetails}
            />
          </Routes>
        ) : role == 3 ? (
          <Routes>
            <Route exact path={`${path}`} component={Dashboard} />
            <Route exact path={`${path}/Instructors`} component={Instructors} />
            <Route exact path={`${path}/Courses`} component={AllCourses} />
            <Route exact path={`${path}/Users`} component={Users} />
            <Route exact path={`${path}/Students`} component={Students} />
            <Route exact path={`${path}/myProfile`} component={Profile} />
            <Route
              exact
              path={`${path}/ProfileDetails`}
              component={ProfileDetails}
            />
            <Route
              exact
              path={`${path}/Classroom/:courseid`}
              component={MyClassroom}
            />
          </Routes>
        ) : null}
      </div>
    </div>
  );
};

const Frontend = (props) => {
  console.log("Home");
  let { path, url } = useRouteMatch();
  console.log("Path:", path, "Url:", url);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path={`${path}`} component={Home} />
        <Route exact path={`${path}courses`} component={Course} />
        <Route exact path={`${path}trainer`} component={Instructor} />
      </Routes>
      <Footer />
    </div>
  );
};
