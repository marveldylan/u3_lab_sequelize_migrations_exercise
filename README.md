# Sequelize Migrations Exercise

## Objectives

- Practice running migrations
- Fixing schema errors
- Renaming columns, tables and changing field types

## Getting Started

- Fork and Clone

### Step 1: Installing Dependencies

```sh
npm init -y
```

```sh
npm install sequelize pg && npm install --save-dev sequelize-cli
```

```sh
sequelize init
```

Modify your `config.json`:

```json
{
  "development": {
    "database": "sequelize_migrations_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "sequelize_migrations_test",
    "dialect": "postgres"
  },
  "production": {
    "database": "sequelize_migrations_production",
    "dialect": "postgres"
  }
}
```

```sh
sequelize db:create
```

```sh
touch .gitignore && echo "node_modules/" >> .gitignore
```

```sh
git add .
git commit -m '<Your Message>'
git push
```

### Step 2: Creating A Model

```sh

```
