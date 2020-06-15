<template>
  <div class="table">
    <FilterList
      :dataReqsList="dataReqsList"
      :filterList="filterList"
      class="table_filters"
      @filterSort="filterSort"
    />
    <TableReqsList class="table_data" :dataColumns="dataColumns" :dataReqsList="dataReqsList" />
  </div>
</template>

<script>
//mapGetters не нужен, так как мы используем данные сразу без обработки
import { mapState } from 'vuex';
import FilterList from  '@/components/FilterList'
import TableReqsList from  '@/components/TableReqs/TableReqsList'
export default {
  components: {
    FilterList,
    TableReqsList
  },
  name:'OurTable',
  computed:{
   ...mapState('TableData',[
            'filterList','dataColumns','dataReqsList'
        ])
  },
  methods:{
    filterSort(n){
      if(n.type=='drop'){
        this.$store.commit('TableData/dataFilterDrop',n);
      }
      if(n.type=='date'){
        this.$store.commit('TableData/dataFilterDate',n);
      }
    }
  },
}
</script>

<style lang='scss' local>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
main {
  background-color: #eee;
  color: #000;
}
.fade {
  &-enter-active {
    transition: all 0.7s ease;
  }
  &-leave-active {
    transition: all 0.7s ease;
  }
  &-leave-to {
    opacity: 0;
  }
  &-enter {
    opacity: 0;
  }
}
.table {
  width: 1440px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  max-height: 80vh;
  padding: 10vh 0;

  &_filters {
    margin-bottom: 25px;
  }
  &_data {
    background-color: #fff;
    width: 100%;
  }
}
@media (max-width: 1440px) {
  .table {
    width: calc(100% - 20px);
    overflow-x: hidden;

    &_data {
      overflow-x: scroll;
    }
    &_dashboard {
      width: 1440px;
      max-width: 1440px;
    }
  }
}
</style>
