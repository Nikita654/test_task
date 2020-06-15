<template>
  <div class="table_filters_block">
    <div
      v-for="(filter, index) in filterList"
      :key="`dropName-${index}`"
      :filter="filter"
      :index="index"
      class="table_filters_element"
    >
      <FilterSelections
        @filterSort="filterSort"
        key="FilterSelections"
        :dataReqsList="dataReqsList"
        v-if="filter.type=='drop'"
        :filter="filter"
      />
      <FilterDate @filterSort="filterSort" key="FilterDate" v-else :filter="filter" />
    </div>
  </div>
</template>

<script>
import FilterSelections from  '@/components/FilterListElements/FilterSelections'
import FilterDate from  '@/components/FilterListElements/FilterDate'
export default {
  components: {
    FilterSelections,
    FilterDate
  },
   name:'FilterList',
  props:{
      dataReqsList:Array,
      filterList:Array,
  },
  methods:{
      filterSort(filterSortData){
         this.$emit('filterSort',filterSortData); 
      }
  },
}
</script>

<style lang="scss" local>
.table_filters {
  &_block {
    display: flex;
    vertical-align: center;
    justify-content: space-between;
    width: 100%;
  }

  &_element {
    width: 20%;
  }
}
@media (max-width: 1023px) {
  .table_filters {
    &_block {
      flex-direction: column;
    }
    &_element {
      width: 70%;
      margin: 20px auto;
    }
  }
}
</style>
