<template>
<div class="table">
 <filters @filterData="filterData"  class="table_filters" :dataReqs="dataReqs"  :filters="dataFilters" />
 <tableReqs class="table_data" :dataColumns="dataColumns" :dataReqs="dataReqs" />
 </div>
</template>

<script>
import filters from  '@/components/filters'
import tableReqs from  '@/components/tables/tableReqs'
export default {
  components: {
    filters,
    tableReqs
  },
  name:'ourTable',
  data() {
    return {
   };
  },
  computed:{
  
   
    dataFilters() {
    return this.$store.getters['TableData/getdataFilters']
    },
    dataReqs() {
    return this.$store.getters['TableData/getdataReqs']
    },
    dataColumns() {
    return this.$store.getters['TableData/getdataColumns']
    },
  },
  methods:{
    filterData(n){
      if(n.type=="drop"){
        this.$store.commit('TableData/dataFilterDrop',n);
      }
      if(n.type=="date"){
        this.$store.commit('TableData/dataFilterDate',n);
      }
    }
  },
  watch:{
    
  },
  mounted(){
    
  }
}
</script>

<style lang="css" local>
body{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;
}
main{
  background-color:#eee ;
  color: #000;
}
.table{
  width: 1440px;
  max-width: 1440px;
  margin-left:auto;
  margin-right: auto;
  
  max-height: 80vh;
  padding: 10vh 0;
}
.table_filters{
  margin-bottom: 25px
}
.table_data{
  background-color:#FFF ;
  width: 100%;
}
@media(max-width: 1440px){
  .table{
  width: calc(100% - 20px);
  overflow-x: hidden;
  }
  .table_data{
  overflow-x: scroll;
}
.table_dashboard{
  width: 1440px;
  max-width: 1440px;
}
}
</style>
