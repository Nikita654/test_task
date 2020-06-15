<template>
  <div class="filter">
    <label class="filter_label">{{filter.name}}</label>
    <div>
      <select class="filter_content" v-model="currentChoose">
        <option selected :value="filter.nameAll">{{filter.nameAll}}</option>
        <option
          v-for="(el, indes) in arrOptions"
          :key="`elementTableName-${indes}`"
          :el="el"
          :indes="indes"
          :value="el"
        >{{el}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name:'FilterSelections',
  data() {
  return {
   currentChoose:this.filter.nameAll,
   arrOptions:[]
  };
  },
  props:{
      dataReqsList:Array,
      filter:Object,
  },
  watch:{
      'currentChoose'(val){
      let filterSortData={};
      filterSortData.type='drop';
      filterSortData.serverName=this.filter.serverName;
      filterSortData.name=val;
      this.$emit('filterSort',filterSortData)
      }
  },
  mounted(){
    this.arrOptions=this.dataReqsList.map((el)=>{
      return el[this.filter.serverName];
    })
    this.arrOptions=this.arrOptions.filter((item, pos)=> {
    return this.arrOptions.indexOf(item) == pos;
});
  }
}
</script>

<style lang="scss" local>
.filter {
  &_label {
    color: #aaa;
    margin-bottom: 10px;
    display: block;
    -webkit-appearance: none;
  }
  &_content {
    height: 36px;
    line-height: 36px;
    width: 100%;
    padding: 0 10px;
    outline: none;
    border: 0px solid transparent;
  }
  &_content option {
    font-size: 16px;
  }
}
</style>
