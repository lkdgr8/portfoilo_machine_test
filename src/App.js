import './App.css';
import Blogs from './Blogs';
import Navbar from './Navbar';
import Showprojects from './Showprojects';
import Slider from './Slider';
import Contact from './Contact'
function App() {
  return (
    <>
      <Navbar />
      <Slider />  
      <Showprojects />
      <Blogs />
      <Contact />
    </>
  );
}

export default App;
