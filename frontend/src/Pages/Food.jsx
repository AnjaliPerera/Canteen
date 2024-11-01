import './Food.css';
import FoodDetails from './FoodDetails';
import Sidebar from './Sidebar';
function Food() {
  return (
    <div className="dashboard">
      
      <FoodDetails />
      <Sidebar />
    </div>
  );
}

export default Food;
