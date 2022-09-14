import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from './redux/departments/departments';
import Navbar from './components/Navbar';
import DepartmentMain from './components/DepartmentMain';
import DepartmentContainer from './components/DepartmentContainer';
import ArtworkContainer from './components/ArtworkContainer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const navDepartments = useSelector((state) => state.departments);
  const artworkData = useSelector((state) => state.artwork);

  useEffect(() => {
    dispatch(getDepartments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
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
          {artworkData.map((artwork) => (
            <Route
              key={artwork.objectID}
              path={`/${artwork.objectID}`}
              element={<ArtworkContainer />}
            />
          ))}
          {/* <Route path="/artwork-item" element={<ArtworkContainer />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
