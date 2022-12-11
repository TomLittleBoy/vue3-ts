export const projectDir = `
│  .browserslistrc
│  .editorconfig
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  auto-imports.d.ts
│  babel.config.js
│  commitlint.config.js
│  components.d.ts
│  package-lock.json
│  package.json
│  README.en.md
│  README.md
│  tsconfig.json
│  vue.config.js
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─.vscode
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │
    │  ├─icon
    │  │      404.svg
    │  │
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          card.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  ├─hook
    │  │  │      useEchart.ts
    │  │  │
    │  │  └─src
    │  │          base-echart.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      form.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─table
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          table.vue
    │  │
    │  └─text-link
    │      │  index.ts
    │      │
    │      └─src
    │              textlink.vue
    │
    ├─components
    │  │  404.vue
    │  │
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-menu.vue
    │  │
    │  ├─page-content
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-content.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │
    │  │  ├─types
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-model
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-model.vue
    │  │
    │  └─page-search
    │      │  index.ts
    │      │
    │      └─src
    │              page-search.vue
    │
    ├─global
    │      index.ts
    │      register-properties.ts
    │
    ├─hooks
    │      use-page-modal.ts
    │      use-page-search.ts
    │      use-permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      types.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          config.ts
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │      dashboard.ts
    │      │      types.ts
    │      │
    │      └─system
    │              system.ts
    │              types.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │
    └─view
        ├─login
        │  │  login.vue
        │  │
        │  └─cpn
        │          lgoin-account.vue
        │          login-panel.vue
        │          login-phone.vue
        │
        └─main
            │  main.vue
            │
            ├─analysis
            │  ├─dashboard
            │  │      dashboard.vue
            │  │
            │  └─overview
            │      │  overview.vue
            │      │
            │      └─config
            │              dependencies.ts
            │              dev-dependencies.ts
            │              index.ts
            │              project-dir.ts
            │              technology-stacks.ts
            │
            ├─product
            │  ├─category
            │  │      category.vue
            │  │
            │  └─goods
            │      │  goods.vue
            │      │
            │      └─config
            │              content.config.ts
            │
            ├─story
            │  ├─chat
            │  │      chat.vue
            │  │
            │  └─list
            │          list.vue
            │
            └─system
                ├─department
                │      department.vue
                │
                ├─menu
                │  │  menu.vue
                │  │
                │  └─config
                │          content.config.ts
                │
                ├─role
                │  │  role.vue
                │  │
                │  └─config
                │          content.config.ts
                │          modal.config.ts
                │          search.config.ts
                │
                └─user
                    │  user.vue
                    │
                    └─config
                            content.config.ts
                            model.config.ts
                            search.config.ts`
