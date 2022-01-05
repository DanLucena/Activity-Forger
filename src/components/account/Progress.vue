<template>
  <div class="progress-bar-container">
    <div class="step selected"></div>
    <div class="step"></div>
    <div class="step"></div>
    <div class="step"></div>
  </div>
</template>
<script>
export default {
  name: "Progress",
};
</script>
<style lang="less" scoped>
.progress-bar-container {
  display: flex;
  margin-top: 3rem;

  .step {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 0.5rem;

    &:last-child {
      margin: 0;
    }
  }

  .selected {
    background-color: #8f78dd;
  }
}
</style>
