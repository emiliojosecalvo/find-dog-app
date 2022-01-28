import './App.css';

function App() {
  return (
    <div className="App">
      <h3 className='display-1'>
        DOG
        <small className="text-muted"> app</small>
      </h3>
      <div className="card" style={{ width: '18rem' }} >
        <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card with stretched link</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
