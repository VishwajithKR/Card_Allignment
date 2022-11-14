import logo from './logo.svg';
import './App.css';

import Card from "./Card"


function App() {
  return (
    <div className="container-fluid">
      <div className="row  ">
        <div className='col'>

          <div >


            <div className='d-flex flex-wrap mt-5 p-3 ms-3' >
              
              <Card
                okk="Its good for Skin"
                title="Orange"
                imgUrl="https://images.pexels.com/photos/556414/pexels-photo-556414.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>

              <Card
                okk="Its good for fact"
                title="Samosa"
                imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " style={{ width: "15px" }}></Card>
              <Card okk="Its good for Eye"
                title="Fish"
                imgUrl="https://images.pexels.com/photos/9392999/pexels-photo-9392999.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>
              <Card
                okk="Its good for Fat"
                title="Cake"
                imgUrl="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>
              <Card
                okk="Its good for Heart"
                title="Wine"
                imgUrl="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card>
              <Card
                okk="Its good for Fat"
                title="Pissa"
                imgUrl="https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></Card>
               <Card
                okk="Its good for Protien"
                title="Egg"
                imgUrl="https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></Card>
               <Card
                okk="Its good for health"
                title="Rotti"
                imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></Card>
               <Card
                okk="Its good for heat"
                title="Staberry Ice"
                imgUrl="https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg"
              ></Card>
               <Card
                okk="Its good for Muscle"
                title="Big Fish"
                imgUrl="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></Card>
               <Card
                okk="Its good for freshness"
                title="Grapes"
                imgUrl="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></Card>
              <Card
                title='Its good for wakeup'
                okk='Tea'
                imgUrl="https://images.pexels.com/photos/362572/pexels-photo-362572.jpeg?auto=compress&cs=tinysrgb&w=600"
              ></Card>
            </div>
          </div>
        </div>
      </div>


    </div>
  );


}

export default App;
