import React from "react";
import { useForm } from "../hooks/useForm";
import { Box, Input, Button, VStack, Heading } from "@chakra-ui/react";

const FormComponent = () => {
    const { values, handleChange, resetForm } = useForm({ name: "", email: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted:", values);
        resetForm();
    };

    return (
        <Box p={5} maxW="400px" mx="auto" border="1px solid #ccc" borderRadius="8px">
            <Heading size="md" mb={4}>Custom Hook Form</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing={3}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </VStack>
            </form>
        </Box>
    );
};

export default FormComponent;
