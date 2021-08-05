<template>
  <div class="p-8 w-full md:w-5/6 lg:w-10/12 xl:w-11/12">
      <h1 class="text-4xl mb-4">Products</h1>
      <Table :items="this.items" :columns="this.columns"/>
  </div>
</template>

<script>
import Table from '@/components/administration/table/Table.vue'

export default {
  layout: 'dashboard',
  components: {
    Table
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Naga Burger',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 17,
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 10,
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Patty Burger',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 2,
        },
        {
          id: 4,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Damn Good Burger',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 5,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Super Duper Damn Good Burger',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 6,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That is So Good It\'s On The next Page',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 7,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That is So Good It\'s On The next Page',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 8,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That is So Good It\'s On The next Page',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 9,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That is So Good It\'s On The next Page',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 10,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That is So Good It\'s On The next Page',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 11,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 12,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 13,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 14,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 15,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 16,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 17,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 18,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 19,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 20,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Last Burger That You Can\'t Even ?',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 21,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Not The Last Burger That You Can\'t Even',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
        {
          id: 22,
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
          name: 'Last Burger That You Can\'t Even !!!',
          slug: 'lorem ipsum',
          parentCategory: 'lorem ipsum',
          numberOfProducts: 108,
        },
      ],
      columns: [
        {
          name: '#',
          key: 'id'
        },
        {
          name: 'Image',
          key: 'id'
        },
        {
          name: 'name',
          key: 'name'
        },
        {
          name: 'slug',
          key: 'slug'
        },
        {
          name: 'Parent Category',
          key: 'parentCategory'
        },
        {
          name: 'number of products',
          key: 'numberOfProducts'
        },
      ]
    }
  }

}
</script>

<style>

</style>