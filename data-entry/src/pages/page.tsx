import React, { useEffect, useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Button, SelectField } from "@chakra-ui/react";
import { fetchProductCategories, submitOrder } from "../api/api";
import { NavLink } from 'react-router-dom';


interface Category {
  id: string;
  name: string;
}

// const categories = [
//   { id: "1", name: "Electronics" },
//   { id: "2", name: "Clothing" },
//   { id: "3", name: "Books" },
//   { id: "4", name: "Home & Garden" },
//   { id: "5", name: "Health & Beauty" },
// ];

const DataEntryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    product_name: "",
    product_category: "",
    price: "",
    order_date: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categories = await fetchProductCategories();
      setCategories(categories);
    } catch (error) {
      setError("Failed to fetch categories");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await submitOrder(formData);
      console.log("Order submitted successfully");
      setFormData({
        customer_name: "",
        product_name: "",
        product_category: "",
        price: "",
        order_date: "",
      });
    } catch (error: any) {
      setError("Failed to submit order");
    }
  };

  const [activePage, setActivePage] = React.useState(""); // State to track active page

    // Function to handle navigation click and update active page
    const handleNavigation = (path: string) => {
        setActivePage(path);
    };

  return (
    <Box
      w="full"
      backgroundColor="#EEEEEE"
      display="flex"
      flexDir={"column"}
      p={"2rem"}
    >
      <form onSubmit={handleSubmit} className="form">
        <FormControl>
          <FormLabel>Customer Name:</FormLabel>
          <Input
            className="input"
            type="text"
            value={formData.customer_name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Name:</FormLabel>
          <Input
            className="input"
            type="text"
            value={formData.product_name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Category:</FormLabel>
          <SelectField
            className="input"
            value={formData.product_category}
            onChange={handleInputChange}
            style={{ paddingInlineEnd: "0px" }}
          >
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </SelectField>
        </FormControl>
        <FormControl>
          <FormLabel>Price:</FormLabel>
          <Input
            className="input"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Order Date:</FormLabel>
          <Input
            className="input"
            type="date"
            value={formData.order_date}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          mt={4}
          backgroundColor="#2868B2"
          color="white"
          type="submit"
          p="1rem"
          width="10rem"
          borderRadius="2rem"
          cursor="pointer"
        >
          Submit
        </Button>
        <NavLink to="/dashboard" onClick={() => handleNavigation("dashboard")} className="flex relative flex-col  text-xs text-center text-gray-500 whitespace-nowrap font-[450] ">
          <div className="gap-0 slashed-zero text-end">AdminDashboard</div>
        </NavLink>
      </form>
    </Box>
  );
};

export default DataEntryForm;