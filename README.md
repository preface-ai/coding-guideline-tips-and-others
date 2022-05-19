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

### Don’t left meaningless comment

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
create_table "products", force: :cascade do |t|
  ...
  t.string "ptype", null: false
end
## 👍🏻 Probably better now? It really depends on the context.
create_table "products", force: :cascade do |t|
  ...
  t.string "product_type", null: false
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

