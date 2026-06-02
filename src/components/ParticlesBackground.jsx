import Particles from "react-tsparticles";

function ParticlesBackground() {

  return (

    <Particles
      options={{

        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#0f172a",
          },
        },

        particles: {

          number: {
            value: 50,
          },

          color: {
            value: "#ff2d95",
          },

          links: {
            enable: true,
            color: "#ff2d95",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 3,
          },

          opacity: {
            value: 0.5,
          },

        },

      }}
    />

  );
}

export default ParticlesBackground;