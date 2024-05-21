# Knex Bug Report

When doing .count('*') knex reports the typing as string, while in reality it's an object with count property.

## How to run

```yarn && yarn run test```