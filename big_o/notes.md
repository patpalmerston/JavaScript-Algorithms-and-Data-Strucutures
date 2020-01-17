-   Big O
    -   Constants dont matter:
        # linear
        O(2n) = O(n) // the number of operations happens equal to the value of the parameter
        # constant
        O(500) = O(1) //the number of operations happens only once regardless of parameter value
        # quadratic
        O(13n2) = O(n2) // the constant does not matter, we know that n will be squared and that matters most


      # Space Complexity (also known as auxiliary space when inside the algorithm minus the inputs space)

        # Space Complexity in JS
        - Primitive types
          - most primitive(booleans, numbers, undefined, null) are constant space
          - Strings require O(n) space (where n is the string length)
          - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
