<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <!-- <b-navbar-brand>MyApps</b-navbar-brand> -->
            <img src="assets/img/logo.svg">
            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item id="text-login" href="/login"><h4 class="text-white" >Login</h4></b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<style media="screen">

</style>
<script>
export default {
    name: 'navbar',
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods:{
      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          let form = new FormData();
          this.axios.post('/logout', form, conf).then(response => {
            if (response.data.logged === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
          }).catch(error => {

        });
      },
  },
}
</script>
