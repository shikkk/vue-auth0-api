<template>
  <div>
    <hero />
    <hr />
    <h-callback loginEventName="logged_in" @logged_in="LoginEvent"/>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import hCallback from "../auth/Callback.vue";

export default {
  name: "Home",
  components: {
    Hero,
    hCallback
  },
  methods:{
       LoginEvent(aaa){
          
            let redirectPath = 'some/vue/router-path/1';
            // url will be called by the hCallback component
            this.$hAuth.login(redirectPath);
       }
    },
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
