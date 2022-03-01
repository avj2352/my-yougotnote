# Dynamic Programming - Alvin
- [Alvin - Dynamic Programming 2022-02-26T21:12:00](https://app.yougotnote.com/#/playlist/621acae0e33dcf0016c739dd)
- [All types of sorting in Javascript](https://app.yougotnote.com/#/playlist/621b87696f66cf0016e22ad3)
- [Graph Interview Questions - Alvin (Freecodecamp)](https://app.yougotnote.com/#/playlist/621db62425aef300163ae770)
- [Binary Tree Questions - Alvin](https://app.yougotnote.com/#/playlist/621dd0ac25aef300163ae776)


Write a function, islandCount(), that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

The given graph is what we call a - Grid Graph
A Grid Graph is a 2D array with MXN - M being Rows, N being elements
Not a square grid graph, this Grid Graph can be Asymmetric - meaning M !== N (see test_03)
The function should return a Number (ie., number of islands)


Space Time Complexity: 
 
Consider R & C the rows and columns of the grid since it's a 2D grid
 
+ Time: O(rc)  ~ imagine have one large island and no water, then our time will be traversal throughout the grid
+ Space: O(rc) 
 