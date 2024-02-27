# Naming Convention
# Description
Follow a naming convention for notification classes, using the format `{{event}}{{notification_type}}Notification`.

# Example
```ruby
### 🚫 Avoid this:
class NotificationForScheduleClass

### ✅ Suggest this:
class StudentScheduledClassAdminNotification
```

# Reason
- Easily distinguish between different notification types
