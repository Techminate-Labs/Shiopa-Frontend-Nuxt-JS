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
