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
            <h2 className="text-center font-semibold text-3xl mt-10">Our Customer Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                {customers.map(customer => <Customer key={customer.id} customer={customer}></Customer>)}
            </div>
        </div>
    );
};

export default Customers;