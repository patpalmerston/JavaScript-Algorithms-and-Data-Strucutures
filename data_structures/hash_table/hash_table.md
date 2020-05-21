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

DEALING with COLLISIONS
-Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collision but wll focus on two;

     - Separate Chaining - With separate chaining , at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
        -This allows us to store multiple key-value pairs at the same index

    - Linear Probing
        - With linear probing, when we find a collision, we search through the array to find the next empty slot.
        - Unlike with separate chaining, this allows us to store a single key-value at each index

KEYS / VALUES

-   Keys

    -   Loops through the hash table array and returns an array of keys in the table

-   Values
    -   Loops through the hash table array and returns an array of values in the table

BIG O of Hash Tables
-Insert: O(1)
-Deletion: O(1)
-Access: O(1)
