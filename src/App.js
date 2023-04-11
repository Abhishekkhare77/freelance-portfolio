import './App.css';
import Navbar from './components/Navbar';


function App() {
  let mousemotion=null;
  if(window.innerWidth>700){
  const mainCircle = document.createElement('div');
  mainCircle.classList.add('circle-main');
  document.body.appendChild(mainCircle);

  const secondCircle = document.createElement('div');
  secondCircle.classList.add('second-circle');
  document.body.appendChild(secondCircle);


  mousemotion = (e)=>{
    const x = e.pageX;
    const y = e.pageY;

    secondCircle.style.transform = `translate(${x}px, ${y}px)`;
    mainCircle.style.transform = `translate(${x}px, ${y}px)`;

    const hoverables = document.querySelectorAll('.hoverable');

    Array.from(hoverables).forEach((hoverEl) => {
      hoverEl.addEventListener('mouseover', (e) => {
        mainCircle.classList.add('circle-hide');
        secondCircle.classList.add('circle-scale');
      })
    })

    Array.from(hoverables).forEach((hoverEl) => {
      hoverEl.addEventListener('mouseout', (e) => {
        mainCircle.classList.remove('circle-hide');
        secondCircle.classList.remove('circle-scale');
      })
    });

  };
}else{

}

  return (
    <div onMouseMove={mousemotion} className='overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
