# Student CRUD application monorepo.

## Get Started
Follow instructions to clone and run project

#### Prerequisites
- Node/Npm
- [Lerna](https://github.com/lerna/lerna): installed globally. `npm i lerna -g`

### Clone repo
`git clone https://github.com/neharkarvishal/student_crud_module.git`

### Install dependencies using lerna
`npm run bootstrap`

### Hoist node_modules using lerna
`npm run hoist`

### Run project
- **Backend**
`npm start --prefix packages/backend`
- **Frontend**
`npm start --prefix packages/frontend`
- **Both**
`npm start`
