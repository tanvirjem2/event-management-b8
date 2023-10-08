import { useEffect, useState } from "react";
import Customer from "./Customer";

const Customers = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('/Customers.json')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])

    return (
        <div>
            {customers.map(customer => <Customer key={customer.id} customer={customer}></Customer>)}
        </div>
    );
};

export default Customers;