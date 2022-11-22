# Avoid raising ActiveRecord error in controller level
# Description
Avoid raising ActiveRecord error in controller level, raise custom error instead.

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
  # PasswordIncorrectError is a custom error
end
```

# Reason
- ActiveRecord error is responsible for error raised in model layer, it is intuitive that we should custom errors for controller level used.
