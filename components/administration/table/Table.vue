<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Category
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number of Products
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in items" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{ index + 1 }}
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
            <div class="flex-1 flex justify-between sm:hidden">
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  {{ ' ' }}
                  <span class="font-medium">{{ currentPage }}</span>
                  {{ ' ' }}
                  to
                  {{ ' ' }}
                  <span class="font-medium">{{ maxItemsPerPage }}</span>
                  {{ ' ' }}
                  of
                  {{ ' ' }}
                  <span class="font-medium">{{ totalItems }}</span>
                  {{ ' ' }}
                  results
                </p>
              </div>
              <div v-if="notEnoughPages">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span>Previous</span>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a v-for="(num, index) in pageNumbers" v-key="index" href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {{ num }}
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
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Table extends Vue {

  public items: object[] = [
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'naga Burger',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 17,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 10,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Patty Burger',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 2,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Damn Good Burger',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Super Duper Damn Good Burger',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
    {
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
      name: 'Burger That is So Good It\'s On The next Page',
      slug: 'lorem ipsum',
      parentCategory: 'lorem ipsum',
      numberOfProducts: 108,
    },
  ]

  mounted () {
    this.setPageNumbers()
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

  public setPages(currentPage: number, totalPageCount: number): void {
    this.prevPage = currentPage > 1 ? (currentPage - 1) : null

    console.log('totalPageCount', totalPageCount)         // 2
    console.log('totalItems', this.totalItems)            // 6
    console.log('maxItemsPerPage', this.maxItemsPerPage)  // 5
    console.log('lastPage', this.lastPage)                // 2

    if (!totalPageCount as boolean) {
      console.log('if')
      this.nextPage = this.$route.query.page ? (parseInt(this.$route.query.page as string) + 1) : 2
      console.log('nextPage', this.nextPage)
    } else {
      console.log('else')
      this.nextPage = currentPage < totalPageCount ? (parseInt(currentPage as unknown as string) + 1) : null
      console.log('nextPage', this.nextPage)
    }

    for (let i = 0; i < totalPageCount; i++) {
      let _p = ((parseInt(currentPage as unknown as string)) + i)
      console.log('_p', _p)

      if (_p > 0 && _p <= totalPageCount) {
        console.log('_p > 0')
        this.pageNumbers.push(_p as never)
        this.pageNumberCount++
      } else this.pageNumbers.push(null as never)
    }
    console.log('[pageNumbers]', this.pageNumbers)
  }

  public setPageNumbers():void {
    let _currentPage: any = this.$route.query.page ? this.$route.query.page : 1
    this.currentPage = _currentPage
    this.setPages(_currentPage, this.lastPage)
  }

}
</script>
