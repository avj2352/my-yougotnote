/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.mem = new Map();    
    this.memory = capacity;
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  LRUCache.prototype.get = function(key) {
      if (this.mem.size === 0) return -1;
      const list = this.mem.keys();
    //   console.log('List is: ', list);
      const memKey = Array.from(this.mem.keys()).filter(item => item.key === key)[0];
      if (memKey) return this.mem.get(memKey);      
      return -1;
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LRUCache.prototype.put = function(key, value) {
      if (this.mem.size >= this.memory) {
          console.log(this.mem instanceof Map); // true
          const memKey = Array.from(this.mem.keys()).filter(item => item.pos === 0)[0];          
        //   console.log('Deleted: ', this.mem.delete(memKey));
      }
      this.mem.set({key, pos:this.mem.size}, value);
  };
  
  /** 
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */


  // Testing
  const cache = new LRUCache(3);
  cache.put(3, 30);
  cache.put(4, 40);
  cache.put(5, 50);
  cache.put(6, 60);
  console.log('Value is: ', cache.get(3));