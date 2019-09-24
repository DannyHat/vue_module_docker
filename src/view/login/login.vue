<template>
  <div class="containner">
    <div class="login_form">
      <input placeholder="请输入用户名" />
      <input placeholder="请输入密码" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
html, body {
  margin: 0px;
  width: 100%;
  height: 100%;
}
.containner {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/img/brige.png');
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_form {
  width: 30%;
  max-width: 500px;
  height: 30%;
  max-height: 400px;
  background-color: white;
}
</style>