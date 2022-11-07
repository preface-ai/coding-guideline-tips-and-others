# Description
No data query in serializer, should do the query in contoller / module level.

# Example
```ruby
# 🤔 Avoid this: querying inside serializer
class SomeCourseSerializer < ActiveModel::Serializer
  attribule: bootcamps

  def bootcamps
    Bootcamp.where(course: course, ...)
  end
end

# 👍🏻 Suggest this: Accept input parameters in serializer
class SomeCourseSerializer < ActiveModel::Serializer
  has_many :bootcamps, key: :timeslots, serializer: Api::V2::BootcampSerializer

  def bootcamps
    @instance_options[:bootcamps]
  end
end

# Then passing the parameters to the serializer from controller level
# inside some contoller method...
course = Course.where(...)
bootcamps = Bootcamp.where(course: course, ...)

serialized_course = ActiveModelSerializers::SerializableResource.new(
  course,
  include: '**',
  serializer: SomeCourseSerializer,
  bootcamps: bootcamps,
).as_json

```

# Reason
- Serializers should only be responsible for views, i.e.: how data is returned / displayed for FE.
- May causing n + 1 query since it may just be a partial view / serializer.
