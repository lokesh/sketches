## Dev

-   Size as multiples of 320. Default to 640 x 640.
-   Run `live-server` to get live reloading.

### Initial set up

`npm i -g live-server`


## P5

color values in canvas = 1 dimensional array, R G B A

## Ideas


TODO: One dimensional automata? Apply to image? Use grid?


## Sketches


### Cellular automata

**2022-09-13 - Life attract repel**
Creating organic, unpredictable moment with simple attract and repel code. The key is to have at least three distinct element types interacting.

**2022-09-23 - Reaction-diffusion**
Two chemicals interacting, we'll use 'food' and 'bunnies'.

Food 
1. Diffuse
2. Kill - Bunnies eat feed
3. Feed - Add more feed at feed rate

Bunny
1. Diffuse
2. React - Bunnies eat food and grow more bunnies
3. Kill - Use kill rate


**2022-09-26 1d automata**

Using two neighbors and current cell to determine next. 8 possible configurations ([0, 0, 1], [1, 0, 1], et al)

Ruleset is stored in an 8 slot array,related to these configs:
000 001 010 011 100 101 110 111

0 1 0 1 1 0 1 0

**2022-09-29 Cyclical cellular automata**

..