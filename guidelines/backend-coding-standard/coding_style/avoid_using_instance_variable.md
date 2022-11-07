# Avoid using instance variable
# Description
Avoid using instance variable. Always define as local variable if possible.

# Example
```ruby
# 🤔 Avoid this
class SomeClass
  def context
    @user = User.find_by(username: "student")
    result = impure_function
  end

  def impure_function
    # do something with the instance variable defined outside
    result = @user.do_something...
  end
end

# 👍🏻 Suggest this
class SomeClass
  def context
    user = User.find_by(username: "student")

    # call the pure function wtih explict decleared parameters:
    result = pure_function(user_id: user.id)
  end

  def pure_function(user_id:)
    user = User.find(user_id)
    user.do_something
  end
end
```

# Reason
- Methods sharing instance variables may indroduce side effects, causing mutatation outside the current scope and other unexpected changes.
- Value of instance variables are not easily predictable since they may be mutated from other place, therefore hardly maintainable.