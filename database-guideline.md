# Database Guideline

## Database schema change 
**Avoid unsafe operation; avoid misalignment to our data pipeline.**

> Add Table only, avoid deletion of table(unless legacy)
> 
> Add Column only, avoid deletion or rename of Column(unless legacy)

If we really need to alter column and we know the data is creitical or big, consider doing it in 3 phases:

* Phase 1
  * Instead of dropping the old column directly, add the new column
  * keep both old & new column working as expected in parallel
  * Ship the DB & code change
* Phase 2
  * Data Patching to update old existing data to have new column with correct data
  * Date pipeline also migrate to consume the new column & patch all old data
* Phase 3
  * Remove old column
  * Remove old column reference in code
  * Ship the DB & code change

## Database naming convention
* In general
  * Be declartive
  * Avoid ambiguity naming
  * Avoid abbreviation(unless well-known)
    * e.g. perfer `annual_pass_id` instead of `ap_id`
  * Wording should be ubiquitous(stick to our common understanding)
    * e.g. perfer `nomad` instead of `teacher`
* Table
  * snake_case
  * Plural
  * be specific
  * e.g.
    * ❌ `studentannualpass`
    * ✅ `student_annual_passes`
* Column
  * snake_case again
  * be self descriptve
  * the verb tense matter
  * e.g.
    * ❌ scheduletime
    * ✅ scheduled_at
