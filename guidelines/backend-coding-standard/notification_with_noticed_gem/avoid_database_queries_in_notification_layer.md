# Avoid Database Queries in Notification Layer
# Description
Avoid performing database queries within the notification layer. Instead, pass primitive values into the layer if needed.

# Example
### 🚫 Avoid this:
```ruby
# Outside notification level:
class Notifications::UserPasswordForgottenSubscriber
  ...

  UserPasswordForgottenAdminNotification.with(
    # 🚫 pass in user id
    user_id: user_id
  ).deliver_later(admin)
end

# Inside notification level:
class UserPasswordForgottenAdminNotification < BaseAdminNotification
  param :user_id

  def user
    # 🚫 database query with user_id
    User.find(user_id)
  end

  def first_name
    # 🚫 get attributes from the object, triggering the database query
    user.first_name
  end
end
```

### ✅ Suggest this:
```ruby
# Outside notification level:
class Notifications::UserPasswordForgottenSubscriber
  ...

  user = User.find(user_id)
  UserPasswordForgottenAdminNotification.with(
    # ✅ pass in primates
    first_name: user.first_name
  ).deliver_later(admin)
end

# Inside notification level:
class UserPasswordForgottenAdminNotification < BaseAdminNotification
  # ✅ use the value directly
  param :first_name
end

```

# Reason
- Separation of concerns: The notification layer should focus solely on the notification logic, not on database interactions.
- Improve performance: avoid n+1 query when the notification is being reused for any purpose.
