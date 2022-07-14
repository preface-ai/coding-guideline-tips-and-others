---
sidebar_position: 1
tags:
  - coding
  - namings
  - ruby
  - js
  - python
---

# Coding Guideline

This is our coding conventions & guideline at Preface.

We believe following coding conventions is a quick win for us to obtain bettter code quality with almost zero cost.

## Comment

### Don't comment unused code, remove them directly

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

## This is because you can easily get back the removed content from git history
```

### Don’t leave meaningless comment

```javascript
/* ❌ DON'T left comment when the block of code can speak to itself already */
// update Counter
updateCounter();

// create order
const order = await createOrder(email);

/* ✅ DO left comment only when the block of code is hard to explain or understand */
useEffect(() => {
  // this is a workaround of flashing unstyled page problem
  setTimeout(() => removeNoFouc(), 500);
}, []);
```

## Naming

### Avoid naming things in short form

```ruby
## 🙅🏻‍♂️ No good. What does the `p` mean in `ptype`?
class CreateProduct < ActiveRecord::Migration[5.2]
  def change
    create_table "products", force: :cascade do |t|
      ...
      t.string "ptype", null: false
    end
  end
end
## 👍🏻 Probably better now? It really depends on the context.
class CreateProduct < ActiveRecord::Migration[5.2]
  def change
    create_table "products", force: :cascade do |t|
      ...
      t.string "product_type", null: false
    end
  end
end
```

```javascript
/* ❌ avoid this */
const p = data.products[key];
...
if (p.item) {
  // it's hard to understand what `p` mean at this point
}

/* ✅ better */
const product = data.products[key];
...
if (product.item) {
  // we don't need to search the code to understand this.
}
```

```javascript
/* [Exception case] Unless the short form is well known */

/* 👌🏻 OK to use `i` in for loop */
for (let i = 0; i < 9; i++) {
  // `i` is wellknown naming being used in for loop 😊
}
```

## Arguments of function/method

## Prefer named argument

```ruby
# In Ruby

# ❌ Avoid this
def add_line_item_to_cart(currency, user_id, chosen_product, course_id, cart, line_item, bootcamp_id, group_event_id)
 # ...
end

# When call this:
>>> add_line_item_to_cart("HKD", 123, product, 3, current_cart, li, nil, nil)
# This is short but you cannot easily understand what each argument stand for.
# This is also very easy to mess up the order when you try to call this function.

# ✅ Prefer named when there are multiple arguments:
def add_line_item_to_cart(currency:, user_id:, chosen_product:, course_id:, cart:, line_item:, bootcamp_id:, group_event_id:)
 # ...
end

# When call this:
>>> add_line_item_to_cart(
      currency: "HKD",
      user_id: 123,
      chosen_product: product,
      course_id: 3,
      cart: current_cart,
      line_item: li,
      bootcamp_id: nil,
      group_event_id: nil
    )
# This become verbose but you can easily understand what each argument means right away.
```

```python
# In Python

def do_something(a, b, c):
 # ...

# 🤔 Instead of call this via positional arguments:
>>> do_something(6, 44, 731)
# 👍🏻 Try to use keyword arguments:
>>> do_something(a=6, b=44, c=731)
```
