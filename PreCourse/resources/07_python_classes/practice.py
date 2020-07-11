## This is the practice module
##

## To import it just type 

   ## ``import practice''
    
##    in Python


import math
pi = math.pi

class Circle(object):
    
    """computes area and circumference of circles of radius r"""
    
    def __init__(self, r=1):
        "Initialize circle with radius r"
        self.r = r

    def area(self):
        "area of circle of radius r"
        return pi*self.r**2

    def circumference(self):
        "circumference of circle of radius r"
        return 2*pi*self.r
    
    

class Sphere:
    
    """ computes volume and surface area of sphere of radius r """
    
    
    def __init__(self,r=1):   # radius of sphere
        "Initialize sphere with radius r"
        self.r = r 
    
    
    def volume(self):
        "Volume of sphere of radius r"
        return (4/3)*pi*(self.r)**3
    
    
    def surface(self):
        "Surface of a sphere of radius r"
        return 4*pi*(self.r)**2
        
        
class Box:
  
    r"""computes volume and surface area of a box of dimensions width, height, length = w, h, l """
    
    def __init__(self, w = 1,   # width
                       h = 1,   # height
                       l = 1):   # length
        "Intialize box with width, height, length w, h, l"
        self.w, self.h, self.l = w, h, l
        
    def volume(self):
        "volume of a box of width, height, length w, h, l"
        return self.w * self.h * self.l
    
    def surface(self):
        "surface of a box of width, height, length w, h, l"
        return 2 *(self.w * self.w + self.h * self.l + self.w * self.l )
        
class Consumer:

    def __init__(self, w):
        "Initialize consumer with w dollars of wealth"
        self.wealth = w

    def earn(self, y):
        "The consumer earns y dollars"
        self.wealth += y

    def spend(self, x):
        "The consumer spends x dollars if feasible"
        new_wealth = self.wealth - x
        if new_wealth < 0:
            print("Insufficent funds")
        else:
            self.wealth = new_wealth                