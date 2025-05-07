import React, { useState } from 'react'

export default function useFilter(books) {
    let [search, setSearch] = useState('')
    

    let filteredOrders = books.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))

  return {setSearch,filteredOrders}
}
