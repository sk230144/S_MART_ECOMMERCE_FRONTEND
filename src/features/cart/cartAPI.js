// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) =>
    {
      const response = await fetch('/cart', {
        method:'POST',
        body: JSON.stringify(item),
        headers:{'content-type':'application/json'}
      })
      const data = await response.json()
      resolve({data})
    }
  );
}




export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>
    {
      const response = await fetch('/cart?user='+userId)
      const data = await response.json()
      resolve({data})
    }
  );
}

// We use here updateItem but in tutorial it have use updateCart
export function updateCart(update) {
  return new Promise(async (resolve) =>
    {
      const response = await fetch('/cart/'+update.id, {
        method:'PATCH',
        body: JSON.stringify(update),
        headers:{'content-type':'application/json'}
      })
      const data = await response.json()
      resolve({data})
    }
  );
}


export function deleteItemFromCart(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('/cart/'+userId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data: { id: userId } });
  });
}


// reset cart after order is placed

export async function resetCart(userId) {
  //here we fetch all user items and then delete all of them
  return new Promise(async (resolve) => {
   const response =   await fetchItemsByUserId(userId)
   const items=response.data;
   for(let item of items){
    await  deleteItemFromCart(item.id);
   }
   resolve({status:'success'})
  });
}