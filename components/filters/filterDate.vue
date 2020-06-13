<template>
 <div  class="filter_date">                            <div class="filter_label">{{filter.name}}</div>
                                   <div class="filter_date_content">
                                    <label for="payData2">От</label>
                                 <input class="filter_content"   type="date"  name="payData2"
                                 v-model="pay_data"
                                 min="1905-01-01" :max="today"  >

                                 <label for="payData1">До</label>
                                 <input class="filter_content"   type="date"  name="payData1"
                                 v-model="pay_dataEnd"
                                 min="1905-01-01" :max="today"  >
                                 </div>
                              
    </div>
</template>

<script>
export default {
 
  name:'filterDate',
  data() {
  return {
   pay_data:'2018-06-04',
   pay_dataEnd:'2020-06-04',
   today:new Date().toLocaleDateString(),
  };
  },
  computed:{
   
  },
  props:{
      filter:Object,
  },
  methods:{},
  watch:{
     'pay_data'(val){
         let n={};
      n.type='date';
      n.start=val;
      n.end=this.pay_dataEnd;
      n.serverName=this.filter.serverName;
      this.$emit('filterData',n)
      },
      'pay_dataEnd'(val){
         let n={};
      n.type='date';
      n.end=val;
      n.start=this.pay_data;
      n.serverName=this.filter.serverName;
      this.$emit('filterData',n)
      }
  },
  mounted(){
    //console.log(this.$router)
  }
}
</script>

<style lang="css" local>
.filter_date .filter_content{
    width: calc(50% - 35px);
    border: 0px solid transparent;
    padding: 0;
}
.filter_date .filter_content::-webkit-inner-spin-button,
.filter_date .filter_content::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
     display:none
}
.filter_date label{
    padding:0 5px;
    color: #aaa;
    font-size: 13px;
}
.filter_date_content{
    background-color:#fff;
}
</style>
