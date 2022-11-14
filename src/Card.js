export default function Card(props) {
  return (<div >
   
          <div class="card" className="m-3">
            
            <img src={props.imgUrl} alt="Avatar" width="300px" height="200px"/>
            <div class="container">
              <h4><b>{props.title}</b></h4>
              <p><h5>{props.okk}</h5></p>
            </div>
          </div>
        

      

    



  </div>
  );

}