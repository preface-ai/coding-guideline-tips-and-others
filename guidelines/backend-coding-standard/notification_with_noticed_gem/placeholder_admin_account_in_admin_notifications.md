# Placeholder admin account in admin notifications
# Description
There will be a placeholder admin account (id should be encapsulate in `User` modal), which is used to receive all admin notifications.

# Example
```ruby
### ✅ Suggest this:
admin = User.find_by(id: User::NOTIFY_ADMIN_ID)

return unless admin

UserPasswordForgottenAdminNotification.with(
  user_id: user_id
).deliver_later(admin)
```

# Reason
- NA
