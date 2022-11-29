# Raise custom error instead of ActiveRecord error
# Description
Avoid raising ActiveRecord error manually, raise custom error instead.

# Example
```ruby
### Inside controller level:

# 🤔 Avoid this: 
def update_password(old_password:)
  # ...
  raise ActiveRecord::RecordInvalid unless user.valid_password?(old_password)
end

# 👍🏻 Suggest this: 
def update_password(old_password:)
  # ...
  raise PasswordIncorrectError unless user.valid_password?(old_password)
  # where `PasswordIncorrectError` is a custom error
end
```

# Reason
- ActiveRecord error is responsible for error raised in ActiveRecord, we should not raise it for other purposes.
- A custom error should be created instead for your own purpose.
