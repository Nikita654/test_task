<template>
  <div class="filter_date">
    <div class="filter_label">{{filter.name}}</div>
    <div class="filter_date_content">
      <label for="payData2">От</label>
      <input
        class="filter_content"
        type="date"
        name="payData2"
        v-model="payDataStart"
        min="1905-01-01"
        :max="today"
      />

      <label for="payData1">До</label>
      <input
        class="filter_content"
        type="date"
        name="payData1"
        v-model="payDataEnd"
        min="1905-01-01"
        :max="today"
      />
    </div>
  </div>
</template>

<script>
export default {
 
  name:'FilterDate',
  data() {
  return {
   payDataStart:'2018-06-04',
   payDataEnd:'2020-06-04',
   today:new Date().toLocaleDateString(),
  };
  },
  props:{
      filter:Object,
  },
  watch:{
     'payDataStart'(val){
         let n={};
      n.type='date';
      n.start=val;
      n.end=this.payDataEnd;
      n.serverName=this.filter.serverName;
      this.$emit('filterSort',n)
      },
      'payDataEnd'(val){
         let n={};
      n.type='date';
      n.end=val;
      n.start=this.payDataStart;
      n.serverName=this.filter.serverName;
      this.$emit('filterSort',n)
    }
  },
}
</script>

<style lang="scss" local>
.filter_date {
  &_content {
    background-color: #fff;
  }
  .filter_content {
    width: calc(50% - 35px);
    border: 0px solid transparent;
    padding: 0;
  }
  .filter_content::-webkit-inner-spin-button,
  .filter_content::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
  }
  label {
    padding: 0 5px;
    color: #aaa;
    font-size: 13px;
  }
}
</style>
