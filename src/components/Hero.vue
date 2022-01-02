<template>
  <div class="hero-content">
    <h1>Start Organizing Your Routine</h1>
    <span>
      Improve the organization and prioritization of your tasks with just a few
      clicks!
    </span>
    <button>Get Started Now</button>
    <span class="footer">Powered by DanLucena</span>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
    />
    <Particles
      id="tsbigparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="gloobsOptions"
    />
  </div>
</template>

<script>
import { particlesOptions } from "../assets/particlesOptions";
import { gloobsOptions } from "../assets/gloobsOptions";

export default {
  name: "Hero",
  data: () => {
    return {
      particlesOptions,
      gloobsOptions,
    };
  },
};
</script>

<style scoped>
.hero-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #ddd6f3, #faaca8);
  padding: 0 3rem;
}
.hero-content h1 {
  font-size: 3.3rem;
  text-align: center;
  font-weight: 800;
  line-height: 3.3rem;
  margin: auto 0 2.5rem 0;
  margin-top: auto;
  color: #231a10;
  z-index: 10;
}
.hero-content span {
  text-align: center;
  color: #231a10;
  z-index: 10;
}
.hero-content button {
  margin: 2.5rem 0 auto 0;
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 10;
}
.footer {
  margin-bottom: 1rem;
  z-index: 10;
}
#tsparticles {
  position: fixed;
}
#tsbigparticles {
  position: fixed;
}
</style>
