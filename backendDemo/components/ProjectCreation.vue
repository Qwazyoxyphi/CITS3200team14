<template>
    <form @submit.prevent="onSubmit">
    <AppControlInput v-model="projectCreate.projname" >ProjectName:</AppControlInput>

    <AppButton type="submit">Create</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      projectCreate: this.post
        ? { ...this.post }
        : {
            projname: "",
            dateCreated: new Date().toLocaleDateString(),
            owner: "u1",
            members: ""
          }
    };
  },
    methods:{
        onSubmit(){
           this.$emit("submit", this.projectCreate);
        },
        onCancel() {
            // Navigate back
            this.$router.push("/");
        }
    }
    
};
</script>