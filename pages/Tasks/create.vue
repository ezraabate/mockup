<template>
  <div class="container">
    <h4>Create Task</h4>
  <form @submit.prevent="addTask">
   
   <div class="form-group">
    <label for="tid">Id</label>
    <input type="text" class="form-control" id="tid" v-model="tid" placeholder="Enter id">
   </div>
  <br>
   <div class="form-group">
    <label for="taskname">Task Name</label>
    <input type="text" class="form-control" id="taskname" v-model="tname" placeholder="Enter task name">
   </div>
    <br>
   <div class="form-group">
    <label for="duedate">Due Date</label>
    <input type="date" class="form-control" id="duedate" v-model="ddate">
   </div>
   <br>
    <br>
   <nuxt-link to="/tasks" class="btn btn-secondary">Back</nuxt-link>
   <button type="submit" class="btn btn-success">Submit</button>
  
</form>
</div>
</template>




<script>
import {mapState,mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  
  data(){
    return{

      tname:'',
      ddate:'',
      tid:''

    }
  },
    head(){
        return{
            title:'Create New task',
             meta: [
        {
          hid: "description",
          name: "description",
          content: "content"
        }
      ]
        }
        
    },
    methods:{
      ...mapActions(["add"]),
      addTask(){
        const newdata = 
            
            {
                id:this.tid,
                name: this.tname,
                day: this.ddate,
                reminder: false
            }
            
        this.add(newdata)

      }
    }
}
</script>



<style>
 .contaier{
  align-items: center;
}
</style>