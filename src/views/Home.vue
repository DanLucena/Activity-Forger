<template>
  <div class="home">
    <Hero v-if="!isAccountStateVisible" />
    <Account v-if="isAccountStateVisible" />
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
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Account from "@/components/account/Account.vue";

import { particlesOptions } from "../assets/particlesOptions";
import { gloobsOptions } from "../assets/gloobsOptions";

export default {
  name: "Home",
  components: {
    Hero,
    Account,
  },
  data: () => {
    return {
      isAccountStateVisible: false,
      particlesOptions,
      gloobsOptions,
    };
  },
};
</script>

<style lang="less" scoped>
#tsparticles {
  position: fixed;
}
#tsbigparticles {
  position: fixed;
}
</style>