-   Big O

    # Time complexity - what the input does that matters most : but the complexity is related to both time or space. Space is also O(n), O(1), O(n2)........best to worst = O(1), O(log n), O(n), O(nlog n), O(n2)

    -   Constants dont matter:

        # linear

        O(2n) = O(n) // the number of operations happens equal to the value of the parameter

        # constant

        O(500) = O(1) //the number of operations happens only once regardless of parameter value

        # quadratic

        O(13n2) = O(n2) // the constant does not matter, we know that n will be squared and that matters most

        # logarithmic = O(log n)

        -   log2(8) = 3 is 2(3) = 8
        -   log2(value) = exponent is 2(exponent) = value
        -   The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one. (8/2 = 4, 4/2 = 2, 2/2 = 1)

        -   O(log n) is optimal - especially for efficient algorithms / Recursion


      # Space Complexity (also known as auxiliary space when inside the algorithm minus the inputs space)

        # Space Complexity in JS
        - Primitive types
          - most primitive(booleans, numbers, undefined, null) are constant space
          - Strings require O(n) space (where n is the string length)
          - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

        # what are the things that take up space
        - variables
        - no matter how big the variable get you still only have those variable that take up that space.    Looping takes time, but the incremented variable is still in its single space.

        # O(log n)
          - Recursion - great for space complexity


      # Objects and Arrays Space Time Complexity
        -Objects
          - O(1) for insertion, removal, access / hasOwnProperty()
          - O(n) for searching(checking to see a given piece of info is in a value some where, potential     need to check every property ) / Object.keys, Object.values, Object.entries

        -Arrays
          - O(1) for Access
          - O(n) for Searching
            - for insertion and removal (depends)(at the end O(1) is always best, no need to re adjust all items)
                  - inserting at the beginning of an array would be O(n)
                  - removal at the beginning of an array would be O(n)
            # Array Methods
              - O(1) for push, pop
              - O(n) for shift, unshift, concat, slice, splice, (forEach/map/filter/reduce/etc...)
              - O(n * log n) for sort
