import { useRef, useState, useEffect } from 'react';

const useScrollTrack = () => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleOnDown = (e) => {
    if (e.target.closest('.movies-container')) {
      setMouseDownAt(e.clientX);
    }
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;
    
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const newPercentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + newPercentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);

    if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${nextPercentage}%)`; 
      }}

  useEffect(() => {
    const track = trackRef.current;

    const onMouseDown = (e) => handleOnDown(e);
    const onMouseUp = (e) => handleOnUp(e);
    const onMouseMove = (e) => handleOnMove(e);

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [handleOnDown, handleOnUp, handleOnMove]);

  return { trackRef };
};


export default useScrollTrack