Dijkstra - Why is it Useful?
-GPS - finding fastest route
-Network Routing - finds open shortest path for data
-Biology - used to model the spread of viruses among humans
-Airline tickets - finding cheapest route to your destination
-Biology - used to model the spread of viruses among humans
-Many other uses

THE APPROACH

1. Every time we look to visit a new node we, pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're goin to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node
