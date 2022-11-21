# Aways write pure function
# Description
Write function which always returns the same set of results given a same set of arguments.

# Example
```ruby
# 🤔 Avoid this
@user = User.first
def impure_function
  # do something with the instance variable defined outside
  @user.update(name: 'some name')
end

# 👍🏻 Suggest this
user = User.first

def pure_function(user:)
  user.update(name: 'some name')
end

# then call the pure function wtih the parameters explicitly:
updated_user = pure_function(user: user)
```

# Reason
- The output only depends on inputs, so that pure function can prevent side effects, ensuring not interacting with the environment outside the function, and not causing mutatation with other things that is not expected to change.
- Output are stable and highly predictable, make it easier to maintain.
- Easier for unit testing due to its highly predictable outcomes.