What is a Hash Table?
-Hash tables are used to store key-value pairs
-They are like arrays, but the keys are not ordered
-Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

Can use an array or list to implement hash table

-   In order to look up values by key, we need a way to convert keys into valid array indices
-   A function that performs this task is called a hash function

Hash tables take a key:value and give you an index for where that key:value is located
pass the 'key' to a hash function that that will give you a reference to the index at which it stores that key:value in the hashtable

Hash Function

-   takes any size input and outputs data of a fixed size
-   used daily to protect data and used often in crypto
    -Good Hash Functions
    -Fast(constant time)
    -Doesnt cluster outputs at specific indices, but distributes uniformly
    -Deterministic(same input yields same output)
    -PRIME_NUMBERS
    -The prime number in the hash is helpful in spreading out the keys more uniformly.
    -It's also helpful if the array that you're putting values into has a prime length.
