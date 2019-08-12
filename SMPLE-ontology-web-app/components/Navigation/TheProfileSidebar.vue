<template>
  <div class="container">
    <div class="title">
      <h5>Profile</h5>
    </div>
    <AppSidebarBtn
      text="My Progress"
      border-color="red"
    />
    <AppSidebarBtn
      text="Settings"
      border-color="green"
    />
    <AppSidebarBtn
      text="Account"
      border-color="blue"
    />
    <AppSidebarBtn
      text="Upgrade"
      border-color="red"
    />
    <AppSidebarBtn
      text="Referral Program"
      border-color="green"
    />
    <AppSidebarBtn
      text="Logout"
      border-color="blue"
    />
  </div>
</template>

<script>
import AppSidebarBtn from './AppSidebarBtn'
export default {
  name: 'TheProfileSidebar',
  components: {
    AppSidebarBtn
  }
}
</script>

<style lang="css" scoped>

.container {
  flex: 0 0 250px;
  height: 100vh;
  border-left: 1px solid #e5e5e5;
}

.title {
  padding: 10px;
  background-color: rgba(8, 20, 36, 0.84);
  color: white;
  text-align: center;
}


</style>
