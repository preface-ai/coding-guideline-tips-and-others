# Use bang methods to capture errors that we don't expect to happen.
# Description
Use bang methods to capture errors that we don't expect to happen.
To be specified, use
- `#save!`
- `#update!`
- `#create!`


# Example 1
```ruby
# 🤔 Avoid this: Custom text message when it's failed.
def assign_user(user_id:)
  # ...
  return raise "Fail to assign the user to the line item." unless @line_item.save
  # ...
end

# 👍🏻 Suggest this: Let validation message help you in failed cases.
def assign_user(user_id:)
  # ...
  @line_item.save!
  # ...
end
```

# Example 2: Be careful! Errors in form submitting are usually expected. Don't always the bang methods!
```ruby

# 👍🏻 Suggest this: When using SimpleForm in Rails, using non-bang methods can let you render the form page with correct error messages.
def create
  # ...
  if @content.save
    redirect_to contents_path, notice: 'Content is created successfully.'
  else
    render :new, error: 'Error creating content.'
  end
end

# 🤔 Avoid this: 500 error is raised and the well designed error display in SimpleForm is not used.
def create
  # ...
  @content.save!

  redirect_to contents_path, notice: 'Content is created successfully.'
end

```

# Reason
- With bang methods, validations always run. If any of them fail, `ActiveRecord::RecordInvalid` gets raised.

# Remarks
- `#destroy` is optional since the only reason of failed case in this moment is `PG::ForeignKeyViolation: ERROR`, which always raises an error. For example,
  ```
  Caused by PG::ForeignKeyViolation: ERROR:  update or delete on table "happenings" violates foreign key constraint "fk_rails_f644d263bb" on table "participants"
  DETAIL:  Key (id)=(43) is still referenced from table "participants".
  ```

- `#update` is also a method of `ActiveRecord::Relation`, calling `#update!` on it will raise an error.
  ```ruby
  NomadTimeslot.where(user_id: 405).update!(state: 'open')
  # > NoMethodError: undefined method `update!' for #<NomadTimeslot::ActiveRecord_Relation:0x00000001192d0270>
  ```