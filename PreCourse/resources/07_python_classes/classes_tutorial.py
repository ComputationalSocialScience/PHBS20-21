# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:light
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.4.2
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# + [markdown] slideshow={"slide_type": "slide"}
# ### Classes tutorial
#
# Classes are objects that give Python much power
#
# You have already encountered some of them -- e.g., lists, tuples
#
# Classes have methods associated with them
#
#
# -

x = (1, 2, 3, 4, 4, 4, 3)   ## a tuple
y=[1, 2, 3, 4]   ## a list
print(y)

# +

print(x.count(1), x.count(4))


# + slideshow={"slide_type": "slide"}

print(y)
y.reverse()
print(y)

# -

xx = list(x) ### convert  tuple to list

xx

yy = tuple(y)

yy

y.
