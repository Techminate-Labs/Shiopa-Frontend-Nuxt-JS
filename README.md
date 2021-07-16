# shiopa

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Git helper

If you need some help with git, follow this procedure.

```
1. clone your forked repo
Command : git clone your_repository_name 
2. then setup the original repository that you forked from as upstream
Command: git remote add upstream original_repository_name

3. Each time you start coding make a fetch request to download the latest codes from original repo and be updated
Command: 
git fetch upstream
git pull upstream master

Now you're all set.

To push your own codes follow these steps:
1. git add .
2. git commit -m "commit name"
3. git push -u origin your_repo_branch_name

Then go to your repo and make a pull request.
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Naming conventions

### Naming folders

Folder structure should be organized in such a way that we understand any file's location on context.
The folder name should be minuscule only and written with a single word.

To help new contributors, it is advised to have a clear separation of the parts of the application.

#### Examples

Say we are looking for the **Cart component**.
Since this is a component, it has to be in the `/component` folder.

```
components/
  accounts/
    Login.vue
    Register.vue
  administration/
  cart/
    Cart.vue
    OrderSummary.vue
    MiniCart.vue
  products/
    Products.vue
    Filters.vue
    single/
      ProductInfo.vue
      ProductDescription.vue
```

### Naming files
### Naming variables
### Naming functions
