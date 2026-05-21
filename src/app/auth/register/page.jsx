"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md space-y-6 border border-gray-100">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Register</h1>
          <p className="text-sm text-gray-500">
            Register to share your innovative idea and feedback.
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter image url" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must contain uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain a number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>8+ chars, 1 uppercase, 1 number</Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Button type="submit" className="w-full ">
              <Check />
              Log in
            </Button>
            <div className="flex justify-center items-center gap-3">
              <Separator />
              <div className="text-muted-foreground whitespace-nowrap">Or</div>
              <Separator />
            </div>
            <Button className="w-full" variant="tertiary">
              <FcGoogle />
              Sign in with Google
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
