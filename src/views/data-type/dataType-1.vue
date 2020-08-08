<template>
  <div class="dataType-1">
    <Card shadow style="width:1200px">
      <h3 slot="title">1.隐式转换表</h3>
      <Table border :row-class-name="rowClassName" :columns="tableColumns" :data="tableData"></Table>
    </Card>
  </div>
</template>

<script>
import { Card, Table } from 'view-design'

export default {
  name: 'dataType-1',
  data() {
    return {
      tableColumns: [
        {
          title: '值',
          key: 'value'
        },
        {
          title: '字符串',
          key: 'string'
        },
        {
          title: '数字',
          key: 'number'
        },
        {
          title: '布尔',
          key: 'boolean'
        },
        {
          title: '对象',
          key: 'object'
        }
      ],
      tableData: [
        {
          value: '""（空字符串）',
          string: '',
          number: 0,
          boolean: false,
          object: 'new String("")'
        },
        {
          value: '"0"（非空，数字值）',
          string: '',
          number: 0,
          boolean: true,
          object: 'new String("0")'
        },
        {
          value: '"abc"（非空、非数字值）',
          string: '',
          number: NaN,
          boolean: true,
          object: 'new String("abc")'
        },
        {
          value: '±0',
          string: '"0"',
          number: '',
          boolean: false,
          object: 'new Number(±0)'
        },
        {
          value: '1（非零，数字值）',
          string: '"1"',
          number: '',
          boolean: true,
          object: 'new Number(1)'
        },
        {
          value: NaN,
          string: '"NaN"',
          number: '',
          boolean: false,
          object: 'new Number(NaN)'
        },
        {
          value: '±Infinity',
          string: '"±Infinity"',
          number: '',
          boolean: true,
          object: 'new Number(±Infinity)'
        },
        {
          value: true,
          string: '"true"',
          number: 1,
          boolean: '',
          object: 'new Boolean(true)'
        },
        {
          value: false,
          string: '"false"',
          number: 0,
          boolean: '',
          object: 'new Boolean(false)'
        },
        {
          value: '{}',
          string: '',
          number: '',
          boolean: true,
          object: 'new Object()'
        },
        {
          value: '[]',
          string: '',
          number: '',
          boolean: true,
          object: 'new Array()'
        },
        {
          value: 'function() {}',
          string: '',
          number: '',
          boolean: true,
          object: 'new Function()'
        }
      ]
    }
  },
  methods: {
    rowClassName(row, index) {
      if (index <= 2 && index >= 0) {
        return 'bg-info'
      } else if (index <= 6 && index > 2) {
        return 'bg-success'
      } else if (index <= 8 && index > 6) {
        return 'bg-warning'
      } else {
        return 'bg-error'
      }
    }
  },
  components: {
    Card,
    Table
  }
}
</script>

<style scoped lang="stylus">
.dataType-1
  display: flex
  flex-direction: row
  flex-wrap: wrap
  .ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
  >>>.ivu-table
    font-size: 16px
    color: #000
  >>>.ivu-table .bg-info td
    background-color: #2db7f5
    color: #fff
  >>>.ivu-table .bg-success td
    background-color: #19be6b
    color: #fff
  >>>.ivu-table .bg-warning td
    background-color: #ff9900
    color: #fff
  >>>.ivu-table .bg-error td
    background-color: #ed4014
    color: #fff
</style>
