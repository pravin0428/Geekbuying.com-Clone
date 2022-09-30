import React from "react"
 
const colors = [ 
        {    
        id : 1,
        img:"https://img.gkbcdn.com/s3/bn/2209/740x670-6332c3762b40c9222ca2c0d1.jpg"
        },
        {
          id : 2,  
          img : "//img.gkbcdn.com/bn/2209/740x670-633264402b40c93cecfc338a._p1_.jpg"
        },
        {
          id : 3,  
          img : "//img.gkbcdn.com/bn/2209/740x670-633265cf2b40c93cecfc3395._p1_.jpg"
        },
        {
          id : 4,  
          img : "//img.gkbcdn.com/bn/2209/740x670-63244c8f2b40c94d3cdf00a6._p1_.jpg"
        },
    
        {
          id : 5,  
          img : "//img.gkbcdn.com/bn/2209/740x670-632283f42b40c92780e67224._p1_.jpg"
        }
    ];
const delay = 2500;

function SlideshowFirst() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
      {colors.map((elem)=>(
           <div className="slide" key={elem.id} > 
          <img style={{height:"100%" , width:"100%"}}   src={elem.img}  alt={elem.id} />
        </div>
      ))}
        </div>
  
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      </>
    );
  }
  
  export default SlideshowFirst
