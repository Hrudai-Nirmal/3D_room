import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import type { Application } from '@splinetool/runtime';
import './App.css';

function App() {
  const navigate = useNavigate();
  const splineRef = useRef<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function onLoad(splineApp: Application) {
    splineRef.current = splineApp;
    const camera = splineApp.findObjectByName('Camera');
    
    console.log('Spline loaded, camera:', !!camera, splineApp);
    setIsLoading(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSplineMouseDown(e: any) {
    console.log('Clicked object:', e.target.name);
    switch (e.target.name) {
      case 'Order': navigate('/schedule'); break;
      case 'macBook': navigate('/portfolio'); break;
      case 'Book': navigate('/cv'); break;
      case 'phone': navigate('/contact'); break;
      case 'Retro Loudspeaker': console.log('Plays random music'); break;
      case 'object_guitar': navigate('/guitar'); break;
      case 'BMO': navigate('/game'); break;
      case 'lamp_office': {
        if (splineRef.current) {
          const mainLight = splineRef.current.findObjectByName('Main_light');
          if (mainLight) { console.log(mainLight); }
        }
        break;
      }
      default: break;
    }
  }

  return (
    <div className='awwwards-container'>
      {isLoading && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>Loading 3D Scene...</div>}
      <Spline
        scene='https://prod.spline.design/rjCTjApLHAbgYZ1B/scene.splinecode'
        onLoad={onLoad}
        onMouseDown={onSplineMouseDown}
      />
    </div>
  );
}

export default App;

