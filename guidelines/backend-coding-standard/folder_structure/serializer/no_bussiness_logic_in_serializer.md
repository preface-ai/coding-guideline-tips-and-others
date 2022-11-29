# No bussiness logic in serializer
# Description
Serializer should contain logic to transform and massage different attribute into expected shape based on our API design.
It shouldn't contain any business logic in it, they should live within module / service / modal level.

# Example
```ruby
# 🤔 Avoid this: 
class SomeOrderSerializer
  attributes :amount

  def amount
    object.by_user.annual_pass_discount? ? object.final_amount_cents * 0.95 : object.final_amount_cents
  end
end

# 👍🏻 Suggest this:
class SomeOrderSerializer
  attributes :amount
end

# and in contoller

class SomeController
  order = Order.find_by(id: xxx)

  if order.by_user.annual_pass_discount?
    order.amount = order.final_amount_cents * 0.95
  else
    order.amount = order.final_amount_cents
  end

  serialized_course = ActiveModelSerializers::SerializableResource.new(
      order,
      serializer: SomeOrderSerializer,
    ).as_json
end

```

# Reason
- Serializers should only be responsible for views, i.e.: how data is returned / displayed for FE, not for bussiness / logic.
