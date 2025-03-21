import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { MoveDirection } from "@tsparticles/engine";

const Snowfall = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: MoveDirection.bottom,
          enable: true,
          random: false,
          straight: false,
        },
        number: {
          value: 30,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
        wobble: {
          distance: 20,
            enable: true,
            speed: {
                min: -5,
                max: 5,
            }
        }
      },
    }),
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="particles-container"
      />
    );
  }

  return <></>;
};

export default Snowfall;