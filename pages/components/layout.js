import Particles from "react-particles-js";




const Spots = () => {
  return (
      <Particles 
      canvasClassName="example"
        params={{
          particles: {
            color: {
              value: [
                "#4c0594", 
                "#357ECD", 
                "#24C442", 
                "#E5E33F", 
                "#E57C", 
                "#CE141F", 
                "#0602E7"]
            },
            number: {
              value: 100,
              density: {
                enable: false
              }
            },
            size: {
              value: 3.5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.5
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 2,
                size: 9,
                opacity: 9
              },
              repulse: {
                distance: 200,
                duration: 2
              }
            }
          }
        }}
      />

  );
}

export default Spots