# Wrapping Notifications with AfterCommitEverywhere Block
# Description
Wrap notification logic with `AfterCommitEverywhere.after_commit` block to ensure notifications are sent only after the associated transaction commits. This should be considered an intermediate solution and should be replaced by adapting [transactional push](https://github.com/sidekiq/sidekiq/wiki/Advanced-Options#transactional-push).

# Example
```ruby
### 🚫 Avoid this:
class UserNotification
  def send_notification(user_id)
    user = User.find(user_id)
    # Send notification to user
  end
end

### ✅ Suggest this:
class UserNotification
  def send_notification(user_id)
    AfterCommitEverywhere.after_commit do
      user = User.find(user_id)
      # Send notification to user
    end
  end
end
```

# Reason
- Data consistency: Wrapping notification logic with `AfterCommitEverywhere.after_commit` ensures that notifications are sent only after the associated transaction commits, preventing inconsistencies in data state.
- Transactional integrity: Notifications should be sent reliably after the transaction is successfully committed, ensuring that users receive accurate and up-to-date information.

# References:
- https://github.com/sidekiq/sidekiq/wiki/Advanced-Options#transactional-push