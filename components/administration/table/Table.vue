<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th @click="sort(column.attribute)" v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ column.name }}
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, i) in sortedItems" :key="i">
                <td v-for="(textColumn, j) in textColumns" :key="j" class="px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0">
                    {{ item[textColumn.attribute] }}
                  </div>
                </td>
                <td v-for="(image, k) in imageColumn" :key="k" class="px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="item[image.attribute]" alt="" />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <!-- first page -->
                  <span v-if="currentPage == 1" class="font-medium">{{ currentPage }}</span>
                  <!-- last page -->
                  <span v-else-if="currentPage == lastPage" class="font-medium">{{ (totalItems + 1) - itemsInPage.length }}</span>
                  <!-- middle page -->
                  <span v-else class="font-medium">{{ (itemsInPage.length * currentPage) - (itemsInPage.length - 1) }}</span>
                  to
                  <span class="font-medium">{{ currentPage != lastPage ? maxItemsPerPage * currentPage : totalItems }}</span>
                  of
                  <span class="font-medium">{{ totalItems }}</span>
                  results
                </p>
              </div>
              <div>
              Show 
              <select v-model.number="maxItemsPerPage" @change="onChange">
                <option >3</option>
                <option selected>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
               Items
              </div>
              <div v-if="notEnoughPages">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    @click="changeToPreviousPage"
                    href="#" 
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span>Previous</span>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a 
                    @click="changeItemsInPage(number)" 
                    v-for="(number, index) in displayPages" 
                    :key="index" href="#" 
                    :class="number === activeItem ? 'current' : ''" 
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {{ number }}
                  </a>
                  <a
                    @click="changeToNextPage"
                    href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span>Next</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Table extends Vue {

  @Prop({ required: true }) readonly items!: object[]
  @Prop({ required: true }) readonly columns!: object[]

  mounted () {
    this.currentPage = 1
    this.activeItem = 1
  }

  public prevPage: number | null = null
  public nextPage: number | null = null
  public currentPage: number | null = null
  public pageNumbers: [] = []
  public pageNumberCount: number = 1
  public totalItems: number = this.items.length
  public maxItemsPerPage: number = 5
  public lastPage: number = Math.ceil(this.totalItems / this.maxItemsPerPage)
  public notEnoughPages: true = true

  public currentSort: string = 'id'
  public currentSortDir: string = 'asc'

  public activeItem: number | null = null 

  onChange(): void {
    this.sortedItems
    this.itemsInPage
    this.displayPages
  }

  get displayPages() {
    this.lastPage = Math.ceil(this.totalItems / this.maxItemsPerPage)
    const totalPages = this.lastPage;
    let currentPage: any = this.currentPage;
    if ([1, 2, 3, 4].includes(currentPage)) currentPage = 3;
    else if ([totalPages - 1, totalPages].includes(currentPage)) currentPage = Math.max(0, totalPages - Math.trunc(5 / 2));

    if (totalPages < 5){
      return [...Array(totalPages).keys()].map(i => Math.max(0, i - Math.trunc(5 / 2) + currentPage))
    } else {
      return [...Array(5).keys()].map(i => Math.max(0, i - Math.trunc(5 / 2) + currentPage))
    }
  }

  changeItemsInPage(num: number): void {
    this.currentPage = num
    this.activeItem = num
  }

  changeToPreviousPage(): void {
    if (this.currentPage && this.activeItem)
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.activeItem -= 1
      } else {
        this.currentPage = 1
        this.activeItem = 1
      }
  }

  changeToNextPage(): void {
    if (this.currentPage && this.activeItem)
      if (this.currentPage < this.lastPage) {
        this.currentPage += 1
        this.activeItem += 1
      } else {
        this.currentPage = this.lastPage
        this.activeItem = this.lastPage
      }
  }

  sort(s: string): void {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
  }

  get itemsInPage(): any[] {
    if (this.currentPage)
      var index: any = this.currentPage * this.maxItemsPerPage - this.maxItemsPerPage
      return this.items.slice(index, index + this.maxItemsPerPage)
  }

  get sortedItems(): any[] {
    return this.itemsInPage.sort((a: any, b: any) => {
      let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;
      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      return 0;
    });
  }

  get textColumns(): any[] {
    return this.columns.filter((c: any) => c.attribute !== 'image' )
  }

  get imageColumn(): any[] {
     return this.columns.filter((c: any) => c.attribute === 'image' )
  }

}
</script>
<style scoped>
.current {
  @apply z-10 bg-indigo-50 border-indigo-500 text-indigo-600;
}
</style>