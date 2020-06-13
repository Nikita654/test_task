<template>
 <div class="table_filters_block" >

     <div  v-for="(filter, index) in filters"
        :key="`dropName-${index}`"
          :filter="filter"
          :index="index"
          class="table_filters_element"
          >
    <filterDropdown @filterData="filterData"  :dataReqs="dataReqs" v-if="filter.type=='drop'" :filter="filter"></filterDropdown>
    <filterDate  @filterData="filterData"  v-else :filter="filter"></filterDate>
    </div>

 </div>
</template>

<script>
import filterDropdown from  '@/components/filters/filterDropdown'
import filterDate from  '@/components/filters/filterDate'
export default {
  components: {
    filterDropdown,
    filterDate
  },
 
  name:'filters',
  data() {
    return {
 
   };
  },
  computed:{
   
  },
  props:{
      dataReqs:Array,
      filters:Array,
  },
  methods:{
      filterData(n){
         this.$emit('filterData',n); 
      }
  },
  watch:{
    
  },
  mounted(){
   
  }
}
</script>

<style lang="css" local>
.table_filters_block{
    display: flex;
    vertical-align: center;
    justify-content: space-between;
    width: 100%;
}
.filter_label{
    color:#aaa;
    margin-bottom: 10px;
    display: block;
    -webkit-appearance: none;
}
.filter_content{
    height: 36px;
    line-height: 36px;
    width: 100%;
    padding: 0 10px;
    outline: none;
    border:0px solid transparent;
}
.filter_content option{
    font-size: 16px;
}
.table_filters_element{
    width:20%;
}
@media(max-width: 1023px){
  .table_filters_block{
    flex-direction: column;
  }
  .table_filters_element{
    width: 70%;
    margin: 20px auto;
  }
}
</style>
