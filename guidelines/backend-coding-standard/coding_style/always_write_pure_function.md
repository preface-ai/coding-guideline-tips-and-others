# Description
Write function which always returns the same set of results given a same set of arguments.

# Example
```ruby
class SomeClass
  @instance_variable = "some_variable"   # Avoid using instance variables as well (see avoid_using_instance_variables)

  # 🤔 Avoid this
  def impure_function
    # do something with the instance variable defined outside
    return result = @instance_variable.do_something...
  end

  # 👍🏻 Suggest this
  def pure_function(variable:)
    return variable.do_something
  end

  # then call the pure function wtih:
  pure_function(variable: @instance_variable)
end
```

# Reason
- The output only depends on inputs, so that pure function can prevent side effects, ensuring not interacting with the environment outside the function, and not causing mutatation with other things that is not expected to change.
- Output are stable and highly predictable, make it easier to maintain.
- Easier for unit testing due to its highly predictable outcomes.