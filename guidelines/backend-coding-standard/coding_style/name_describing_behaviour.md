# Always create function name with behaviour instead of implementations
# Description
Create function name which describes the function behaviour instead of implementations details.

# Example
```ruby
# 🤔 Avoid this
def set_order_payment_state_as_paid(order:)
  order.payment_state = 'paid'
  order.save
end

# 👍🏻 Suggest this
def fulfill_order(order:)
  order.payment_state = 'paid'
  order.save
end
```

# Reason
- Exposing the implementation details will enhance the readiability and maintainability.