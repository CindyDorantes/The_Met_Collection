import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from './redux/departments/departments';
import Navbar from './components/Navbar';
import DepartmentMain from './components/DepartmentMain';
import DepartmentContainer from './components/DepartmentContainer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const navDepartments = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<DepartmentMain />} />
          {navDepartments.map((department) => (
            <Route
              key={department.departmentId}
              path={department.path}
              element={<DepartmentContainer />}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
