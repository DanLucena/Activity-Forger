<template>
  <div class="hero-content">
    <h1>Start Organizing Your Routine</h1>
    <span>
      Improve the organization and prioritization of your tasks with just a few
      clicks!
    </span>
    <div class="btn">
      <button>Get Started Now</button>
    </div>
    <span class="footer">
      <font-awesome-icon
        icon="code"
        class="icon"
        :style="{ color: '#231a10' }"
      />Powered by
      <strong>DanLucena</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
.hero-content .btn {
  margin: 2.5rem 0 auto 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 10;
}
.hero-content button {
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: 700;
  font-size: 1rem;
  color: #231a10;
  background-color: #faf8ea;
  box-shadow: inset 0 0 0 0 #d3caec;
  transition: ease-out 0.3s;
  outline: none;
}
.hero-content button:hover {
  box-shadow: inset 225px 0 0 0 #ecc6f8;
  cursor: pointer;
}
.footer {
  margin-bottom: 1rem;
  z-index: 10;
  color: #231a10;
}
.icon {
  margin-right: 0.5rem;
}
</style>
