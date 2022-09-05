# useMemo

So there are two use cases for useMemo

1. useMemo can wrap slow functions to stop them from recomputing on every single render but rather when the input passed to it changes

2. you can use useMemo when you want the reference to the object to remain the same after each render if none of the internal workings change and to only update the reference when the actual contents of the object change instead of updating the reference on every render