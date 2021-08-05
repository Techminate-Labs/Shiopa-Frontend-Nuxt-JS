<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th @click="sort(column.key)" v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ column.name }}
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in sortedItems" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{ item.id }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="item.image" alt="" />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ item.slug }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ item.parentCategory }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">
                    {{ item.numberOfProducts }}
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
                  <span v-else-if="currentPage == lastPage" class="font-medium">{{ totalItems - (itemsInPage.length + 1) }}</span>
                  <!-- middle page -->
                  <span v-else class="font-medium">{{ (itemsInPage.length * currentPage) - (itemsInPage.length - 1) }}</span>
                  to
                  <span class="font-medium">{{ currentPage != lastPage ? maxItemsPerPage * currentPage : totalItems }}</span>
                  of
                  <span class="font-medium">{{ totalItems }}</span>
                  results
                </p>
              </div>
              <div v-if="notEnoughPages">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a 
                    href="#" 
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span>Previous</span>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a 
                    @click="changeItemsInPage(number)" 
                    v-for="(number, index) in pageNumbers" 
                    :key="index" href="#" 
                    :class="number === activeItem ? 'current' : ''" 
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {{ number }}
                  </a>
                  <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
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
    this.setPageNumbers()
    this.activeItem = 1
  }

  public prevPage: number | null = null
  public nextPage: number | null = null
  public currentPage: number | null = null
  public pageNumbers: [] = []
  public pageNumberCount: number = 1
  public totalItems: number = this.items.length
  public maxItemsPerPage: number = 10
  public lastPage: number = Math.ceil(this.totalItems / this.maxItemsPerPage)
  public notEnoughPages: true = true

  public currentSort: string = 'name'
  public currentSortDir: string = 'asc'

  public activeItem: number | null = null 

  setPages(currentPage: number, totalPageCount: number): void {
    this.prevPage = currentPage > 1 ? (currentPage - 1) : null

    if (!totalPageCount as boolean) {
      this.nextPage = this.$route.query.page ? (parseInt(this.$route.query.page as string) + 1) : 2
    } else {
      this.nextPage = currentPage < totalPageCount ? (parseInt(currentPage as unknown as string) + 1) : null
    }

    for (let i = 0; i < totalPageCount; i++) {
      let _p = ((parseInt(currentPage as unknown as string)) + i)

      if (_p > 0 && _p <= totalPageCount) {
        this.pageNumbers.push(_p as never)
        this.pageNumberCount++
      } else this.pageNumbers.push(null as never)
    }
  }

  setPageNumbers():void {
    let _currentPage: any = this.$route.query.page ? this.$route.query.page : 1
    this.currentPage = _currentPage
    this.setPages(_currentPage, this.lastPage)
  }

  changeItemsInPage(num: number): void {
    this.currentPage = num
    this.itemsInPage

    this.activeItem = num;
  }

  sort(s: string): void {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
  }

  get itemsInPage(): any[] {
    var index: any = this.currentPage as any * this.maxItemsPerPage - this.maxItemsPerPage
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

}
</script>
<style scoped>
.current {
  @apply z-10 bg-indigo-50 border-indigo-500 text-indigo-600;
}
</style>