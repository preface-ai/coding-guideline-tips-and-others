# Folder Structure Overview
# Description
This document provides a comprehensive overview of the backend's folder structure and how it handles requests, clarifying the responsibilities of each layer.

![figure](./folder_structure_overview.png)

# Overview

## UI Layer
- The system (Rails) dispatches requests to a controller's action (method) based on `config/routes.rb` (Routes).
- Requests can be categorized as `Command` (change something, including writing to the database) or `Query` (retrieve data from the system, read-only).
- It's best practice to avoid writing business logic directly in the controller. Instead, it should be kept in modules (our Application + Business Layer):
    - For `Command` requests, the business logic must be encapsulated as a method in a module.
    - For `Query` requests, it's okay to query using Active Record models in the controller layer if the logic is simple. Complicated logic should still be encapsulated as a module method.

## Application + Business Layer
- `Module` contain namespaces, each namespace is either a special Domain or a Aggregate root of our system entities. e.g. orders, happenings, notifications, etc.
- Ideally, each module class(file) should concern only one feature/ Business-intention. So the method name can be as simple as `call`
- Here a file structure example
```
app/
  |- modules/
    |- happenings/
      |- cancel_happening.rb (class Happenings::CancelHappening)
        |- #call(xxx)
      |- create_series.rb (class Happenings::CreateSeries)
        |- #call(xxx)
```
- free to use Active Record models to communicates with the database for `command` or `query` operations.
