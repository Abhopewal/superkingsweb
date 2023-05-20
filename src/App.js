import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import "antd/dist/antd.less";

toast.configure();

function App() {
  return (
    <>
      <AllRoutes />
    </>

  );
}

export default App;
