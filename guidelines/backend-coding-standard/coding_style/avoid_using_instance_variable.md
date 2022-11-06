# Description
Avoid using instance variable. Always define as local variable if possible.

# Example
```ruby
class SomeClass
  # 🤔 Avoid this
  @user = User.find_by(username: "student")
  def impure_function
    # do something with the instance variable defined outside
    return result = @user.do_something...
  end

  # 👍🏻 Suggest this
  user = User.find_by(username: "student")
  def pure_function(user_id:)
    user = User.find(user_id)
    return user.do_something
  end

  # then call the pure function wtih:
  pure_function(user_id: user.id)
end
```

# Reason
- Methods sharing instance variables may indroduce side effects, causing mutatation outside the current scope and other unexpected changes.
- Value of instance variables are not easily predictable since they may be mutated from other place, therefore hardly maintainable.