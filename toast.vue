<template>
  <transition>
    <div class='parent' v-if='show'>
      <div class='child'>{{message}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      message: 'nessage',
      show: false
    }
  }
}
</script>

<style>
.parent {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 30px 50px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-content: center;
}

.child {
  display: flex;
  justify-content: center;
  align-content: center;
}

</style>
