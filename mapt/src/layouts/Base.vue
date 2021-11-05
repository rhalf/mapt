<template>
  <div>
    <div>
      <slot name="navbar"></slot>
    </div>

    <div>
      <slot name="leftDrawer"></slot>
    </div>

    <div id="main">
      <slot name="main"></slot>
    </div>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
main {
  overflow-y: hidden;
  height: 100%;
  width: 100%;
}
</style>
