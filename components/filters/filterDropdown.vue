<template>
 <div >
                <label class="filter_label">{{filter.name}}</label>
                <div >
                        <select  class="filter_content" v-model="shops">
                                <option  selected :value="filter.nameAll">{{filter.nameAll}}</option>
                                <option  v-for="(el, indes) in arrOptions"
                                  :key="`elementTableName-${indes}`"
                                    :el="el"
                                    :indes="indes"  :value="el">{{el}}</option>
                        </select>
                </div>
    </div>
</template>

<script>
export default {
 
  name:'filterDropdown',
  data() {
  return {
   shops:this.filter.nameAll,
   arrOptions:[]
  };
  },
  computed:{
   // lngData() {
   // return this.$store.getters.getlngData;
   // },
  },
  props:{
      dataReqs:Array,
      filter:Object,
  },
  methods:{},
  watch:{
      'shops'(val){
      let n={};
      n.type='drop';
      n.serverName=this.filter.serverName;
      n.name=val;
      this.$emit('filterData',n)
      }
  },
  mounted(){
    this.arrOptions=this.dataReqs.map((el)=>{
      return el[this.filter.serverName];
    })
    this.arrOptions=this.arrOptions.filter((item, pos)=> {
    return this.arrOptions.indexOf(item) == pos;
});
  }
}
</script>

<style lang="css" local>

</style>
