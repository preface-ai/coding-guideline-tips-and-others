# Nested DB Transactions

## TL;DR:

Always use `ActiveRecord::Base.transaction(requires_new: true)` to ensure nested DB transactions can be rolled back in Ruby on Rails.


## Explanation:
The method `ActiveRecord::Base.transaction` is used to create a new database transaction within the current transaction block.

When you use ActiveRecord::Base.transaction, any database operations that are performed within the block are executed atomically, meaning that they will either all succeed or all fail.
However, if you have nested transactions within a transaction block, the outer transaction may not be rolled back if an error occurs within the inner transaction. This can cause data inconsistencies and other problems.

To avoid this issue, you should use the `requires_new: true` option when creating a new transaction within a transaction block.
This option ensures that the inner transaction is completely independent of the outer transaction, and any errors that occur within the inner transaction will cause both the inner and outer transactions to be rolled back.

Here's an example of how to use ActiveRecord::Base.transaction(requires_new: true):

```ruby
# pgsql
ActiveRecord::Base.transaction(requires_new: true) do
  # perform some database operations
  # ...

  ActiveRecord::Base.transaction(requires_new: true) do
    # perform some more database operations
    # ...

    if some_error_occurs
      # this will roll back the inner and outer transactions
      raise ActiveRecord::Rollback
    end
  end
end
```

## Bonus

It's worth noting that PostgreSQL does not support nested transaction rollback by default.
Instead, the rollback at the Rails level is achieved through the use of Save Points.

Save Points allow you to mark a specific point in a transaction where you can later roll back to if necessary.
When you use `ActiveRecord::Base.transaction(requires_new: true)`, Rails creates a Save Point for the outer transaction before starting the inner transaction. If an error occurs within the inner transaction, Rails will roll back to the Save Point of the outer transaction, effectively rolling back both transactions.
