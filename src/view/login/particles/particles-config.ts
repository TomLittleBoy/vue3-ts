// 背景动画设置
export const particles = {
  fpsLimit: 60,
  interactivity: {
    // detectsOn: "canvas",
    detectsOn: "window",
    events: {
      onClick: {
        // 开启鼠标点击的效果
        enable: true,
        // mode: "push"
        mode: "repulse"
      },
      onHover: {
        // 开启鼠标悬浮的效果(线条跟着鼠标移动)
        enable: true,
        // mode: "grab"
        // mode: "repulse"
        mode: "grab"
      },
      resize: true
    },
    modes: {
      // 配置动画效果
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      grab: {
        distance: 200,
        duration: 0.4
      },
      attract: {
        // 鼠标悬浮时，集中于一点，鼠标移开时释放产生涟漪效果
        distance: 200,
        duration: 0.4,
        factor: 5
      }
    }
  },
  particles: {
    color: {
      value: "#b3b9a0" // 粒子点的颜色
    },
    links: {
      color: "#b3b9a0", // 线条颜色
      distance: 150,
      enable: true,
      opacity: 0.5, // 不透明度
      width: 2 // 线条宽度
    },
    collisions: {
      enable: true
    },
    move: {
      attract: { enable: true, rotateX: 3000, rotateY: 3000 },
      bounce: true,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: true,
      speed: 1, // 移动速度
      straight: true
    },
    number: {
      density: {
        enable: true,
        value_area: 700
      },
      value: 100
    },
    opacity: {
      value: 0.3
    },
    shape: {
      type: "polygon"
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}
