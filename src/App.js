import logo from './logo.svg';
import './App.css';
import img from './rana.jpg';
function App() {
  return (



    <div>
      <div style={{ border: "solid 1px black", maxwidth: "100vw" }} >
        <h1 class="title red">Your name here</h1>
        <br />
        <img src={img} />
        <br />
        <img src="./ImageInPublic.png" />
      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>


  );
}

export default App;
