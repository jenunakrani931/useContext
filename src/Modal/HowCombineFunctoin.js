import { useEffect } from "react";

const [filterOption, setFilterOption] = useState({
    sortBy: '',
    categrory: '',
    price: ''
})

const handleApplyFilter = () => {
    console.log(newData);
    const filterData = []
    if(filterOption.sortBy?.length) {

    }
    if(filterOption.categrory?.length) {

    }

    if(filterOption.categrory?.price) {

    }
}

useEffect(() => {

}, [filterOption.sortBy, filterOption.categrory, filterOption.price])

const handleChange = (value, key) => {
    setFilterOption({...filterOption, [key]: value``})
}