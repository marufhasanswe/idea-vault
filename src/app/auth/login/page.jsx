"use client";

import { authClient } from "@/lib/auth-client";
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
import { toast } from "react-toastify";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData?.email,
      password: userData?.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (data?.user) {
      toast.success("Successfully logged-in!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md space-y-6 border border-gray-100">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Login</h1>
          <p className="text-sm text-muted-foreground">
            Login to share your innovative idea and feedback.
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
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
            <p className="text-blue-500 cursor-pointer text-sm">
              Reset password
            </p>
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

export default LoginPage;
