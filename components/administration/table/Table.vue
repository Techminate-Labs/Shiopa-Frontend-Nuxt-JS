<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="py-2 align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 border-collapse">
            <thead class="bg-gray-50">
              <tr>
                <th 
                  @click="sort(column.attribute)" 
                  v-for="(column, index) in columns" 
                  :key="index" 
                  scope="col" 
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ column.name }}
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, i) in sortedItems" :key="i" class="bg-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td 
                  v-for="(textColumn, j) in textColumns" 
                  :key="j" 
                  :data-label="textColumn.attribute"
                  class="w-full lg:w-auto px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0">
                    {{ item[textColumn.attribute] }}
                  </div>
                </td>
                <td 
                  v-for="(image, k) in imageColumn" 
                  :key="k" class="w-full lg:w-auto px-6 py-4 whitespace-nowrap"
                  :data-label="imageColumn.attribute">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="item[image.attribute]" alt="" />
                  </div>
                </td>
                <td 
                  data-label="Action"
                  class="w-full lg:w-auto px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between md:justify-end">
              <div class="md:mr-6">
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
              <div class="md:mr-6 text-sm text-gray-700">
              Show 
              <select 
                v-model.number="maxItemsPerPage" 
                @change="onChange"
                class="border-2 p-2 rounded-lg">
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
                <nav class="relative z-0 inline-flex" aria-label="Pagination">
                  <a
                    @click="changeToPreviousPage"
                    href="#" 
                    class="relative inline-flex items-center mr-2 px-2 py-2 rounded-full bg-white text-sm font-medium text-gray-500 shadow-md hover:bg-gray-50">
                    <span>
                    <!-- chevron-left -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </span>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a 
                    @click="changeItemsInPage(number)" 
                    v-for="(number, index) in displayPages" 
                    :key="index" href="#" 
                    :class="number === activeItem ? 'current' : ''" 
                    class="bg-white mx-2 shadow-md text-gray-500 hover:bg-gray-50 relative inline-flex items-center justify-center h-4 w-4 px-4 py-4 text-sm font-medium rounded-full">
                    {{ number }}
                  </a>
                  <a
                    @click="changeToNextPage"
                    href="#"
                    class="relative inline-flex items-center ml-2 px-2 py-2 rounded-full bg-white text-sm font-medium text-gray-500 shadow-md hover:bg-gray-50">
                    <span>
                    <!-- chevron-right -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
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
  @apply z-10 bg-blue-500 text-white;
}

@media (max-width: 1024px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
    
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>