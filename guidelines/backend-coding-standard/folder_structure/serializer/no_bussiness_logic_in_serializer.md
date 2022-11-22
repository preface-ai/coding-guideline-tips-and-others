# No bussiness logic in serializer
# Description
No bussiness logic in serializer, should do it in contoller / module level.

# Example
```ruby
# 🤔 Avoid this: 
class SomeUserSerializer
  attributes :user_status

  def user_status
    object.student? ? "student" : "not student status"
  end
end

# 👍🏻 Suggest this:
class SomeUserSerializer
  attributes :user_is_student?
end

# and in contoller

class SomeController
  user = User.find_by(username: "user_name")

  user.user_status = 
    if user.student?
      "student"
    else
      "not student status"
    end

  serialized_course = ActiveModelSerializers::SerializableResource.new(
      user,
      serializer: SomeUserSerializer,
    ).as_json
end

```

# Reason
- Serializers should only be responsible for views, i.e.: how data is returned / displayed for FE, not for bussiness / logic.
