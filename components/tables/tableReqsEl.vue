<template>
 <tr class="table_element">
								<td class="table_checkbox_head">
									<div class=" table_checkbox">
										<input   type="checkbox" >
										<label class="table_checkbox-label"></label>
									</div>
								</td>
								<td
                                   v-for="(column, index) in dataColumns"
                                     :key="`columnName-${index}`"
                                       :column="column"
                                       :index="index"
                                       :class="{'color-blue':column.name=='Заявка'}"
                                   >{{(el[column.serverName]!=undefined)?el[column.serverName]:''}}</td>
                                
  </tr>
</template>

<script>
export default {
 
  name:'tableReqsEl',
  data() {
    return {
   };
  },
  computed:{
  },
  methods:{},
  props:{
      el:Object,
      dataColumns:Array,
  },
  watch:{
  },
  mounted(){
  }
}
</script>

<style lang="css" local>
.table_element{
    text-align: center;
    color:#000;
}
.color-blue{
    color: blue;
}

</style>
