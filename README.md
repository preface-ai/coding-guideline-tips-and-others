This is our general coding conventions at Preface

# General

## Do & Don’t

### Don’t left meaningless comment

```ruby
## ❌ DON'T left your removed code as comment
if @target_date_timeslot.nil?
# if @start_date_timeslot.state == "open"
  slot = NomadTimeslot.new
  ...
end
  
## ✅ DO remove them before commit
if @target_date_timeslot.nil?
  slot = NomadTimeslot.new
  ...
end
```
This is because you can easily get back the reference from git history

```javascript
## ❌ DON'T left comment when the block of code can speak to itself
// update Counter
updateCounter();

// create order
const order = await createOrder(email);
  
## ✅ DO left comment only if the block of code is hard to explain
To be backfilled

```

