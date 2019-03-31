####################################### Data science with Python ########################################

# Dictionary
my_dict = {
    "brand":"ford",
    "model":"Mustang",
    "year":1964
}
# or to use constructor dict
my_dict = dict(brand = "ford", model = "Mustang", year = 1964)

# To read by index
read_model = my_dict["model"]

# change value
my_dict["year"] = 1969

# loop through
## this print all keys
for keys in my_dict:
    print item

## this print all values
for keys in my_dict:
    print(my_dict[keys])
# or
for value in my_dict.values():
    print(value)

# to print all key value pairs: 
for key in my_dict:
    print(key, my_dict[key])
# or
for key,value in my_dict.item():
    print(key,value)

# pandas can form tables, access by index or index number, both in series or in dataframe format