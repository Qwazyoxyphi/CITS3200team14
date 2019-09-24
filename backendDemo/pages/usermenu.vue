<template>
  <div class="proj-create">
    <section class="project-creation">
      <ProjectCreation @submit="addproject" />
    </section>
  </div>

</template>

<script>
import axios from "axios";
import ProjectCreation from '@/components/ProjectCreation';
import firebase from "@/plugins/firebase.js";

export default {
  layout: "admin",
  components: {
    ProjectCreation
  },
  methods: {
    addproject(projectName){
        axios.post(//add new project
          "https://team-14-ontologies.firebaseio.com/projects.json",
          projectName
        )
        //if project posts successfully, update owners project table
        //u1 = userid(replace), 
        .then(result => 
          {firebase.database().ref("Users/"+"u1"+"/Projects").update({
            [projectName.projname] : [result.data.name],
          })}
        )        
        .catch(e => console.log(e));
    }
    
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>