<template>
  <div class="account-content">
    <div class="image-circle"></div>
    <h1>Start organizing your tasks creating an account.</h1>
    <p>
      To store your tasks and goals, you must create an account, if you already
      have one, just login. Or you can log as a guest.
    </p>
    <Progress />
    <div class="buttons-section">
      <button class="login">Log In</button>
      <button class="join">Join Now</button>
    </div>
    <p class="guest">Continue as Guest</p>
  </div>
</template>

<script>
import Progress from "./Progress.vue";

export default {
  name: "Account",
  components: {
    Progress,
  },
};
</script>

<style lang="less" scoped>
.account-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;

  .image-circle {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: rgb(223, 223, 223);
    z-index: 10;
  }

  h1 {
    text-align: center;
    line-height: 2.2rem;
    margin: 3rem 0 1rem 0;
    z-index: 10;
  }

  p {
    width: 22rem;
    text-align: center;
    z-index: 10;
    color: #999;
  }

  .buttons-section {
    width: 22rem;
    margin: 1.2rem 0 1rem 0;
    z-index: 10;

    button {
      width: 48%;
      height: 2.7rem;
      border: none;
      border-radius: 0.4rem;
      font-weight: 600;
      font-size: 0.9rem;
    }

    button:first-child {
      margin-right: 0.5rem;
    }

    .join {
      background-color: #8f78dd;
      color: #fff;
      transition: all 0.3s;

      &:hover {
        background-color: #b2a1e9;
      }
    }
    .login {
      background-color: #fff;
      border: 2px solid #8f78dd;
      color: #8f78dd;
    }
  }

  .guest {
    font-weight: 600;
    color: #8f78dd;
    cursor: pointer;
  }
}
</style>