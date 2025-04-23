import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ff6600"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: false
          },
          size: {
            value: 1.5,
            random: false
          },
          links: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
            triangles: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            },
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        preset: "links",
        detectRetina: true
      }}
    />
  );
}








