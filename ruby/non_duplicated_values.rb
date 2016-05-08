def non_duplicated_values(values)
  values.find_all do |value|
    values.count(value) == 1
  end
end
