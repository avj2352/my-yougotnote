function checkWinner(codeList, shoppingCart) {
    // Write your code here
    let listIndex = 0;
    let result = 0;
    let itemInListIndex = 0;
    const numberOfCodeLists = codeList.length;
    shoppingCart.forEach(shoppingCartItem => {
        const currList = codeList[listIndex];
        const secretListCurrItem = currList[itemInListIndex];
        if (secretListCurrItem === shoppingCartItem ||
            secretListCurrItem === 'anything') 
        {
            itemInListIndex++;

            if (itemInListIndex === currList.length) {
                itemInListIndex = 0;
                listIndex++;
                if (listIndex === numberOfCodeLists) {
                    result = 1;
                    return;
                }
            }
        } else {
            itemInListIndex = 0;
        }
    });

    return result;
}


const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
const shoppingCart = ['apple', 'apple', 'apple', 'banana', 'orange', 'banana'];

console.log('Is Owner winner: ', checkWinner(codeList, shoppingCart));

// Time - O(N) where N is the number of items in the customer's shopping cart
// Space - O(1) since we use only primitive variables